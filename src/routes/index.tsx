import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  CalendarDays,
  FileQuestion,
  GraduationCap,
  LifeBuoy,
  MessageCircleQuestion,
  Star,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/site/PageHero";
import { batches, inr, site } from "@/lib/site";
import heroImage from "@/assets/hero-students.jpg";
import posterNotes from "@/assets/poster-notes.jpg";
import posterDoubt from "@/assets/poster-doubt.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VidyaPath Academy — Live Batches, Notes & PYQ for Class 9–12" },
      {
        name: "description",
        content:
          "Affordable live batches (up to ₹4,000), chapter notes, previous year papers and daily doubt support for Class 9–12 students and working professionals.",
      },
      { property: "og:title", content: "VidyaPath Academy — Learn better, score higher" },
      {
        property: "og:description",
        content:
          "Live classes, notes, PYQ and doubt support for school students and working professionals.",
      },
    ],
  }),
  component: Home,
});

const features = [
  {
    icon: BookOpen,
    title: "Chapter Notes",
    text: "Concise, exam-ready notes with diagrams and formula sheets for every chapter.",
    to: "/notes" as const,
  },
  {
    icon: FileQuestion,
    title: "Previous Year Papers",
    text: "10 years of board and competitive papers with step-wise solutions.",
    to: "/pyq" as const,
  },
  {
    icon: GraduationCap,
    title: "Live Batches",
    text: "Structured Class 9–12 and weekend professional batches priced up to ₹4,000.",
    to: "/batches" as const,
  },
  {
    icon: MessageCircleQuestion,
    title: "Doubt Support",
    text: "Ask any question and get a mentor reply within 30 minutes on class days.",
    to: "/doubt" as const,
  },
];

const stats = [
  { value: "1.8 Lakh+", label: "Learners enrolled" },
  { value: "4,200+", label: "Hours of live classes" },
  { value: "96%", label: "Doubts solved same day" },
  { value: "4.8/5", label: "Average learner rating" },
];

const testimonials = [
  {
    name: "Ananya Verma",
    role: "Class 12, Lucknow",
    text: "The Target 12th batch fixed my Physics basics. Weekly mocks showed exactly where I was losing marks.",
  },
  {
    name: "Rahul Kadam",
    role: "Class 10, Pune",
    text: "Notes and PYQ together are enough for boards. I scored 94% without any extra coaching.",
  },
  {
    name: "Sneha Iyer",
    role: "Operations Analyst, Bengaluru",
    text: "Weekend Upskill fits around my job. The analytics capstone got me an internal promotion.",
  },
];

function Home() {
  const featured = batches.slice(0, 3);

  return (
    <>
      <section className="hero-surface">
        <div className="container-page grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2">
          <div>
            <Badge className="bg-accent text-accent-foreground hover:bg-accent">
              Admissions open · Session 2026–27
            </Badge>
            <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
              Quality education for Class 9–12 students and working professionals
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              {site.tagline} Join live batches, download structured notes, practise previous year
              papers and clear every doubt with mentors who actually reply.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="accent" size="lg">
                <Link to="/batches">Explore batches</Link>
              </Button>
              <Button asChild variant="outlineOnDark" size="lg">
                <Link to="/notes">Free notes & PYQ</Link>
              </Button>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-2xl font-bold">{s.value}</dd>
                  <p className="mt-1 text-xs text-primary-foreground/70">{s.label}</p>
                </div>
              ))}
            </dl>
          </div>
          <div className="overflow-hidden rounded-2xl border border-primary-foreground/15 shadow-2xl">
            <img
              src={heroImage}
              alt="Students and working professionals learning together in a bright classroom"
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading
          align="center"
          title="Everything you need in one place"
          description="Four core sections keep your preparation simple: notes to learn, PYQ to practise, batches to stay on track and doubt support when you are stuck."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Link key={f.title} to={f.to} className="block">
              <Card className="card-lift h-full">
                <CardHeader className="pb-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <f.icon className="size-5" />
                  </span>
                  <CardTitle className="mt-4 text-lg">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-tint py-16">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              title="Popular study batches"
              description="Full-session school batches cost up to ₹4,000 — notes, tests and doubt support included."
            />
            <Button asChild variant="outline">
              <Link to="/batches">View all batches</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featured.map((b) => (
              <Card key={b.slug} className="card-lift flex h-full flex-col">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    {b.grade}
                  </Badge>
                  <CardTitle className="mt-3 text-lg">{b.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {b.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <Star className="mt-0.5 size-4 shrink-0 text-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-end justify-between border-t border-border pt-4">
                    <div>
                      <p className="font-display text-2xl font-bold">{inr(b.price)}</p>
                      <p className="text-xs text-muted-foreground line-through">
                        {inr(b.oldPrice)}
                      </p>
                    </div>
                    <Button asChild size="sm">
                      <Link to="/batches">Enrol now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page grid gap-8 py-16 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-border bg-card">
          <img
            src={posterNotes}
            alt="Poster of stacked study notes and practice papers"
            width={1200}
            height={900}
            loading="lazy"
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">Notes & PYQ library</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Over 290 chapter notes and 240 solved papers, organised by class and subject. Download,
              print and revise offline.
            </p>
            <Button asChild variant="link" className="mt-3 px-0">
              <Link to="/pyq">Browse the paper bank</Link>
            </Button>
          </div>
        </article>
        <article className="overflow-hidden rounded-2xl border border-border bg-card">
          <img
            src={posterDoubt}
            alt="Poster of an online live class with doubt-solving chat bubbles"
            width={1200}
            height={900}
            loading="lazy"
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">Live classes & doubt rooms</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Attend live, revise from recordings, and join evening doubt rooms from 6 PM to 9 PM
              with subject mentors.
            </p>
            <Button asChild variant="link" className="mt-3 px-0">
              <Link to="/doubt">Ask a doubt</Link>
            </Button>
          </div>
        </article>
      </section>

      <section className="section-tint py-16">
        <div className="container-page">
          <SectionHeading align="center" title="What our learners say" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="h-full">
                <CardContent className="pt-6">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed">{t.text}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm">
                    <Users className="size-4 text-muted-foreground" />
                    <span className="font-semibold">{t.name}</span>
                    <span className="text-muted-foreground">· {t.role}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="hero-surface rounded-3xl px-6 py-12 text-center md:px-14">
          <h2 className="text-2xl font-bold md:text-3xl">Not sure which batch fits you?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">
            Talk to a counsellor on {site.phoneDisplay} or write to {site.email}. We will map your
            class, goal and available study hours to the right batch.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild variant="accent" size="lg">
              <Link to="/contact">Book a free counselling call</Link>
            </Button>
            <Button asChild variant="outlineOnDark" size="lg">
              <Link to="/help">
                <LifeBuoy className="size-4" /> Visit help centre
              </Link>
            </Button>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-xs text-primary-foreground/70">
            <CalendarDays className="size-4" /> New batches start every month
          </p>
        </div>
      </section>
    </>
  );
}
