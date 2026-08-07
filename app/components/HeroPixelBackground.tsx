"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function getThemeColors() {
  const style = getComputedStyle(document.documentElement);
  return {
    background: style.getPropertyValue("--background").trim(),
    primary: style.getPropertyValue("--brand-from").trim(),
    secondary: style.getPropertyValue("--brand-secondary").trim(),
    accent: style.getPropertyValue("--brand-to").trim(),
    foreground: style.getPropertyValue("--foreground").trim(),
  };
}

function hexToVec3(colorStr: string): THREE.Vector3 {
  const color = new THREE.Color();
  const trimmed = colorStr.trim();
  if (trimmed.startsWith("rgb")) {
    color.setStyle(trimmed);
  } else {
    color.set(trimmed.startsWith("#") ? trimmed : `#${trimmed}`);
  }
  return new THREE.Vector3(color.r, color.g, color.b);
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uTime;
  uniform float uPixelSize;
  uniform float uReducedMotion;
  uniform vec3 uBg;
  uniform vec3 uPrimary;
  uniform vec3 uSecondary;
  uniform vec3 uAccent;
  uniform vec3 uForeground;

  varying vec2 vUv;

  float bayer4x4(vec2 p) {
    p = mod(floor(p), 4.0);
    int i = int(p.x + p.y * 4.0);
    float v = 0.0;
    if (i == 0) v = 0.0;
    else if (i == 1) v = 8.0;
    else if (i == 2) v = 2.0;
    else if (i == 3) v = 10.0;
    else if (i == 4) v = 12.0;
    else if (i == 5) v = 4.0;
    else if (i == 6) v = 14.0;
    else if (i == 7) v = 6.0;
    else if (i == 8) v = 3.0;
    else if (i == 9) v = 11.0;
    else if (i == 10) v = 1.0;
    else if (i == 11) v = 9.0;
    else if (i == 12) v = 15.0;
    else if (i == 13) v = 7.0;
    else if (i == 14) v = 13.0;
    else v = 5.0;
    return v / 16.0;
  }

  void main() {
    vec2 fragCoord = vUv * uResolution;
    vec2 cell = floor(fragCoord / uPixelSize);
    vec2 pixelCenter = (cell + 0.5) * uPixelSize;
    vec2 uv = pixelCenter / uResolution;

    float t = uReducedMotion > 0.5 ? 0.0 : uTime;

    vec2 origin1 = vec2(
      0.12 + sin(t * 0.22) * 0.08,
      0.88 + cos(t * 0.19) * 0.07
    );
    vec2 origin2 = vec2(
      0.88 + cos(t * 0.17) * 0.09,
      0.15 + sin(t * 0.24) * 0.08
    );
    vec2 origin3 = vec2(
      0.5 + sin(t * 0.13) * 0.12,
      0.5 + cos(t * 0.16) * 0.1
    );

    float wave1 = 1.0 - smoothstep(0.0, 0.85, length(uv - origin1));
    float wave2 = 1.0 - smoothstep(0.0, 0.9, length(uv - origin2));
    float wave3 = 1.0 - smoothstep(0.0, 0.65, length(uv - origin3));
    float gradient = clamp(
      wave1 * 0.45 + wave2 * 0.4 + wave3 * 0.25 + uv.y * 0.18 + sin(uv.x * 6.0 + t * 0.5) * 0.04,
      0.0,
      1.0
    );

    vec2 toMouse = uv - uMouse;
    float mouseDist = length(toMouse);
    float mouseGlow = exp(-mouseDist * mouseDist * 14.0);
    float ripple = sin(mouseDist * 40.0 - t * 5.0) * mouseGlow * 0.18;
    float mousePull = dot(normalize(toMouse + 0.0001), vec2(uMouse.x, 1.0 - uMouse.y)) * mouseGlow * 0.06;
    gradient = clamp(gradient + ripple + mousePull + mouseGlow * 0.22, 0.0, 1.0);

    // Brightness check to distinguish Light/Dark mode
    float uIsDark = step(0.5, 1.0 - (uBg.r + uBg.g + uBg.b) / 3.0);

    // Light Mode Fixes:
    // 1. Softer dither noise in light mode so it doesn't look gritty/dirty
    float ditherStrength = uIsDark > 0.5 ? 0.14 : 0.04;
    float dither = bayer4x4(cell);
    float level = gradient + (dither - 0.5) * ditherStrength;

    // 2. Light mode color lift: soften brand hues into high-luminance pastel tints
    vec3 targetPrimary = uIsDark > 0.5 ? uPrimary : mix(uPrimary, vec3(1.0), 0.65);
    vec3 targetSecondary = uIsDark > 0.5 ? uSecondary : mix(uSecondary, vec3(1.0), 0.8);
    vec3 targetAccent = uIsDark > 0.5 ? uAccent : mix(uAccent, vec3(1.0), 0.6);

    vec3 color;
    if (level < 0.2) {
      color = mix(uBg, targetSecondary, level / 0.2);
    } else if (level < 0.45) {
      color = mix(targetSecondary, targetPrimary, (level - 0.2) / 0.25);
    } else if (level < 0.7) {
      color = mix(targetPrimary, targetAccent, (level - 0.45) / 0.25);
    } else if (level < 0.88) {
      color = mix(targetAccent, targetPrimary, (level - 0.7) / 0.18);
    } else {
      color = mix(targetPrimary, uIsDark > 0.5 ? uForeground : uBg, (level - 0.88) / 0.12);
    }

    vec2 center = uv - vec2(0.5, 0.48);
    float vignette = smoothstep(0.08, 0.62, length(center * vec2(1.05, 0.9)));

    // 3. Elegant light blend factor without muddy mid-tone artifacts
    float mixFactor = uIsDark > 0.5 ? (0.05 + vignette * 0.08) : (0.08 + vignette * 0.14);
    color = mix(uBg, color, mixFactor);

    // 4. Disable heavy scanlines in light mode to keep canvas crisp
    float scanline = mod(pixelCenter.y, uPixelSize * 2.0) < uPixelSize ? (uIsDark > 0.5 ? 0.97 : 0.995) : 1.0;
    color *= scanline;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function HeroPixelBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = container.clientWidth;
    let height = container.clientHeight;
    let animationId = 0;
    let isVisible = true;

    const mouseTarget = new THREE.Vector2(0.5, 0.5);
    const mouseCurrent = new THREE.Vector2(0.5, 0.5);

    const pixelSize = Math.max(6, Math.min(10, Math.round(width / 160)));

    const scene = new THREE.Scene();
    let camera = new THREE.OrthographicCamera(
      -width / 2,
      width / 2,
      height / 2,
      -height / 2,
      0.1,
      10,
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(1);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const colors = getThemeColors();
    const uniforms = {
      uResolution: { value: new THREE.Vector2(width, height) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uTime: { value: 0 },
      uPixelSize: { value: pixelSize },
      uReducedMotion: { value: reducedMotion ? 1 : 0 },
      uBg: { value: hexToVec3(colors.background) },
      uPrimary: { value: hexToVec3(colors.primary) },
      uSecondary: { value: hexToVec3(colors.secondary) },
      uAccent: { value: hexToVec3(colors.accent) },
      uForeground: { value: hexToVec3(colors.foreground) },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(width, height),
      material,
    );
    scene.add(mesh);

    function updateThemeColors() {
      const next = getThemeColors();
      uniforms.uBg.value.copy(hexToVec3(next.background));
      uniforms.uPrimary.value.copy(hexToVec3(next.primary));
      uniforms.uSecondary.value.copy(hexToVec3(next.secondary));
      uniforms.uAccent.value.copy(hexToVec3(next.accent));
      uniforms.uForeground.value.copy(hexToVec3(next.foreground));
    }

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        return;
      }
      mouseTarget.set(
        (event.clientX - rect.left) / rect.width,
        1 - (event.clientY - rect.top) / rect.height,
      );
    };

    const onResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      camera = new THREE.OrthographicCamera(
        -width / 2,
        width / 2,
        height / 2,
        -height / 2,
        0.1,
        10,
      );
      camera.position.z = 5;
      renderer.setSize(width, height);
      uniforms.uResolution.value.set(width, height);
      uniforms.uPixelSize.value = Math.max(
        6,
        Math.min(10, Math.round(width / 160)),
      );
      mesh.geometry.dispose();
      mesh.geometry = new THREE.PlaneGeometry(width, height);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );
    observer.observe(container);

    const themeObserver = new MutationObserver(updateThemeColors);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    const startTime = performance.now();

    const animate = (time: number) => {
      animationId = requestAnimationFrame(animate);
      if (!isVisible) return;

      mouseCurrent.lerp(mouseTarget, reducedMotion ? 1 : 0.08);
      uniforms.uMouse.value.copy(mouseCurrent);
      uniforms.uTime.value = (time - startTime) * 0.001;

      renderer.render(scene, camera);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", onResize);
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
      themeObserver.disconnect();
      mesh.geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
