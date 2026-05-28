import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "it";

type Dict = Record<string, { en: string; it: string }>;

export const dict = {
  // Nav
  nav_about: { en: "About", it: "Chi sono" },
  nav_expertise: { en: "Expertise", it: "Competenze" },
  nav_work: { en: "Work", it: "Lavori" },
  nav_reviews: { en: "Reviews", it: "Recensioni" },
  nav_contact: { en: "Contact", it: "Contatti" },
  nav_cta: { en: "Get in touch", it: "Contattami" },

  // Hero
  hero_badge: { en: "Open to remote roles · Worldwide", it: "Disponibile per lavori remoti · In tutto il mondo" },
  hero_title_1: { en: "AI & Coding", it: "Ingegnere di Infrastrutture" },
  hero_title_2: { en: "Infrastructure Engineer.", it: "AI & Coding." },
  hero_desc: {
    en: "I'm Pierfelice — I design and build AI infrastructure, developer platforms and cloud-native systems that ship to production and scale.",
    it: "Sono Pierfelice — progetto e costruisco infrastrutture AI, piattaforme per sviluppatori e sistemi cloud-native pronti per la produzione e scalabili.",
  },
  hero_cta_work: { en: "View selected work", it: "Vedi i progetti" },
  hero_cta_hire: { en: "Hire me remotely", it: "Assumimi da remoto" },
  hero_m1_v: { en: "6+", it: "6+" },
  hero_m1_l: { en: "Years building systems", it: "Anni di esperienza" },
  hero_m2_v: { en: "Remote", it: "Remoto" },
  hero_m2_l: { en: "Worldwide · Any timezone", it: "Ovunque · Qualsiasi fuso" },
  hero_m3_v: { en: "AI · Cloud", it: "AI · Cloud" },
  hero_m3_l: { en: "Infra · Platforms · Agents", it: "Infra · Piattaforme · Agenti" },
  hero_role: { en: "AI & Coding Infra Engineer", it: "Ing. Infrastrutture AI & Coding" },
  hero_badge_remote: { en: "Remote · Worldwide", it: "Remoto · Globale" },

  // About
  about_label: { en: "01 · About", it: "01 · Chi sono" },
  about_title_1: { en: "A digital creator who", it: "Un creatore digitale che" },
  about_title_2: { en: "ships", it: "consegna" },
  about_title_3: { en: ".", it: "." },
  about_p1: {
    en: "Hi, I'm Pierfelice — an AI & Coding Infrastructure Engineer based in Italy, working remotely with teams worldwide. I design the systems behind AI products: inference platforms, agent runtimes, developer tooling and cloud infrastructure.",
    it: "Ciao, sono Pierfelice — Ingegnere di Infrastrutture AI & Coding con base in Italia, lavoro da remoto con team in tutto il mondo. Progetto i sistemi dietro i prodotti AI: piattaforme di inferenza, runtime di agenti, strumenti per sviluppatori e infrastrutture cloud.",
  },
  about_p2: {
    en: "Years across AI, full-stack and data — I deliver production-grade infrastructure backed by a master's in computer science from the University of Oxford. Native Italian, fluent English.",
    it: "Anni di esperienza tra AI, full-stack e dati — fornisco infrastrutture di livello produttivo, supportato da un master in informatica all'Università di Oxford. Italiano madrelingua, inglese fluente.",
  },

  // Expertise
  exp_label: { en: "02 · Expertise", it: "02 · Competenze" },
  exp_title_1: { en: "What I", it: "Cosa so" },
  exp_title_2: { en: "do best", it: "fare meglio" },
  exp_subtitle: { en: "Six core areas where I deliver production-ready work.", it: "Sei aree chiave dove consegno lavori pronti per la produzione." },

  exp1_t: { en: "AI Infrastructure", it: "Infrastruttura AI" },
  exp1_d: { en: "LLM serving, RAG pipelines, vector DBs, GPU orchestration and inference platforms designed to scale.", it: "Serving di LLM, pipeline RAG, database vettoriali, orchestrazione GPU e piattaforme di inferenza scalabili." },
  exp2_t: { en: "Developer Platforms", it: "Piattaforme per Sviluppatori" },
  exp2_d: { en: "Internal tooling, CI/CD, SDKs and DX-first APIs that let engineering teams ship faster.", it: "Strumenti interni, CI/CD, SDK e API DX-first che permettono ai team di rilasciare più velocemente." },
  exp3_t: { en: "Cloud & DevOps", it: "Cloud & DevOps" },
  exp3_d: { en: "Kubernetes, Docker, Terraform and observability on AWS / GCP / Cloudflare — production-grade from day one.", it: "Kubernetes, Docker, Terraform e observability su AWS / GCP / Cloudflare — pronto per la produzione dal primo giorno." },
  exp4_t: { en: "AI Agents", it: "Agenti AI" },
  exp4_d: { en: "Autonomous agents, tool-use orchestration and LLM workflows. Three years on Bittensor + custom stacks.", it: "Agenti autonomi, orchestrazione di tool e workflow LLM. Tre anni su Bittensor e stack personalizzati." },
  exp5_t: { en: "Full-Stack Engineering", it: "Ingegneria Full-Stack" },
  exp5_d: { en: "React / TypeScript front-ends with Node, PHP and Python services. End-to-end ownership.", it: "Front-end React / TypeScript con servizi Node, PHP e Python. Responsabilità end-to-end." },
  exp6_t: { en: "Data Systems", it: "Sistemi Dati" },
  exp6_d: { en: "Pipelines, scraping, MySQL/Postgres design, streaming and real-time sync across services.", it: "Pipeline, scraping, design MySQL/Postgres, streaming e sincronizzazione in tempo reale tra servizi." },

  // Skills
  skills_label: { en: "03 · Stack", it: "03 · Stack" },
  skills_title: { en: "Tools of the trade", it: "Strumenti del mestiere" },

  // Projects
  proj_label: { en: "04 · Selected work", it: "04 · Progetti selezionati" },
  proj_title_1: { en: "Recent", it: "Progetti" },
  proj_title_2: { en: "projects", it: "recenti" },
  proj_subtitle: { en: "A handful of shipped builds across web, mobile, AI and data systems.", it: "Una selezione di progetti consegnati tra web, mobile, AI e sistemi dati." },

  p1_t: { en: "Site Initial Page Redesign", it: "Redesign della Landing Page" },
  p1_d: { en: "Client needed a complete landing page redesign in a very short time. Delivered in just 4 hours — bold typography, sharp hierarchy, conversion-first layout.", it: "Il cliente aveva bisogno di un redesign completo della landing page in tempi brevissimi. Consegnato in sole 4 ore — tipografia decisa, gerarchia netta, layout orientato alla conversione." },
  p2_t: { en: "AI Chatbot Integration with Site", it: "Integrazione Chatbot AI con il Sito" },
  p2_d: { en: "Admin dashboard for an AI chatbot platform — managing intents, messages and automation flows. Modular UI built for real-world conversational AI.", it: "Dashboard admin per una piattaforma di chatbot AI — gestione di intent, messaggi e flussi di automazione. UI modulare per AI conversazionale reale." },
  p3_t: { en: "Android Shopping App", it: "App Shopping Android" },
  p3_d: { en: "Production Android commerce app focused on UI polish and user attention. Ongoing client engagement — built for retention.", it: "App Android di commerce in produzione, focalizzata su UI curata e attenzione utente. Collaborazione continuativa — pensata per la retention." },
  p4_t: { en: "AI Mining Experience", it: "Esperienza AI Mining" },
  p4_d: { en: "Three years of Bittensor work — AI agents, data control and API integration at scale across multiple deployments.", it: "Tre anni di lavoro su Bittensor — agenti AI, controllo dati e integrazione API su larga scala in più deployment." },
  p5_t: { en: "Real-time Order Tracking with Status", it: "Tracking Ordini in Tempo Reale" },
  p5_d: { en: "End-to-end product management: drag-and-drop uploads, client-side compression, color-coded stock and live status updates wired into PHP + MySQL.", it: "Gestione prodotti end-to-end: upload drag-and-drop, compressione lato client, stock con codici colore e aggiornamenti di stato live su PHP + MySQL." },

  // Reviews
  rev_label: { en: "05 · Voices", it: "05 · Voci" },
  rev_title_1: { en: "What clients", it: "Cosa dicono" },
  rev_title_2: { en: "say", it: "i clienti" },
  rev_verified: { en: "Verified", it: "Verificato" },

  r1_text: { en: "Excellent work. Competent engineer, always available. He advised me and built the project exactly as I wanted. I'll definitely entrust him with my next projects.", it: "Lavoro eccellente. Ingegnere competente, sempre disponibile. Mi ha consigliato e costruito il progetto esattamente come volevo. Gli affiderò sicuramente i prossimi progetti." },
  r1_proj: { en: "Telegram Meme Token Trading Bot", it: "Bot Trading Token Telegram" },
  r2_text: { en: "Great communication, honest person, provided excellent work as promised. A+", it: "Ottima comunicazione, persona onesta, lavoro eccellente come promesso. A+" },
  r2_proj: { en: "Betfair Racing Data CSV Export", it: "Export CSV Dati Corse Betfair" },
  r3_text: { en: "Second project I've trusted him with — already booked a third. Understands everything without too many questions. Very good.", it: "Secondo progetto che gli affido — già prenotato il terzo. Capisce tutto senza troppe domande. Molto bravo." },
  r3_proj: { en: "Video & Mobile App Edits", it: "Modifiche Video e App Mobile" },
  r4_text: { en: "Received the brief and built a perfect job almost without asking anything more. Uncommon. Great intelligence, comprehension, creativity and mental order. Serious and professional.", it: "Ricevuto il brief e ha costruito un lavoro perfetto quasi senza chiedere altro. Raro. Grande intelligenza, comprensione, creatività e ordine mentale. Serio e professionale." },
  r4_proj: { en: "Reverse Engineering Mobile App", it: "Reverse Engineering App Mobile" },
  r5_text: { en: "Completed the work as requested, based on the instructions provided.", it: "Ha completato il lavoro come richiesto, in base alle istruzioni fornite." },
  r5_proj: { en: "QR-Based Security Door Maintenance System", it: "Sistema Manutenzione Porte Sicurezza QR" },

  // Experience
  bg_label: { en: "06 · Background", it: "06 · Esperienza" },
  bg_edu: { en: "Education", it: "Formazione" },
  bg_edu_school: { en: "University of Oxford 🇬🇧", it: "Università di Oxford 🇬🇧" },
  bg_edu_deg: { en: "Degree + Master in Computer Science", it: "Laurea + Master in Informatica" },
  bg_edu_years: { en: "2017 — 2021 · 4 years", it: "2017 — 2021 · 4 anni" },
  bg_cert: { en: "Certification", it: "Certificazione" },
  bg_cert_t: { en: "Preferred Freelancer Program SLA", it: "Preferred Freelancer Program SLA" },
  bg_cert_d: { en: "Verified · Level 4 · Top-tier reliability badge", it: "Verificato · Livello 4 · Badge di affidabilità top" },

  // Contact
  contact_label: { en: "07 · Let's build", it: "07 · Costruiamo insieme" },
  contact_title_1: { en: "Have an idea?", it: "Hai un'idea?" },
  contact_title_2: { en: "Let's make it real.", it: "Rendiamola reale." },
  contact_desc: { en: "Open to MVPs, full apps, AI integrations and data projects. Reply within 24h.", it: "Disponibile per MVP, app complete, integrazioni AI e progetti dati. Rispondo entro 24h." },
  contact_cta_work: { en: "See my work", it: "Vedi i progetti" },

  // Footer
  footer_role: { en: "AI & Coding Infrastructure Engineer", it: "Ing. Infrastrutture AI & Coding" },
  footer_tag: { en: "Crafted in Italy · Built to last", it: "Realizzato in Italia · Costruito per durare" },
} satisfies Dict;

export type DictKey = keyof typeof dict;

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) || null;
    if (saved === "en" || saved === "it") setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

export function useT() {
  const { lang } = useContext(LangContext);
  return (key: DictKey) => dict[key][lang];
}
