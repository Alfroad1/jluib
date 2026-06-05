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
      {/* Hero */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            General Virtual Assistant
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Johnson Luib
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            I provide reliable day-to-day virtual assistance — inbox management,
            scheduling, data entry, research, and customer support — and I also build
            smart automations that remove repetitive admin work so you can focus on
            what actually matters.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
              Surigao City, Philippines · Remote
            </span>
            <a
              href="mailto:Karokolegend20@gmail.com"
              className="rounded-full bg-primary px-4 py-1.5 font-medium text-primary-foreground transition hover:opacity-90"
            >
              Karokolegend20@gmail.com
            </a>
            <a
              href="tel:+639454882910"
              className="rounded-full border border-border px-4 py-1.5 font-medium transition hover:bg-accent"
            >
              +63 945 488 2910
            </a>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            What I Can Help With
          </h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Day-to-day tasks that keep your business running smoothly.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-border bg-card p-6 transition hover:shadow-md"
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
      <main className="border-t border-border mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Workflows I Build
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              On top of regular VA support, I design automations that handle
              repetitive work in the background.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {automations.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={a.image}
                  alt={`${a.title} workflow screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {a.tag}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-card-foreground">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {a.description}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-card-foreground">
                  {a.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Stack */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold tracking-tight">Tools I work with</h2>
          <div className="mt-6 flex flex-wrap gap-2">
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
                className="rounded-md border border-border bg-background px-3 py-1.5 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Johnson E. Luib Jr. · Available for full-time
          and part-time remote VA engagements.
        </div>
      </footer>
    </div>
  );
}
