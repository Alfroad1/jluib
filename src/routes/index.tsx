import { createFileRoute } from "@tanstack/react-router";
const autoparts = "/images/autoparts.png";
   const fitness = "/images/fitness.png";
   const sorter = "/images/sorter.png";
   const emaillabel = "/images/emaillabel.png";
   const rag = "/images/rag.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Johnson Luib — Executive VA & AI Automation Specialist" },
      {
        name: "description",
        content:
          "Executive Assistant and General VA with 9+ years across customer support, legislative work, and AI-powered workflow automation using n8n, Supabase, and Gemini.",
      },
      { property: "og:title", content: "Johnson Luib — Executive VA & AI Automation Specialist" },
      {
        property: "og:description",
        content:
          "Reliable remote VA support: inbox, calendar, research, e-commerce and customer support — plus AI workflows that free up your time.",
      },
    ],
  }),
  component: Index,
});

type Service = {
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  {
    icon: "01",
    title: "Executive & Admin Support",
    description:
      "Calendar management, high-volume email correspondence, confidential documentation, meeting prep, and follow-ups so executives can focus on decisions.",
  },
  {
    icon: "02",
    title: "Inbox & Calendar Management",
    description:
      "Triage emails, filter noise, flag priorities, and keep your calendar clean across time zones — nothing slips, nothing double-booked.",
  },
  {
    icon: "03",
    title: "Customer & E-commerce Support",
    description:
      "Billing, account, and product inquiries handled via email, live chat, and tickets with a friendly, professional tone that keeps buyers loyal.",
  },
  {
    icon: "04",
    title: "Data Entry, Analysis & Reporting",
    description:
      "Accurate data input, lead lists, market research, dashboards, and summary reports pulled together from scattered sources.",
  },
  {
    icon: "05",
    title: "File & Document Organization",
    description:
      "Sort Drive folders, standardize file naming, tag documents, and keep shared workspaces tidy and searchable.",
  },
  {
    icon: "06",
    title: "Research & Report Preparation",
    description:
      "Legislative-grade research, briefing materials, and structured summaries backed by real sources — not vague AI paraphrases.",
  },
  {
    icon: "07",
    title: "Social Media & Content Assist",
    description:
      "Schedule posts, draft captions, pull analytics, and keep a consistent voice across your channels.",
  },
  {
    icon: "08",
    title: "AI Workflow Automation",
    description:
      "Custom n8n + Supabase workflows for inbox triage, RAG assistants, reporting, and document intake — repetitive work runs itself.",
  },
];

type Automation = {
  title: string;
  tag: string;
  description: string;
  bullets: string[];
  image: string;
  stack: string[];
};

const automations: Automation[] = [
  {
    title: "AI Email Labeller & Triage",
    tag: "Inbox automation",
    description:
      "Automatically reads incoming Gmail messages, classifies them (High Priority, Promotion, Job Opportunity, Billing, Personal), applies labels, and marks them read — cutting manual inbox triage to zero.",
    bullets: [
      "Gmail Trigger → Gemini Text Classifier",
      "Auto-labels + auto-archives by category",
      "Fallback path for messages needing review",
    ],
    stack: ["n8n", "Gmail API", "Gemini"],
    image: emaillabel.url,
  },
  {
    title: "Google Drive Auto Sorter",
    tag: "File organization",
    description:
      "Watches a Drive folder for new uploads, analyses each document with AI, then files it into the correct subfolder automatically — perfect for client document intake.",
    bullets: [
      "Drive Trigger → Download → Analyze",
      "AI picks the right destination folder",
      "Moves the file, no manual sorting",
    ],
    stack: ["n8n", "Google Drive", "Gemini"],
    image: sorter.url,
  },
  {
    title: "AI Customer Support Agent (Auto Parts)",
    tag: "RAG assistant",
    description:
      "Chat agent answering product questions for an auto-parts store. Backed by a Supabase vector store that re-indexes whenever the source catalog in Drive is updated.",
    bullets: [
      "Chat → Agent → Supabase Vector Store",
      "Gemini embeddings for retrieval",
      "Auto re-index on Drive file changes",
    ],
    stack: ["n8n", "Supabase pgvector", "Gemini"],
    image: autoparts.url,
  },
  {
    title: "RAG Knowledge Pipeline",
    tag: "Vector indexing",
    description:
      "Document ingestion workflow: any new file in Drive is downloaded, chunked, embedded with Gemini, and stored in Supabase pgvector — ready for any AI assistant to query.",
    bullets: [
      "Drive Trigger → Download → Loader",
      "Gemini embeddings → Supabase vectors",
      "Plug-and-play for any chat agent",
    ],
    stack: ["n8n", "Supabase", "Gemini Embeddings"],
    image: rag.url,
  },
  {
    title: "Strava Fitness Coach — Email Report",
    tag: "Reporting & summaries",
    description:
      "Pulls activity data from Strava, extracts key metrics, asks an AI coach for feedback, formats it as HTML, logs it to a Sheet, and emails the athlete a clean weekly report.",
    bullets: [
      "Strava Trigger → Metrics extraction",
      "AI coach commentary via Gemini",
      "HTML email + Google Sheets log",
    ],
    stack: ["n8n", "Strava API", "Google Sheets"],
    image: fitness.url,
  },
];

type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

const experience: Experience[] = [
  {
    role: "Virtual Assistant · Customer Support · AI Automation",
    org: "Iqor — Freelancer (Remote)",
    period: "2017 — 2026",
    points: [
      "Handled inbound and outbound customer support for billing, account, and payment concerns across a high-volume freelance caseload over 9 years.",
      "Managed email/chat support, scheduling, follow-ups, and documentation across multiple accounts simultaneously.",
      "Built AI-powered workflows for email classification, reporting, and file organization using n8n, Airtable, Supabase, and Qdrant.",
    ],
  },
  {
    role: "Legislative Assistant · Data Analyst",
    org: "Provincial / City Council Office",
    period: "2022 — 2025",
    points: [
      "Assisted council members with legislative research, drafting resolutions and ordinances, and preparing briefing materials.",
      "Compiled and analyzed constituent and legislative data across ongoing cases to support policy decisions.",
      "Tracked bill and ordinance status end-to-end and coordinated correspondence between offices and constituents.",
      "Prepared summary reports and data visualizations for council members and staff.",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    body: "Quick call to map your day-to-day, tools, and the tasks eating your time.",
  },
  {
    step: "02",
    title: "Setup",
    body: "Shared docs, SOPs, access, and a trial task so we both know the fit is right.",
  },
  {
    step: "03",
    title: "Delivery",
    body: "Daily execution with clear updates, weekly summaries, and honest turnaround.",
  },
  {
    step: "04",
    title: "Automate",
    body: "Once patterns are clear, I build AI workflows so the repetitive parts run themselves.",
  },
];

const stats = [
  { value: "9+", label: "Years supporting execs & clients" },
  { value: "5+", label: "AI workflows shipped" },
  { value: "3", label: "Time zones covered (US · UK · PH)" },
  { value: "24h", label: "Typical response window" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="font-mono text-sm">
            <span className="text-muted-foreground">{"{ "}</span>
            <span className="text-foreground">johnson.luib</span>
            <span className="text-muted-foreground">{" }"}</span>
          </span>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition hover:text-foreground">About</a>
            <a href="#services" className="transition hover:text-foreground">Services</a>
            <a href="#work" className="transition hover:text-foreground">Work</a>
            <a href="#experience" className="transition hover:text-foreground">Experience</a>
            <a href="#contact" className="transition hover:text-foreground">Contact</a>
          </div>
          <a
            href="#contact"
            className="hidden rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition hover:border-primary/50 md:inline-block"
          >
            Hire me →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(700px circle at 15% 0%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 60%), radial-gradient(500px circle at 90% 20%, color-mix(in oklab, var(--primary) 8%, transparent), transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Available for remote VA &amp; automation work
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Executive support and{" "}
            <span className="text-primary">smart automations</span> that take
            work off your plate.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            I'm Johnson — an Executive Assistant &amp; AI Automation Specialist
            from Surigao City, Philippines. 9+ years across BPO, legislative
            work, and data analysis, now building n8n workflows so the
            repetitive parts run themselves.
          </p>
          <div id="contact-cta" className="mt-10 flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:Karokolegend20@gmail.com"
              className="rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground shadow-[0_0_0_1px_var(--primary),0_10px_30px_-10px_color-mix(in_oklab,var(--primary)_50%,transparent)] transition hover:opacity-90"
            >
              Email me
            </a>
            <a
              href="https://wa.me/639851905429"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border bg-card px-5 py-2.5 font-medium transition hover:border-primary/50 hover:bg-secondary"
            >
              WhatsApp +63 985 190 5429
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card p-5">
                <div className="text-2xl font-bold text-foreground md:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 font-mono text-xs text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-3 md:py-24">
          <div>
            <p className="font-mono text-sm text-primary">// ABOUT</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              Discreet, detail-obsessed, quietly technical.
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground md:col-span-2 md:text-lg">
            <p>
              I've spent nearly a decade supporting executives, government
              offices, and remote clients across the US, UK, and the
              Philippines — handling everything from billing calls to drafting
              resolutions to keeping a council chief's calendar sane.
            </p>
            <p>
              Somewhere along the way I got tired of doing the same tasks
              twice. So I started building automations — small n8n graphs,
              then RAG agents, then full document pipelines on Supabase — and
              haven't stopped since.
            </p>
            <p>
              If you need someone who can quietly run the back office{" "}
              <span className="text-foreground">and</span> ship the
              automation that replaces half of it, we'll get along.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-sm text-primary">// SERVICES</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                What I can help with
              </h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                Day-to-day support plus the automations that quietly compound.
              </p>
            </div>
            <a
              href="#contact"
              className="hidden font-mono text-xs text-muted-foreground transition hover:text-primary md:inline-block"
            >
              [ start a conversation → ]
            </a>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative bg-card p-6 transition hover:bg-secondary"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">
                    {s.icon}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-border transition group-hover:bg-primary" />
                </div>
                <h3 className="mt-8 text-base font-semibold text-card-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Automations */}
      <section id="work" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="font-mono text-sm text-primary">// SELECTED WORK</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            Automation projects
          </h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            On top of regular VA support, I design workflows that handle
            repetitive work in the background.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {automations.map((a, i) => (
              <article
                key={a.title}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary/40"
              >
                <div className="relative aspect-video overflow-hidden border-b border-border bg-muted">
                  <img
                    src={a.image}
                    alt={`${a.title} workflow screenshot`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="absolute left-3 top-3 rounded-md border border-border bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur">
                    {String(i + 1).padStart(2, "0")} · {a.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {a.description}
                  </p>
                  <ul className="mt-4 space-y-1.5 font-mono text-xs text-muted-foreground">
                    {a.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-primary">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-4">
                    {a.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-sm text-primary">// PROCESS</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            How working together looks
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {process.map((p) => (
              <div
                key={p.step}
                className="relative rounded-xl border border-border bg-card p-6"
              >
                <span className="font-mono text-xs text-primary">{p.step}</span>
                <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="font-mono text-sm text-primary">// EXPERIENCE</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            Nine years, three worlds
          </h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Customer service, government, and automation — the mix behind the
            work.
          </p>

          <ol className="mt-12 space-y-8 border-l border-border pl-6 md:pl-10">
            {experience.map((e) => (
              <li key={e.org} className="relative">
                <span className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background md:-left-[45px]" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{e.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {e.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-primary">{e.org}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-xl border border-border bg-card p-6">
            <p className="font-mono text-xs text-primary">// EDUCATION</p>
            <p className="mt-3 font-semibold">
              Bachelor of Arts, Filipino and Other Languages
            </p>
            <p className="text-sm text-muted-foreground">
              Mindanao State University, Marawi · 2010 — 2017
            </p>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="tools" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="font-mono text-sm text-primary">// TOOLS</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight">
                Tools I work with
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-md">
                A curated stack for admin, communication, and AI-powered automation.
              </p>
            </div>
            <p className="font-mono text-xs text-muted-foreground">
              26+ tools · 4 categories
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                group: "Productivity & Admin",
                tag: "01",
                items: [
                  { name: "Google Workspace", slug: "googleworkspace", color: "4285F4" },
                  { name: "Gmail", slug: "gmail", color: "EA4335" },
                  { name: "Google Drive", slug: "googledrive", color: "4285F4" },
                  { name: "Sheets", slug: "googlesheets", color: "34A853" },
                  { name: "Calendar", slug: "googlecalendar", color: "4285F4" },
                  { name: "MS Office", slug: "microsoftoffice", color: "D83B01" },
                ],
              },
              {
                group: "Communication & PM",
                tag: "02",
                items: [
                  { name: "Slack", slug: "slack", color: "4A154B" },
                  { name: "MS Teams", slug: "microsoftteams", color: "6264A7" },
                  { name: "Zoom", slug: "zoom", color: "0B5CFF" },
                  { name: "Google Meet", slug: "googlemeet", color: "00897B" },
                  { name: "Airtable", slug: "airtable", color: "18BFFF" },
                  { name: "Notion", slug: "notion", color: "FFFFFF" },
                  { name: "Trello", slug: "trello", color: "0052CC" },
                ],
              },
              {
                group: "AI & Automation",
                tag: "03",
                items: [
                  { name: "n8n", slug: "n8n", color: "EA4B71" },
                  { name: "GHL", slug: "gohighlevel", color: "FFFFFF" },
                  { name: "Supabase", slug: "supabase", color: "3ECF8E" },
                  { name: "Qdrant", slug: "qdrant", color: "DC244C" },
                  { name: "Gemini", slug: "googlegemini", color: "8E75B2" },
                  { name: "ChatGPT", slug: "openai", color: "10A37F" },
                  { name: "Claude", slug: "anthropic", color: "D97757" },
                  { name: "Grok", slug: "x", color: "FFFFFF" },
                ],
              },
              {
                group: "SMM & Creative",
                tag: "04",
                items: [
                  { name: "Photoshop", slug: "adobephotoshop", color: "31A8FF" },
                  { name: "Canva", slug: "canva", color: "00C4CC" },
                  { name: "Filmora", slug: "filmora", color: "1E90FF" },
                  { name: "CapCut", slug: "capcut", color: "000000" },
                  { name: "DaVinci", slug: "davinciresolve", color: "FF6B6B" },
                ],
              },
            ].map((g) => (
              <div
                key={g.group}
                className="group relative rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs text-muted-foreground">
                    {g.group}
                  </p>
                  <span className="font-mono text-[10px] text-primary/70">
                    {g.tag}
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {g.items.map((t) => (
                    <div
                      key={t.name}
                      title={t.name}
                      className="flex flex-col items-center justify-center gap-2 rounded-lg border border-border bg-background/60 p-3 transition-all hover:border-primary/50 hover:bg-background hover:-translate-y-0.5"
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                        alt={t.name}
                        loading="lazy"
                        className="h-6 w-6 opacity-90"
                        onError={(e) => {
                          const el = e.currentTarget as HTMLImageElement;
                          const parent = el.parentElement;
                          if (parent && !parent.querySelector("[data-fallback]")) {
                            const span = document.createElement("span");
                            span.setAttribute("data-fallback", "");
                            span.className =
                              "flex h-6 w-6 items-center justify-center rounded bg-primary/10 font-mono text-[10px] text-primary";
                            span.textContent = t.name.slice(0, 2).toUpperCase();
                            parent.insertBefore(span, el);
                          }
                          el.style.display = "none";
                        }}
                      />
                      <span className="font-mono text-[10px] text-muted-foreground text-center leading-tight">
                        {t.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="border-b border-border">
        <div className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24 md:py-28">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(500px circle at 50% 50%, color-mix(in oklab, var(--primary) 10%, transparent), transparent 60%)",
            }}
            aria-hidden
          />
          <div className="relative text-center">
            <p className="font-mono text-sm text-primary">// LET'S TALK</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Free up your calendar.
              <br />
              <span className="text-primary">Automate the boring stuff.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Tell me what's eating your week. I'll reply within a day with a
              plan and a rate.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              <a
                href="mailto:Karokolegend20@gmail.com"
                className="rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground transition hover:opacity-90"
              >
                Karokolegend20@gmail.com
              </a>
              <a
                href="https://wa.me/639851905429"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border bg-card px-5 py-2.5 font-medium transition hover:border-primary/50"
              >
                WhatsApp +63 985 190 5429
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 font-mono text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Johnson E. Luib Jr.</span>
          <span>Surigao City, Philippines · Remote worldwide</span>
        </div>
      </footer>
    </div>
  );
}
