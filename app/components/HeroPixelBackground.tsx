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

function hexToColor(colorStr: string): THREE.Color {
  const color = new THREE.Color();
  const trimmed = colorStr.trim();
  if (trimmed.startsWith("rgb")) {
    color.setStyle(trimmed);
  } else {
    color.set(trimmed.startsWith("#") ? trimmed : `#${trimmed}`);
  }
  return color;
}

// grid points per face edge — 9x9 per face * 6 faces = 486 points total
const GRID = 9;
const HALF_SIZE = 130;

const vertexShader = `
  attribute float aSeed;
  uniform float uBaseSize;
  uniform vec3 uColorNear;
  uniform vec3 uColorFar;
  uniform float uTime;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec3 viewNormal = normalize(normalMatrix * normal);
    // camera looks down -Z in view space, so a normal pointing toward
    // the camera has a negative view-space Z component
    float facing = clamp(-viewNormal.z, 0.0, 1.0);

    vColor = mix(uColorFar, uColorNear, facing);

    float shimmer = 0.85 + 0.15 * sin(uTime * 1.4 + aSeed * 6.2831);
    vAlpha = mix(0.05, 0.9, facing) * shimmer;

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = uBaseSize * mix(0.6, 1.4, facing) * (280.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  precision highp float;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float core = smoothstep(0.5, 0.0, d);
    float glow = smoothstep(0.5, 0.15, d) * 0.5;
    float alpha = (core * 0.7 + glow) * vAlpha;
    gl_FragColor = vec4(vColor, alpha);
  }
`;

// faint structural edges — anchors the cube's silhouette so the point
// grid doesn't look like a loose cluster at oblique rotation angles
const edgeVertexShader = `
  varying float vDepth;
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vDepth = -mvPosition.z; // distance from camera, larger = farther
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const edgeFragmentShader = `
  precision highp float;
  varying float vDepth;
  uniform vec3 uColor;
  uniform float uNear;
  uniform float uFar;

  void main() {
    float t = 1.0 - clamp((vDepth - uNear) / (uFar - uNear), 0.0, 1.0); // 1 = near, 0 = far
    float alpha = mix(0.06, 0.32, t);
    gl_FragColor = vec4(uColor, alpha);
  }
`;

function buildEdgeGeometry(): THREE.BufferGeometry {
  const corners: THREE.Vector3[] = [];
  for (let i = 0; i < 8; i++) {
    const x = i & 1 ? HALF_SIZE : -HALF_SIZE;
    const y = i & 2 ? HALF_SIZE : -HALF_SIZE;
    const z = i & 4 ? HALF_SIZE : -HALF_SIZE;
    corners.push(new THREE.Vector3(x, y, z));
  }

  const edgePositions: number[] = [];
  for (let a = 0; a < 8; a++) {
    for (let b = a + 1; b < 8; b++) {
      const diff = a ^ b;
      // corners connected by a cube edge differ in exactly one axis bit
      if (diff === 1 || diff === 2 || diff === 4) {
        edgePositions.push(
          corners[a].x,
          corners[a].y,
          corners[a].z,
          corners[b].x,
          corners[b].y,
          corners[b].z,
        );
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(edgePositions, 3),
  );
  return geometry;
}

function buildCubeGeometry(): THREE.BufferGeometry {
  type Face = { normal: THREE.Vector3; u: THREE.Vector3; v: THREE.Vector3 };
  const faces: Face[] = [
    {
      normal: new THREE.Vector3(1, 0, 0),
      u: new THREE.Vector3(0, 1, 0),
      v: new THREE.Vector3(0, 0, 1),
    },
    {
      normal: new THREE.Vector3(-1, 0, 0),
      u: new THREE.Vector3(0, 1, 0),
      v: new THREE.Vector3(0, 0, -1),
    },
    {
      normal: new THREE.Vector3(0, 1, 0),
      u: new THREE.Vector3(1, 0, 0),
      v: new THREE.Vector3(0, 0, -1),
    },
    {
      normal: new THREE.Vector3(0, -1, 0),
      u: new THREE.Vector3(1, 0, 0),
      v: new THREE.Vector3(0, 0, 1),
    },
    {
      normal: new THREE.Vector3(0, 0, 1),
      u: new THREE.Vector3(1, 0, 0),
      v: new THREE.Vector3(0, 1, 0),
    },
    {
      normal: new THREE.Vector3(0, 0, -1),
      u: new THREE.Vector3(-1, 0, 0),
      v: new THREE.Vector3(0, 1, 0),
    },
  ];

  const positions: number[] = [];
  const normals: number[] = [];
  const seeds: number[] = [];

  for (const face of faces) {
    for (let i = 0; i < GRID; i++) {
      for (let j = 0; j < GRID; j++) {
        const uCoord = (i / (GRID - 1) - 0.5) * 2 * HALF_SIZE;
        const vCoord = (j / (GRID - 1) - 0.5) * 2 * HALF_SIZE;
        const px =
          face.normal.x * HALF_SIZE + face.u.x * uCoord + face.v.x * vCoord;
        const py =
          face.normal.y * HALF_SIZE + face.u.y * uCoord + face.v.y * vCoord;
        const pz =
          face.normal.z * HALF_SIZE + face.u.z * uCoord + face.v.z * vCoord;
        positions.push(px, py, pz);
        normals.push(face.normal.x, face.normal.y, face.normal.z);
        seeds.push(Math.random());
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  geometry.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  geometry.setAttribute("aSeed", new THREE.Float32BufferAttribute(seeds, 1));
  return geometry;
}

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

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 2000);
    camera.position.set(0, 0, 480);
    camera.lookAt(0, 0, 0);

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
      uBaseSize: { value: Math.max(3, Math.min(6, width / 300)) },
      uColorNear: { value: hexToVec3(colors.accent) },
      uColorFar: { value: hexToVec3(colors.secondary) },
      uTime: { value: 0 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });

    const geometry = buildCubeGeometry();
    const points = new THREE.Points(geometry, material);

    const edgeGeometry = buildEdgeGeometry();
    const edgeMaterial = new THREE.ShaderMaterial({
      vertexShader: edgeVertexShader,
      fragmentShader: edgeFragmentShader,
      uniforms: {
        uColor: { value: hexToVec3(colors.primary) },
        uNear: { value: camera.position.z - HALF_SIZE * 1.8 },
        uFar: { value: camera.position.z + HALF_SIZE * 1.8 },
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });
    const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);

    const group = new THREE.Group();
    group.add(points);
    group.add(edges);
    group.rotation.set(-0.35, 0.5, 0); // gentle starting angle so it reads as 3D immediately
    scene.add(group);

    renderer.setClearColor(hexToColor(colors.background), 1);

    function updateThemeColors() {
      const next = getThemeColors();
      uniforms.uColorNear.value.copy(hexToVec3(next.accent));
      uniforms.uColorFar.value.copy(hexToVec3(next.secondary));
      edgeMaterial.uniforms.uColor.value.copy(hexToVec3(next.primary));
      renderer.setClearColor(hexToColor(next.background), 1);
    }

    // mouse in normalized -1..1 space relative to the container
    const mouseNorm = { x: 0, y: 0 };
    let tiltX = 0;
    let tiltY = 0;
    const MAX_TILT = 0.3; // ~17 degrees, subtle parallax rather than a full chase

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
      mouseNorm.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseNorm.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    };

    const onMouseLeave = () => {
      mouseNorm.x = 0;
      mouseNorm.y = 0;
    };

    const onResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      uniforms.uBaseSize.value = Math.max(3, Math.min(6, width / 300));
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

    const AUTO_ROTATE_SPEED = 0.045; // rad/sec, slow and ambient
    const startTime = performance.now();

    const animate = (time: number) => {
      animationId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const t = (time - startTime) * 0.001;
      uniforms.uTime.value = t;

      if (!reducedMotion) {
        // continuous slow spin plus a gentle bob on the other axis
        group.rotation.y = 0.5 + t * AUTO_ROTATE_SPEED;
        const bob = Math.sin(t * 0.18) * 0.08;

        // ease current tilt toward the mouse-driven target
        const targetTiltY = mouseNorm.x * MAX_TILT;
        const targetTiltX = -mouseNorm.y * MAX_TILT;
        tiltX += (targetTiltX - tiltX) * 0.04;
        tiltY += (targetTiltY - tiltY) * 0.04;

        group.rotation.x = -0.35 + bob + tiltX;
        group.rotation.y += tiltY;
      }

      renderer.render(scene, camera);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", onResize);
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
      themeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      edgeGeometry.dispose();
      edgeMaterial.dispose();
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
