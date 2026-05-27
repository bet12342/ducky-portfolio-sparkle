import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import portrait from "@/assets/pierfelice.png";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Pierfelice — AI & Coding Infrastructure Engineer (Remote)" },
      {
        name: "description",
        content:
          "Pierfelice — AI & Coding Infrastructure Engineer. Building scalable AI systems, developer platforms and cloud infrastructure. Open to remote roles worldwide.",
      },
      { property: "og:title", content: "Pierfelice — AI & Coding Infrastructure Engineer" },
      {
        property: "og:description",
        content: "Designing AI infrastructure, dev platforms and cloud-native systems. Remote, worldwide.",
      },
    ],
  }),
});

const projects = [
  {
    title: "Site Initial Page Redesign",
    tag: "Web · UI",
    desc: "Client needed a complete landing page redesign in a very short time. Delivered in just 4 hours — bold typography, sharp hierarchy, conversion-first layout.",
    img: "https://cdn5.f-cdn.com/files/download/291549977/gemini-2-5-flash-image_give_me.jpg?fit=crop&image-optimizer=force&format=webply&width=894&height=672",
  },
  {
    title: "AI Chatbot Integration with Site",
    tag: "AI · SaaS",
    desc: "Admin dashboard for an AI chatbot platform — managing intents, messages and automation flows. Modular UI built for real-world conversational AI.",
    img: "https://cdn2.f-cdn.com/files/download/291549785/gemini-2-5-flash-image_give_me.jpg?fit=crop&image-optimizer=force&format=webply&width=894&height=672",
  },
  {
    title: "Android Shopping App",
    tag: "Mobile · Android",
    desc: "Production Android commerce app focused on UI polish and user attention. Ongoing client engagement — built for retention.",
    img: "https://cdn2.f-cdn.com/files/download/291549279/android.jpg?fit=crop&image-optimizer=force&format=webply&width=894&height=672",
  },
  {
    title: "AI Mining Experience",
    tag: "AI · Agents",
    desc: "Three years of Bittensor work — AI agents, data control and API integration at scale across multiple deployments.",
    img: "https://cdn3.f-cdn.com/files/download/291549493/gemini-2-5-flash-image_now_giv.jpg?fit=crop&image-optimizer=force&format=webply&width=894&height=672",
  },
  {
    title: "Real-time Order Tracking with Status",
    tag: "Full-Stack",
    desc: "End-to-end product management: drag-and-drop uploads, client-side compression, color-coded stock and live status updates wired into PHP + MySQL.",
    img: "https://cdn6.f-cdn.com/files/download/290337370/223.png?fit=crop&image-optimizer=force&format=webply&width=894&height=672",
  },
];

const reviews = [
  {
    name: "Gianluca A.",
    flag: "🇮🇹",
    text: "Excellent work. Competent engineer, always available. He advised me and built the project exactly as I wanted. I'll definitely entrust him with my next projects.",
    project: "Telegram Meme Token Trading Bot",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=70",
  },
  {
    name: "Samir H.",
    flag: "🇺🇸",
    text: "Great communication, honest person, provided excellent work as promised. A+",
    project: "Betfair Racing Data CSV Export",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=70",
  },
  {
    name: "Pietro D.",
    flag: "🇮🇹",
    text: "Second project I've trusted him with — already booked a third. Understands everything without too many questions. Very good.",
    project: "Video & Mobile App Edits",
    img: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=900&q=70",
  },
  {
    name: "Pietro D.",
    flag: "🇮🇹",
    text: "Received the brief and built a perfect job almost without asking anything more. Uncommon. Great intelligence, comprehension, creativity and mental order. Serious and professional.",
    project: "Reverse Engineering Mobile App",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=70",
  },
  {
    name: "Max A.",
    flag: "🇮🇹",
    text: "Completed the work as requested, based on the instructions provided.",
    project: "QR-Based Security Door Maintenance System",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=70",
  },
];


const expertise = [
  {
    title: "Web Applications",
    desc: "Modern React / TypeScript front-ends paired with PHP & Node back-ends. Fast, accessible, SEO-ready.",
    icon: "🌐",
  },
  {
    title: "Mobile Apps",
    desc: "Polished Android and iOS apps — commerce, tracking, utilities — built for retention and store quality.",
    icon: "📱",
  },
  {
    title: "AI & Agents",
    desc: "Chatbots, AI dashboards and autonomous agents. Three years on Bittensor + custom LLM integrations.",
    icon: "🤖",
  },
  {
    title: "Data Systems",
    desc: "Scraping, data extraction and pipelines. MySQL design, CSV/JSON exports and real-time sync.",
    icon: "📊",
  },
  {
    title: "API Integration",
    desc: "Third-party APIs, payments, auth, webhooks and custom REST/GraphQL endpoints.",
    icon: "🔌",
  },
  {
    title: "MVP Delivery",
    desc: "From idea to shipped product — scoped, designed, built and deployed in days, not months.",
    icon: "🚀",
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
      
      <About />
      <Expertise />
      <Skills />
      <Projects />
      <Reviews />
      <Experience />
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
          {["About", "Expertise", "Work", "Reviews", "Contact"].map((l) => (
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
          Get in touch
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

/**
 * AICodingMark — dynamic symbol for an AI × Coding Engineer.
 * Hex frame (engineering) + pulsing neural nodes (AI) + rotating </> glyph (code)
 * + orbiting electrons + scanning sweep = continuous shipping.
 */
function AICodingMark({ className = "" }: { className?: string }) {
  const nodes: Array<[number, number]> = [
    [120, 52], [178, 86], [178, 154],
    [120, 188], [62, 154], [62, 86],
  ];
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-full bg-duck-gradient opacity-40 blur-3xl" />
      <svg
        viewBox="0 0 240 240"
        className="relative h-full w-full"
        role="img"
        aria-label="AI and Coding Engineer symbol"
      >
        <defs>
          <linearGradient id="aicStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.15 190)" />
            <stop offset="100%" stopColor="oklch(0.62 0.16 200)" />
          </linearGradient>
          <radialGradient id="aicCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.82 0.13 85)" />
            <stop offset="60%" stopColor="oklch(0.62 0.16 200)" />
            <stop offset="100%" stopColor="oklch(0.20 0.05 215)" />
          </radialGradient>
          <filter id="aicGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g style={{ transformOrigin: "120px 120px" }} className="spin-slow">
          <circle cx="120" cy="120" r="108" fill="none" stroke="url(#aicStroke)" strokeWidth="1.2" strokeDasharray="2 8" opacity="0.7" />
        </g>
        <g style={{ transformOrigin: "120px 120px", animation: "spin-slow 26s linear infinite reverse" }}>
          <circle cx="120" cy="120" r="94" fill="none" stroke="oklch(0.72 0.13 195 / 0.35)" strokeWidth="0.8" strokeDasharray="1 5" />
        </g>

        <g filter="url(#aicGlow)">
          <polygon points="120,30 196,75 196,165 120,210 44,165 44,75" fill="none" stroke="url(#aicStroke)" strokeWidth="1.6" opacity="0.85" />
          <polygon points="120,52 178,86 178,154 120,188 62,154 62,86" fill="none" stroke="oklch(0.78 0.15 190 / 0.35)" strokeWidth="0.8" />
        </g>

        <g stroke="url(#aicStroke)" strokeWidth="0.9" opacity="0.85">
          {nodes.map(([x, y], i) => (
            <line key={i} x1={x} y1={y} x2="120" y2="120">
              <animate attributeName="opacity" values="0.15;1;0.15" dur="2.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </line>
          ))}
        </g>

        {nodes.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="4" fill="oklch(0.82 0.13 85)" />
            <circle cx={x} cy={y} r="4" fill="none" stroke="oklch(0.82 0.13 85)" strokeWidth="1">
              <animate attributeName="r" values="4;11;4" dur="2.4s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0;0.9" dur="2.4s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}

        <circle cx="120" cy="120" r="34" fill="url(#aicCore)" filter="url(#aicGlow)" />
        <circle cx="120" cy="120" r="34" fill="none" stroke="oklch(0.96 0.02 180 / 0.6)" strokeWidth="0.8" />

        <g
          fill="none"
          stroke="oklch(0.14 0.04 215)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transformOrigin: "120px 120px", animation: "spin-slow 12s linear infinite" }}
        >
          <polyline points="108,110 96,120 108,130" />
          <polyline points="132,110 144,120 132,130" />
          <line x1="126" y1="106" x2="114" y2="134" />
        </g>

        <g style={{ transformOrigin: "120px 120px", animation: "spin-slow 6s linear infinite" }}>
          <circle cx="120" cy="38" r="3.5" fill="oklch(0.82 0.13 85)">
            <animate attributeName="r" values="2.5;4.5;2.5" dur="1.6s" repeatCount="indefinite" />
          </circle>
        </g>
        <g style={{ transformOrigin: "120px 120px", animation: "spin-slow 9s linear infinite reverse" }}>
          <circle cx="120" cy="212" r="2.5" fill="oklch(0.78 0.15 190)" />
        </g>

        <g style={{ transformOrigin: "120px 120px", animation: "spin-slow 4s linear infinite" }}>
          <path d="M120,120 L120,28 A92,92 0 0,1 196,80 Z" fill="url(#aicStroke)" opacity="0.10" />
        </g>
      </svg>
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
            crafting <em>high-quality MVPs</em>, web & mobile apps, AI integrations and
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
            <Metric value="6+" label="Years building products" />
            <Divider />
            <Metric value="100%" label="On time · On budget" />
            <Divider />
            <Metric value="4.8★" label="Average client rating" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-3xl bg-duck-gradient opacity-40 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl glass shadow-card">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={portrait}
                alt="Pierfelice — Full-Stack & AI Engineer"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <div className="pointer-events-none absolute inset-0 noise opacity-40" />
              <div className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 opacity-90">
                <AICodingMark className="h-full w-full" />
              </div>
              <div className="pointer-events-none absolute inset-0">
                <svg viewBox="0 0 200 200" className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 spin-slow opacity-30">
                  <defs>
                    <path id="circ" d="M100,100 m-86,0 a86,86 0 1,1 172,0 a86,86 0 1,1 -172,0" />
                  </defs>
                  <text fill="oklch(0.96 0.02 180)" fontSize="7" letterSpacing="6">
                    <textPath href="#circ">
                      AI ENGINEER · CODING · FULL-STACK · MVP · AGENTS · MOBILE · 
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-border/60 px-5 py-4 text-xs">
              <span className="font-mono text-muted-foreground">Full-Stack Developer</span>
              <span className="rounded-full bg-duck/20 px-2 py-0.5 text-duck-glow">
                Italy · CET
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
    { v: "20+", l: "Projects shipped" },
    { v: "4.8", l: "Avg rating" },
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

function Expertise() {
  return (
    <section id="expertise" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <SectionLabel>02 · Expertise</SectionLabel>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              What I <span className="text-gradient-duck">do best</span>
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
            Six core areas where I deliver production-ready work.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((e) => (
            <div
              key={e.title}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition hover:-translate-y-1 hover:shadow-duck"
            >
              <div className="text-3xl">{e.icon}</div>
              <h3 className="mt-4 font-display text-xl font-semibold">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition group-hover:opacity-40"
                style={{ background: "var(--gradient-duck)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>03 · Stack</SectionLabel>
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
            <SectionLabel>04 · Selected work</SectionLabel>
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
        <SectionLabel>05 · Voices</SectionLabel>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
          What clients <span className="text-gradient-duck">say</span>
        </h2>

        <div className="mt-12 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {reviews.map((r) => (
            <figure key={r.project} className="group overflow-hidden rounded-2xl glass shadow-card transition hover:-translate-y-1 hover:shadow-duck">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={r.img}
                  alt={r.project}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-duck-ink via-duck-ink/50 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-duck-ink/70 px-3 py-1 text-[11px] font-medium text-duck-glow backdrop-blur">
                  {r.project}
                </span>
              </div>
              <div className="p-6">
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
                  <div className="font-mono text-sm text-duck-glow">★ {r.rating}</div>
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  "{r.text}"
                </blockquote>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>06 · Background</SectionLabel>
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
              Verified · Level 4 · Top-tier reliability badge
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
          <SectionLabel>07 · Let's build</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">
            Have an idea? <br />
            <span className="text-gradient-duck">Let's make it real.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Open to MVPs, full apps, AI integrations and data projects. Reply within 24h.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@pierfelice.dev"
              className="rounded-full bg-duck-gradient px-7 py-3 font-medium text-duck-ink shadow-duck transition hover:scale-105"
            >
              hello@pierfelice.dev
            </a>
            <a
              href="#work"
              className="rounded-full border border-border px-7 py-3 font-medium transition hover:bg-secondary/60"
            >
              See my work
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
          <span>© {new Date().getFullYear()} Pierfelice · Full-Stack Developer</span>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.2em]">
          Crafted in Italy · Built to last
        </div>
      </div>
    </footer>
  );
}
