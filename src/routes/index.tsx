import { createFileRoute } from "@tanstack/react-router";
import autoparts from "@/assets/autoparts.png.asset.json";
import fitness from "@/assets/fitness.png.asset.json";
import sorter from "@/assets/sorter.png.asset.json";
import emaillabel from "@/assets/emaillabel.png.asset.json";
import rag from "@/assets/rag.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Johnson Luib — General Virtual Assistant" },
      {
        name: "description",
        content:
          "General Virtual Assistant offering email and calendar management, data entry, research, customer support, and AI-powered workflow automations.",
      },
      { property: "og:title", content: "Johnson Luib — General Virtual Assistant" },
      {
        property: "og:description",
        content:
          "Reliable remote VA support: inbox management, scheduling, research, and smart automations that free up your time.",
      },
    ],
  }),
  component: Index,
});

type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Inbox & Calendar Management",
    description:
      "Triage emails, filter spam, flag priorities, and keep your calendar organized so you never miss a meeting or deadline.",
  },
  {
    title: "Data Entry & Research",
    description:
      "Accurate data input, lead list building, market research, and compiling reports from scattered sources into clean documents.",
  },
  {
    title: "Customer Support",
    description:
      "Handle ticket responses, live-chat queries, and follow-ups with a friendly, professional tone that keeps customers happy.",
  },
  {
    title: "File & Document Organization",
    description:
      "Sort files into proper folders, name and tag documents consistently, and keep shared drives tidy and easy to navigate.",
  },
  {
    title: "Social Media & Content Assistance",
    description:
      "Schedule posts, draft captions, pull basic analytics, and help maintain a consistent online presence for your brand.",
  },
  {
    title: "Travel & Appointment Booking",
    description:
      "Book flights, hotels, and transport; set reminders; and coordinate schedules across time zones so trips go smoothly.",
  },
];

type Automation = {
  title: string;
  tag: string;
  description: string;
  bullets: string[];
  image: string;
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
    image: fitness.url,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="font-mono text-sm text-muted-foreground">
            <span className="text-muted-foreground">{"{ "}</span>
            <span className="text-foreground">johnson.luib</span>
            <span className="text-muted-foreground">{" }"}</span>
          </span>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition hover:text-foreground">Services</a>
            <a href="#work" className="transition hover:text-foreground">Work</a>
            <a href="#tools" className="transition hover:text-foreground">Tools</a>
            <a href="#contact" className="transition hover:text-foreground">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(600px circle at 20% 0%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
            Available for remote VA &amp; automation work
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Virtual assistance and{" "}
            <span className="text-primary">smart automations</span> that take
            work off your plate.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Hi, I'm Johnson — a general VA from Surigao City, Philippines.
            I handle inbox, calendar, research, and support work, and I build
            AI workflows so the repetitive parts run themselves.
          </p>
          <div id="contact" className="mt-10 flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:Karokolegend20@gmail.com"
              className="rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground transition hover:opacity-90"
            >
              Email me
            </a>
            <a
              href="https://wa.me/639851905429"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border bg-card px-5 py-2.5 font-medium transition hover:bg-secondary"
            >
              WhatsApp +63 985 190 5429
            </a>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <p className="font-mono text-sm text-primary">// SERVICES</p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
          What I can help with
        </h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Day-to-day tasks that keep your business running smoothly.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-xl border border-border bg-card p-6 transition hover:border-primary/40"
            >
              <h3 className="text-base font-semibold text-card-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Automations */}
      <section id="work" className="border-t border-border">
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
            {automations.map((a) => (
              <article
                key={a.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary/40"
              >
                <div className="aspect-video overflow-hidden border-b border-border bg-muted">
                  <img
                    src={a.image}
                    alt={`${a.title} workflow screenshot`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-xs text-muted-foreground">
                    {a.tag}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-card-foreground">
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="tools" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-sm text-primary">// TOOLS</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight">
            Tools I work with
          </h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Google Workspace",
              "Gmail",
              "Google Drive",
              "Sheets",
              "Microsoft Office",
              "Airtable",
              "Notion",
              "Trello",
              "Slack",
              "Zoom",
              "n8n",
              "Supabase",
              "Qdrant",
              "Gemini",
              "OpenRouter",
              "CRM tools",
            ].map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-card px-3 py-1.5 font-mono text-sm text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 font-mono text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Johnson E. Luib Jr.</span>
          <span>Available for full-time &amp; part-time remote engagements.</span>
        </div>
      </footer>
    </div>
  );
}

