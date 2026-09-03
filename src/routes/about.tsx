import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { site } from "@/lib/site";
import heroImage from "@/assets/hero-students.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About VidyaPath Academy — Our Mission & Faculty" },
      {
        name: "description",
        content:
          "VidyaPath Academy makes structured, affordable learning available to Class 9–12 students, college learners and working professionals across India.",
      },
      { property: "og:title", content: "About | VidyaPath Academy" },
      {
        property: "og:description",
        content: "Our mission, teaching method and faculty behind VidyaPath Academy.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: HeartHandshake,
    title: "Affordable by design",
    text: "No school batch crosses ₹4,000 for a full session. Price should never decide who gets good teaching.",
  },
  {
    icon: Compass,
    title: "Structure over content dumps",
    text: "Every batch has a weekly plan, so learners always know what to study next.",
  },
  {
    icon: ShieldCheck,
    title: "Honest outcomes",
    text: "We publish real completion and improvement data instead of selling guaranteed results.",
  },
  {
    icon: Sparkles,
    title: "Teaching in plain language",
    text: "Concepts first, jargon later — the same approach works for a Class 9 student and a busy professional.",
  },
];

const faculty = [
  { name: "Dr. Meera Nair", role: "Head of Physics", detail: "IIT Bombay · 14 years teaching" },
  { name: "Rohan Deshpande", role: "Head of Mathematics", detail: "ISI Kolkata · 11 years teaching" },
  { name: "Faizan Ahmed", role: "Head of Chemistry", detail: "IIT Kanpur · 9 years teaching" },
  { name: "Priya Balan", role: "Professional Programmes", detail: "Ex-Deloitte analyst · 8 years" },
];

const timeline = [
  { year: "2019", text: "Started as a single Class 10 evening batch of 42 students." },
  { year: "2021", text: "Launched the free notes and previous year paper library." },
  { year: "2023", text: "Added Class 11–12 science and commerce tracks with live doubt rooms." },
  { year: "2025", text: "Opened weekend upskilling batches for working professionals." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Good teaching, made affordable and organised"
        description={`${site.name} began in 2019 with one evening batch. Today we teach school students, college learners and working professionals with the same principle: clear explanations, a fixed weekly plan and real support.`}
      />

      <section className="container-page grid items-center gap-10 py-16 lg:grid-cols-2">
        <img
          src={heroImage}
          alt="Students and professionals learning together in a VidyaPath classroom"
          width={1600}
          height={1100}
          loading="lazy"
          className="rounded-2xl border border-border object-cover"
        />
        <div>
          <SectionHeading
            title="Our mission"
            description="To make structured, exam-focused learning available to every Indian household at a price a family can plan for."
          />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            We build one thing well: a complete study path. Notes to learn from, previous year papers
            to practise on, live batches to keep the pace, and mentors who answer doubts the same
            day. Nothing in that list is an add-on sold separately.
          </p>
          <Button asChild className="mt-7">
            <Link to="/batches">See our batches</Link>
          </Button>
        </div>
      </section>

      <section className="section-tint py-16">
        <div className="container-page">
          <SectionHeading align="center" title="What we stand for" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title} className="card-lift h-full">
                <CardHeader>
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent-foreground">
                    <v.icon className="size-5" />
                  </span>
                  <CardTitle className="mt-4 text-lg">{v.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="Faculty leads" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {faculty.map((f) => (
                <Card key={f.name}>
                  <CardContent className="pt-6">
                    <p className="font-semibold">{f.name}</p>
                    <p className="text-sm text-primary">{f.role}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{f.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading title="How we grew" />
            <ol className="mt-8 space-y-6 border-l border-border pl-6">
              {timeline.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[1.85rem] top-1.5 size-3 rounded-full bg-accent" />
                  <p className="font-display font-bold">{t.year}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
