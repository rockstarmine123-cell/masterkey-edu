import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Check, Clock, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { batches, inr, site } from "@/lib/site";

export const Route = createFileRoute("/batches")({
  head: () => ({
    meta: [
      { title: "Study Batches for Class 9–12 & Professionals | VidyaPath Academy" },
      {
        name: "description",
        content:
          "Live study batches for Class 9, 10, 11 and 12 priced up to ₹4,000, plus weekend upskilling batches for working professionals.",
      },
      { property: "og:title", content: "Study Batches | VidyaPath Academy" },
      {
        property: "og:description",
        content: "Class 9–12 batches up to ₹4,000 and weekend batches for working professionals.",
      },
    ],
  }),
  component: BatchesPage,
});

const included = [
  "Live classes with recordings",
  "Chapter-wise printable notes",
  "Previous year paper practice",
  "Weekly tests with rank list",
  "Evening doubt rooms",
  "Mentor progress reviews",
];

function BatchesPage() {
  const school = batches.filter((b) => b.audience === "School");
  const pro = batches.filter((b) => b.audience === "Professional");

  return (
    <>
      <PageHero
        eyebrow="Batches"
        title="Structured batches for every stage of learning"
        description="Every Class 9 to Class 12 batch is priced up to ₹4,000 for the complete session — notes, tests and doubt support included. Professionals get weekend-only schedules."
      >
        <Button asChild variant="accent" size="lg">
          <Link to="/contact">Talk to a counsellor</Link>
        </Button>
      </PageHero>

      <section className="container-page py-16">
        <SectionHeading
          title="School batches (Class 9–12)"
          description="Full-session programmes aligned to CBSE, ICSE and major state boards."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {school.map((b) => (
            <Card key={b.slug} className="card-lift flex h-full flex-col">
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="secondary">{b.grade}</Badge>
                  <span className="text-xs text-muted-foreground">{b.seats}</span>
                </div>
                <CardTitle className="mt-3 text-lg">{b.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {b.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-success" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 grid grid-cols-2 gap-3 rounded-lg bg-muted p-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" /> {b.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="size-3.5" /> {b.starts}
                  </span>
                </div>
                <div className="mt-auto flex items-end justify-between border-t border-border pt-4">
                  <div>
                    <p className="font-display text-2xl font-bold">{inr(b.price)}</p>
                    <p className="text-xs text-muted-foreground line-through">{inr(b.oldPrice)}</p>
                  </div>
                  <Button asChild size="sm">
                    <Link to="/contact">Enrol now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-tint py-16">
        <div className="container-page">
          <SectionHeading
            title="For working professionals"
            description="Weekend-first batches designed around a full-time job, with recordings for every session."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {pro.map((b) => (
              <Card key={b.slug} className="card-lift">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    {b.grade}
                  </Badge>
                  <CardTitle className="mt-3 text-lg">{b.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {b.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-success" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-end justify-between border-t border-border pt-4">
                    <div>
                      <p className="font-display text-2xl font-bold">{inr(b.price)}</p>
                      <p className="text-xs text-muted-foreground">
                        {b.duration} · {b.starts}
                      </p>
                    </div>
                    <Button asChild size="sm">
                      <Link to="/contact">Enrol now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Card className="bg-primary-soft">
              <CardHeader>
                <CardTitle className="text-lg">Included in every batch</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm sm:grid-cols-2">
                  {included.map((i) => (
                    <li key={i} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {i}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                  <Users className="size-4" /> Group discounts available for schools and companies —
                  write to {site.admissionsEmail}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
