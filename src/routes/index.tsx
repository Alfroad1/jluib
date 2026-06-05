import { createFileRoute } from "@tanstack/react-router";
import autoparts from "@/assets/autoparts.png.asset.json";
import fitness from "@/assets/fitness.png.asset.json";
import sorter from "@/assets/sorter.png.asset.json";
import emaillabel from "@/assets/emaillabel.png.asset.json";
import rag from "@/assets/rag.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Johnson Luib — Virtual Assistant & Automation Portfolio" },
      {
        name: "description",
        content:
          "Virtual Assistant portfolio of Johnson Luib featuring AI-powered n8n automations: email triage, file sorting, RAG assistants, and reporting workflows.",
      },
      { property: "og:title", content: "Johnson Luib — VA & Automation Portfolio" },
      {
        property: "og:description",
        content:
          "AI-powered workflow automations built with n8n: email classification, Drive auto-sorter, RAG assistant, fitness coach reports, and more.",
      },
    ],
  }),
  component: Index,
});

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
            Virtual Assistant · Automation Builder
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Johnson Luib
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            I help busy teams reclaim their time by combining traditional VA skills
            with AI-powered workflow automations built in n8n — email triage, file
            organization, customer support, and reporting that runs itself.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
              Surigao City, Philippines
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

      {/* Automations */}
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Sample Automations
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              A few workflows I've built end-to-end. Each one replaces hours of
              repetitive admin work.
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
              "n8n",
              "Supabase",
              "Qdrant",
              "Google Workspace",
              "Gmail",
              "Google Drive",
              "Sheets",
              "Airtable",
              "Gemini",
              "OpenRouter",
              "Microsoft Office",
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
