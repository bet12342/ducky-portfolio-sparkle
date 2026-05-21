import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Pierfelice — Full-Stack & MVP Developer Portfolio" },
      {
        name: "description",
        content:
          "Pierfelice (photop2) — Italy-based full-stack developer. PC & Android apps, UI, AI integrations, data systems. 100% on time, 100% on budget.",
      },
      { property: "og:title", content: "Pierfelice — Full-Stack & MVP Developer" },
      {
        property: "og:description",
        content: "Turning ideas into scalable products. MVPs, apps, AI, and data systems.",
      },
    ],
  }),
});

const projects = [
  {
    title: "Site Initial Page Redesign",
    tag: "Web · UI",
    desc: "Delivered in just 4 hours — a high-impact landing page redesign that surprised the client with its quality and speed.",
    img: "https://cdn5.f-cdn.com/files/download/291549977/gemini-2-5-flash-image_give_me.jpg?fit=crop&image-optimizer=force&format=webply&width=894&height=672",
  },
  {
    title: "AI Chatbot Admin Dashboard",
    tag: "AI · SaaS",
    desc: "Operator dashboard for managing intents, messages, and automation flows. Modular UI with hierarchy built for real-world conversational AI.",
    img: "https://cdn2.f-cdn.com/files/download/291549785/gemini-2-5-flash-image_give_me.jpg?fit=crop&image-optimizer=force&format=webply&width=894&height=672",
  },
  {
    title: "Android Shopping App",
    tag: "Mobile · Android",
    desc: "Production-grade Android commerce app focused on UI polish and user attention. Ongoing engagement with the client.",
    img: "https://cdn2.f-cdn.com/files/download/291549279/android.jpg?fit=crop&image-optimizer=force&format=webply&width=894&height=672",
  },
  {
    title: "AI Mining · Bittensor Experience",
    tag: "AI · Agents",
    desc: "Three years of Bittensor work — AI agents, data control and API integration at scale.",
    img: "https://cdn3.f-cdn.com/files/download/291549493/gemini-2-5-flash-image_now_giv.jpg?fit=crop&image-optimizer=force&format=webply&width=894&height=672",
  },
  {
    title: "Real-time Order Tracking",
    tag: "Full-Stack",
    desc: "End-to-end product management: drag-and-drop uploads, client-side compression, color-coded stock status and live status updates.",
    img: "https://cdn6.f-cdn.com/files/download/290337370/223.png?fit=crop&image-optimizer=force&format=webply&width=894&height=672",
  },
];

const reviews = [
  {
    name: "Samir H.",
    flag: "🇺🇸",
    rating: 5.0,
    amount: "$250 USD",
    text: "Great communication, honest person, provided excellent work as promised. A+",
    project: "Betfair Racing Data CSV Export",
  },
  {
    name: "Pietro D.",
    flag: "🇮🇹",
    rating: 5.0,
    amount: "$120 USD",
    text: "Second project I've trusted him with — already booked a third. Understands everything without too many questions.",
    project: "Video & Mobile App Edits",
  },
  {
    name: "PumaPulse",
    flag: "🇮🇹",
    rating: 5.0,
    amount: "€10 EUR",
    text: "Absolutely fantastic experience! Amazing speed without compromising quality. Highly recommend!",
    project: "E-commerce Services Page Redesign",
  },
  {
    name: "Pietro D.",
    flag: "🇮🇹",
    rating: 4.4,
    amount: "$500 USD",
    text: "Great intelligence, comprehension, creativity and mental order. Serious and professional.",
    project: "Reverse Engineering Mobile App",
  },
  {
    name: "Max A.",
    flag: "🇮🇹",
    rating: 4.4,
    amount: "$400 USD",
    text: "Completed the work exactly as requested, based on the instructions provided.",
    project: "QR-Based Security Door System",
  },
];

const skills = [
  "PHP", "JavaScript", "TypeScript", "React", "Android", "iOS",
  "Mobile App Dev", "Website Design", "MySQL", "Web Scraping",
  "Data Extraction", "AI Agents", "Bittensor", "API Integration",
];

function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Reviews />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <DuckMark className="h-8 w-8" />
          <span className="font-display text-lg font-semibold tracking-tight">
            Pier<span className="text-gradient-duck">felice</span>
          </span>
        </a>
        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-1.5 text-sm md:flex ${
            scrolled ? "glass" : ""
          }`}
        >
          {["About", "Work", "Reviews", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="rounded-full px-4 py-1.5 text-muted-foreground transition hover:bg-secondary/60 hover:text-foreground"
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-duck-gradient px-5 py-2 text-sm font-medium text-duck-ink shadow-duck transition hover:scale-105"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}

function DuckMark({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-full bg-duck-gradient blur-md opacity-60" />
      <div className="relative grid h-full w-full place-items-center rounded-full bg-duck-gradient">
        <span className="font-display text-sm font-bold text-duck-ink">P</span>
      </div>
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setPos({
          x: ((e.clientX - r.left) / r.width - 0.5) * 30,
          y: ((e.clientY - r.top) / r.height - 0.5) * 30,
        });
      }}
      className="relative isolate flex min-h-screen items-center bg-hero noise pt-32"
    >
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div
        className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-iris)" }}
        aria-hidden
      />

      {/* Floating orbs */}
      <div
        className="float pointer-events-none absolute left-[8%] top-[28%] h-24 w-24 rounded-full bg-duck-gradient opacity-70 blur-2xl"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      />
      <div
        className="float pointer-events-none absolute right-[10%] top-[60%] h-32 w-32 rounded-full opacity-50 blur-3xl"
        style={{ background: "var(--gold)", transform: `translate(${-pos.x}px, ${-pos.y}px)` }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div className="rise">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-duck-glow shadow-glow" />
            Available · Italy (CET)
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Turning ideas into
            <br />
            <span className="text-gradient-duck">scalable products.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            I'm <span className="text-foreground">Pierfelice</span> — a full-stack developer
            crafting <em>high-quality MVPs</em>, PC & Android apps, AI integrations and
            data systems that ship and grow.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-duck-gradient px-6 py-3 font-medium text-duck-ink shadow-duck transition hover:scale-[1.03]"
            >
              View selected work
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium text-foreground transition hover:bg-secondary/60"
            >
              Start a project
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <Metric value="$35" label="USD / hour" />
            <Divider />
            <Metric value="100%" label="On time · On budget" />
            <Divider />
            <Metric value="4.6★" label="5 client reviews" />
          </div>
        </div>

        {/* Visual card */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-3xl bg-duck-gradient opacity-40 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl glass shadow-card">
            <div className="relative aspect-[4/5] overflow-hidden">
              <div
                className="absolute inset-0"
                style={{ background: "var(--gradient-iris)" }}
              />
              <div className="absolute inset-0 noise" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="relative spin-slow">
                  <svg viewBox="0 0 200 200" className="h-64 w-64">
                    <defs>
                      <path
                        id="circ"
                        d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
                      />
                    </defs>
                    <text fill="oklch(0.96 0.02 180)" fontSize="12" letterSpacing="6">
                      <textPath href="#circ">
                        PIERFELICE · FULL-STACK · MVP · AI · MOBILE · 
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid h-28 w-28 place-items-center rounded-full bg-duck-ink shadow-glow">
                      <span className="font-display text-4xl font-bold text-gradient-duck">P</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-border/60 px-5 py-4 text-xs">
              <span className="font-mono text-muted-foreground">@photop2</span>
              <span className="rounded-full bg-duck/20 px-2 py-0.5 text-duck-glow">
                Verified · Lvl 4
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-xl font-semibold text-foreground">{value}</div>
      <div className="text-xs uppercase tracking-wider">{label}</div>
    </div>
  );
}
function Divider() {
  return <span className="h-8 w-px bg-border" />;
}

function Stats() {
  const stats = [
    { v: "100%", l: "On time" },
    { v: "100%", l: "On budget" },
    { v: "91%", l: "Accept rate" },
    { v: "4.6", l: "Avg rating" },
  ];
  return (
    <section className="relative border-y border-border/50 bg-secondary/30 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.l}
            className="group relative overflow-hidden rounded-2xl glass p-6 text-center transition hover:-translate-y-1"
          >
            <div className="font-display text-4xl font-bold text-gradient-duck md:text-5xl">
              {s.v}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {s.l}
            </div>
            <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px shimmer opacity-0 transition group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_2fr]">
        <div>
          <SectionLabel>01 · About</SectionLabel>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            A digital creator who <span className="text-gradient-duck">ships</span>.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Hi, I'm <span className="text-foreground">Pierfelice</span> — a digital creator
            and developer based in Italy focused on turning ideas into real, scalable
            products. I help bring digital projects to life, from high-quality MVPs to
            fully developed applications ready for launch.
          </p>
          <p>
            With years across web, mobile and AI, I deliver fast without compromising
            quality — backed by{" "}
            <span className="text-foreground">100% on-time, 100% on-budget</span>{" "}
            execution and a master's in computer science from the University of Oxford.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-duck-glow">
      <span className="h-px w-8 bg-duck-glow" />
      {children}
    </div>
  );
}

function Skills() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>02 · Stack</SectionLabel>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
          Tools of the trade
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <span
              key={s}
              className="rounded-full glass px-4 py-2 text-sm text-foreground transition hover:bg-duck/10 hover:text-duck-glow"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <SectionLabel>03 · Selected work</SectionLabel>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Recent <span className="text-gradient-duck">projects</span>
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
            A handful of shipped builds across web, mobile, AI and data systems.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-3xl glass shadow-card transition duration-500 hover:-translate-y-2 hover:shadow-duck ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-duck-ink via-duck-ink/40 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-duck-ink/70 px-3 py-1 text-xs font-medium text-duck-glow backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="relative p-6">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-duck-glow">
                  Case study
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden py-28">
      <div
        className="absolute inset-x-0 top-0 -z-10 mx-auto h-[500px] w-[80%] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-duck)" }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>04 · Voices</SectionLabel>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
          What clients <span className="text-gradient-duck">say</span>
        </h2>

        <div className="mt-12 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {reviews.map((r) => (
            <figure key={r.project} className="rounded-2xl glass p-6 shadow-card">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-duck-gradient font-semibold text-duck-ink">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      {r.name} <span className="ml-1">{r.flag}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{r.project}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-sm text-duck-glow">★ {r.rating}</div>
                  <div className="text-xs text-muted-foreground">{r.amount}</div>
                </div>
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                "{r.text}"
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>05 · Background</SectionLabel>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl glass p-8 shadow-card">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Education
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold">
              University of Oxford 🇬🇧
            </h3>
            <p className="mt-1 text-muted-foreground">
              Degree + Master in Computer Science
            </p>
            <p className="mt-1 font-mono text-sm text-duck-glow">2017 — 2021 · 4 years</p>
          </div>
          <div className="rounded-2xl glass p-8 shadow-card">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Certification
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold">
              Preferred Freelancer Program SLA
            </h3>
            <p className="mt-1 text-muted-foreground">
              Verified · Level 4 Membership · Top-tier reliability badge
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl glass p-12 text-center shadow-duck">
          <div
            className="absolute -inset-1 -z-10 rounded-3xl opacity-30 blur-2xl"
            style={{ background: "var(--gradient-duck)" }}
          />
          <SectionLabel>06 · Let's build</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">
            Have an idea? <br />
            <span className="text-gradient-duck">Let's make it real.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Open to MVPs, full apps, AI integrations and data projects. Reply within 24h.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.freelancer.com/u/photop2"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-duck-gradient px-7 py-3 font-medium text-duck-ink shadow-duck transition hover:scale-105"
            >
              Hire on Freelancer
            </a>
            <a
              href="mailto:hello@pierfelice.dev"
              className="rounded-full border border-border px-7 py-3 font-medium transition hover:bg-secondary/60"
            >
              hello@pierfelice.dev
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <DuckMark className="h-6 w-6" />
          <span>© {new Date().getFullYear()} Pierfelice · @photop2</span>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.2em]">
          Crafted in Italy · Built to last
        </div>
      </div>
    </footer>
  );
}
