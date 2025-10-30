import Image from "next/image";
import Reveal from "./components/Reveal";
import {
  BehanceSquareFilled,
  InstagramFilled,
  GithubOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-tight">
            <span className="inline-flex items-center gap-2">
              <span className="relative inline-block">
                Shiwanshu Shubham
                <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-black/80 to-black/30 dark:from-white/80 dark:to-white/30"></span>
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a
              className="opacity-80 transition-opacity hover:opacity-100"
              href="#about"
            >
              About
            </a>
            <a
              className="opacity-80 transition-opacity hover:opacity-100"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="opacity-80 transition-opacity hover:opacity-100"
              href="#contact"
            >
              Contact
            </a>

            <div className="ml-2 flex items-center gap-2">
              <a
                href="https://behance.net/studiovidya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="icon-btn brand rounded-full border soft-border p-2 hover-tint"
                title="Behance"
              >
                <BehanceSquareFilled style={{ fontSize: 18 }} />
              </a>
              <a
                href="https://instagram.com/studiovidya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="icon-btn brand rounded-full border soft-border p-2 hover-tint"
                title="Instagram"
              >
                <InstagramFilled style={{ fontSize: 18 }} />
              </a>
              <a
                href="https://github.com/shiwanshudev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="icon-btn rounded-full border soft-border p-2 hover-tint"
                title="GitHub"
              >
                <GithubOutlined style={{ fontSize: 18 }} />
              </a>
              <a
                href="https://www.linkedin.com/in/shiwanshudev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="icon-btn rounded-full border soft-border p-2 hover-tint"
                title="LinkedIn"
              >
                <LinkedinFilled style={{ fontSize: 18 }} />
              </a>
            </div>
            <div className="ml-3">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative hero-bg overflow-hidden pt-9">
        {/* Subtle background aesthetics */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-120px] h-[340px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-500/5 blur-3xl" />
          <div className="absolute right-[-100px] top-32 h-[220px] w-[220px] rounded-full bg-gradient-to-br from-sky-500/10 to-transparent blur-2xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
          <Reveal>
            <div className="grid items-center gap-10 md:grid-cols-5 md:gap-12">
              <div className="md:col-span-3">
                <div className="inline-flex items-center gap-2 rounded-full border soft-border badge px-3 py-1 text-xs shadow-sm backdrop-blur bg-gradient-to-r from-blue-50/10 to-sky-50/10 dark:from-blue-950/20 dark:to-sky-950/20">
                  <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
                  Open to opportunities · Remote/Hybrid · Relocation OK
                </div>
                <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl gradient-text">
                  Shiwanshu Shubham
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 muted">
                  Dynamic UX/UI Designer with frontend development expertise.
                  Passionate about creating user-centered designs and
                  translating them into high-impact digital experiences.
                  Combining 1.5 years of frontend development with design
                  expertise to bridge the gap between design and implementation.
                </p>

                {/* Contact Integration */}
                {/* Contact Integration */}
                <div className="mt-7 mb-5">
                  <a
                    href="mailto:shiwanshudev@outlook.com"
                    className="inline-flex items-center gap-2 rounded-full border soft-border bg-background/50 px-4 py-2 hover:bg-background/80 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span className="text-sm">shiwanshudev@outlook.com</span>
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#projects"
                    className="btn btn-primary cursor-pointer"
                  >
                    View Portfolio
                  </a>
                </div>
                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
                  <div className="rounded-xl border soft-border p-4 text-center">
                    <div className="text-xl font-semibold">3+</div>
                    <div className="mt-1 text-xs muted">Years Experience</div>
                  </div>
                  <div className="rounded-xl border soft-border p-4 text-center">
                    <div className="text-xl font-semibold">10+</div>
                    <div className="mt-1 text-xs muted">Projects Delivered</div>
                  </div>
                  <div className="rounded-xl border soft-border p-4 text-center">
                    <div className="text-xl font-semibold">2</div>
                    <div className="mt-1 text-xs muted">Specializations</div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-blue-500/20 via-sky-500/10 to-indigo-500/5 blur-xl" />
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                    <Image
                      src="/myphoto.png"
                      alt="Shiwanshu Shubham - UX/UI Designer"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                UX/UI Skills
              </h2>
              <p className="mt-2 muted">
                Core capabilities across the end‑to‑end product design process.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {[
                  "Figma",
                  "Wireframing",
                  "User Research",
                  "Prototyping",
                  "Usability Testing",
                  "Information Architecture",
                  "Interaction Design",
                  "Design Systems",
                  "Accessibility (a11y)",
                ].map((s) => (
                  <span
                    key={s}
                    className="pill rounded-full border soft-border px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Technical Skills
              </h2>
              <p className="mt-2 muted">
                Bridging design and delivery with modern frontend tools.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Git & GitHub",
                  "Node.js",
                ].map((s) => (
                  <span
                    key={s}
                    className="pill rounded-full border soft-border px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">About</h2>
            <p className="mt-4 muted">
              I partner with founders and teams to craft elegant interfaces and
              scalable design systems. My process is collaborative and
              iterative: understand, define, ideate, prototype, and test.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        </Reveal>

        <div className="mt-8 grid gap-8 md:mt-10">
          {/* Project 1 */}
          <Reveal>
            <article className="grid items-start gap-6 overflow-hidden rounded-2xl border border-black/10 p-5 transition-colors hover:bg-black/[0.02] md:grid-cols-2 md:p-6">
              <a
                href="https://www.figma.com/design/r60qqUTzkyvBwDIdKAyC0a/EventsApp?node-id=56-6413&t=pTfUjBjrM6IXopvh-1"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-xl"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--foreground) 6%, transparent)",
                  }}
                >
                  <Image
                    src="/rdubstep.png"
                    alt="RDubstep app showcase - Music event booking interface"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </div>
              </a>
              <div className="md:pl-2">
                <a
                  href="https://www.figma.com/design/r60qqUTzkyvBwDIdKAyC0a/EventsApp?node-id=56-6413&t=pTfUjBjrM6IXopvh-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <h3 className="text-xl font-semibold tracking-tight underline-offset-4 transition-colors hover:underline">
                    RDubstep — Minimalist Music Event Booking (Product Design) ·
                    Oct 2025
                  </h3>
                </a>
                <p className="mt-3 muted">
                  Led a self-directed, end-to-end design project to create a
                  minimalist music event booking app. My design process
                  included: Understand, Define, Ideate, Prototype and Test.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border soft-border px-3 py-1">
                    Product Design
                  </span>
                  <span className="rounded-full border soft-border px-3 py-1">
                    User Research
                  </span>
                  <span className="rounded-full border soft-border px-3 py-1">
                    Prototyping
                  </span>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Project 2 */}
          <Reveal delayMs={100}>
            <article className="grid items-start gap-6 overflow-hidden rounded-2xl border border-black/10 p-5 transition-colors hover:bg-black/[0.02] md:grid-cols-2 md:p-6">
              <a
                href="https://www.figma.com/design/2Ng2OS9TLYmpsKuDmWG7KL/Freelance---BowDigi?node-id=17-2421&t=YVDNDwKEfDpq0Lsh-1"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-xl"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--foreground) 6%, transparent)",
                  }}
                >
                  <Image
                    src="/bowdigi.png"
                    alt="BowDigi website design showcase"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </div>
              </a>
              <div className="md:pl-2">
                <a
                  href="https://www.figma.com/design/2Ng2OS9TLYmpsKuDmWG7KL/Freelance---BowDigi?node-id=17-2421&t=YVDNDwKEfDpq0Lsh-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <h3 className="text-xl font-semibold tracking-tight underline-offset-4 transition-colors hover:underline">
                    BowDigi — Responsive Marketing Website (Freelance UX/UI) ·
                    Jun 2024 · Remote
                  </h3>
                </a>
                <p className="mt-3 muted">
                  Led the design of a responsive marketing website,
                  collaborating directly with the client to translate their
                  vision into an intuitive UI. My process involved iterative
                  wireframing, prototyping, and feedback sessions to ensure
                  alignment and usability.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border soft-border px-3 py-1">
                    Responsive Web
                  </span>
                  <span className="rounded-full border soft-border px-3 py-1">
                    Client Collaboration
                  </span>
                  <span className="rounded-full border soft-border px-3 py-1">
                    Usability
                  </span>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Project 3 */}
          <Reveal delayMs={200}>
            <article className="grid items-start gap-6 overflow-hidden rounded-2xl border border-black/10 p-5 transition-colors hover:bg-black/[0.02] md:grid-cols-2 md:p-6">
              <a
                href="https://con10tlabs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-xl"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--foreground) 6%, transparent)",
                  }}
                >
                  <Image
                    src="/con10tlabs.png"
                    alt="Con10T Labs website redesign showcase"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </div>
              </a>
              <div className="md:pl-2">
                <a
                  href="https://con10tlabs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <h3 className="text-xl font-semibold tracking-tight underline-offset-4 transition-colors hover:underline">
                    Con10T Labs — Website Redesign & Frontend (UX/UI + Frontend)
                    · Dec 2022 – Apr 2024 · Remote
                  </h3>
                </a>
                <ul className="mt-3 list-disc space-y-2 pl-5 muted">
                  <li>
                    Led the end-to-end (E2E) design and development of the new
                    company website, creating wireframes, prototypes, and a
                    responsive, modern UI focused on improving user engagement.
                  </li>
                  <li>
                    Redesigned internal workflows by analyzing and mapping
                    customer support and content management processes. Designed
                    and iterated on new solutions using Zoho and Notion APIs,
                    resulting in faster support responses and a 40% reduction in
                    manual content updates.
                  </li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border soft-border px-3 py-1">
                    Design Systems
                  </span>
                  <span className="rounded-full border soft-border px-3 py-1">
                    Frontend
                  </span>
                  <span className="rounded-full border soft-border px-3 py-1">
                    Process Design
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <div className="rounded-2xl border border-black/10 p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Let's work together
            </h2>
            <p className="mt-3 max-w-2xl muted">
              I'm available for freelance projects and full-time opportunities.
              Feel free to reach out if you'd like to discuss potential
              collaborations.
            </p>
            <div className="mt-6">
              <a
                href="mailto:shiwanshudev@outlook.com"
                className="inline-flex items-center gap-2 rounded-full border soft-border bg-background/50 px-4 py-2 hover:bg-background/80 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-sm">shiwanshudev@outlook.com</span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>
      <footer className="border-t border-black/5 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <div className="text-sm muted">
            © {new Date().getFullYear()} Shiwanshu Shubham · UX/UI Designer
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://behance.net/studiovidya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="icon-btn brand rounded-full border soft-border p-2 hover-tint"
              title="Behance"
            >
              <BehanceSquareFilled style={{ fontSize: 18 }} />
            </a>
            <a
              href="https://instagram.com/studiovidya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="icon-btn brand rounded-full border soft-border p-2 hover-tint"
              title="Instagram"
            >
              <InstagramFilled style={{ fontSize: 18 }} />
            </a>
            <a
              href="https://github.com/shiwanshudev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="icon-btn rounded-full border soft-border p-2 hover-tint"
              title="GitHub"
            >
              <GithubOutlined style={{ fontSize: 18 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/shiwanshudev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="icon-btn rounded-full border soft-border p-2 hover-tint"
              title="LinkedIn"
            >
              <LinkedinFilled style={{ fontSize: 18 }} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
