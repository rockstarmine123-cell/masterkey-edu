import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, FileText, Layers } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { noteSets } from "@/lib/site";
import posterNotes from "@/assets/poster-notes.jpg";

export const Route = createFileRoute("/notes")({
  head: () => ({
    meta: [
      { title: "Free Study Notes for Class 9–12 | VidyaPath Academy" },
      {
        name: "description",
        content:
          "Download chapter-wise study notes with diagrams, formula sheets and revision tables for Class 9–12 and professional courses.",
      },
      { property: "og:title", content: "Study Notes | VidyaPath Academy" },
      {
        property: "og:description",
        content: "Chapter-wise notes, formula sheets and mind maps for Class 9–12 learners.",
      },
    ],
  }),
  component: NotesPage,
});

const howToUse = [
  {
    step: "1",
    title: "Read the concept page",
    text: "Each chapter opens with a one-page summary you can finish in ten minutes.",
  },
  {
    step: "2",
    title: "Solve the worked examples",
    text: "Examples are graded from board level to competitive level so difficulty rises gently.",
  },
  {
    step: "3",
    title: "Revise from the mind map",
    text: "The last page of every note is a single-sheet mind map built for the night before an exam.",
  },
];

function NotesPage() {
  return (
    <>
      <PageHero
        eyebrow="Notes"
        title="Notes that are short to read and easy to remember"
        description="Chapter-wise notes written by our faculty, checked against the latest NCERT and board syllabus, and formatted for both screen reading and printing."
      >
        <Button asChild variant="accent" size="lg">
          <Link to="/pyq">Pair notes with PYQ</Link>
        </Button>
      </PageHero>

      <section className="container-page py-16">
        <SectionHeading
          title="Subject-wise note library"
          description="Every set includes theory notes, formula sheets and a printable revision map."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {noteSets.map((n) => (
            <Card key={n.subject} className="card-lift flex h-full flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <FileText className="size-5" />
                  </span>
                  <Badge variant="secondary">{n.grade}</Badge>
                </div>
                <CardTitle className="mt-4 text-lg">{n.subject}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="text-sm leading-relaxed text-muted-foreground">{n.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Layers className="size-3.5" /> {n.chapters} chapters
                  </span>
                  <span>{n.format}</span>
                </div>
                <Button variant="outline" size="sm" className="mt-5 w-fit">
                  <Download className="size-4" /> Download sample
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-tint py-16">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <img
            src={posterNotes}
            alt="Poster showing a stack of study notes with a highlighter"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-2xl border border-border object-cover"
          />
          <div>
            <SectionHeading
              title="How to use these notes"
              description="A simple three-step routine that works for board exams and competitive tests alike."
            />
            <ol className="mt-8 space-y-5">
              {howToUse.map((s) => (
                <li key={s.step} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent font-semibold text-accent-foreground">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
