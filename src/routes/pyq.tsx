import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Target, Timer, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { pyqPapers } from "@/lib/site";

export const Route = createFileRoute("/pyq")({
  head: () => ({
    meta: [
      { title: "Previous Year Question Papers (PYQ) with Solutions | VidyaPath Academy" },
      {
        name: "description",
        content:
          "Solved previous year question papers for CBSE, ICSE, state boards, JEE Main and NEET with step-wise solutions and marking schemes.",
      },
      { property: "og:title", content: "Previous Year Papers | VidyaPath Academy" },
      {
        property: "og:description",
        content: "10 years of solved board and competitive exam papers with step-wise solutions.",
      },
    ],
  }),
  component: PyqPage,
});

const tips = [
  {
    icon: Timer,
    title: "Always time yourself",
    text: "Solve one full paper under exam conditions every week. Speed improves faster than accuracy does.",
  },
  {
    icon: Target,
    title: "Track repeated questions",
    text: "Roughly 35% of board questions repeat in pattern. Our solutions tag every recurring question type.",
  },
  {
    icon: TrendingUp,
    title: "Review before you retry",
    text: "Spend twice as long reviewing a paper as you spent solving it, then re-attempt only the wrong ones.",
  },
];

function PyqPage() {
  return (
    <>
      <PageHero
        eyebrow="PYQ"
        title="Previous year papers, fully solved"
        description="Board and competitive exam papers with step-wise solutions, marking schemes and difficulty tags — so you practise exactly the way you will be examined."
      >
        <Button asChild variant="accent" size="lg">
          <Link to="/notes">Revise from notes first</Link>
        </Button>
      </PageHero>

      <section className="container-page py-16">
        <SectionHeading
          title="Paper bank"
          description="Filterable by exam and year inside your dashboard. Every paper ships with a downloadable solution set."
        />
        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Exam</TableHead>
                <TableHead>Years covered</TableHead>
                <TableHead className="text-right">Papers</TableHead>
                <TableHead>Solutions</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pyqPapers.map((p) => (
                <TableRow key={p.exam}>
                  <TableCell className="font-medium">{p.exam}</TableCell>
                  <TableCell className="text-muted-foreground">{p.years}</TableCell>
                  <TableCell className="text-right">{p.papers}</TableCell>
                  <TableCell className="text-muted-foreground">{p.solution}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Download className="size-4" /> Get
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="section-tint py-16">
        <div className="container-page">
          <SectionHeading align="center" title="How to practise previous year papers" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {tips.map((t) => (
              <Card key={t.title} className="h-full">
                <CardHeader>
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent-foreground">
                    <t.icon className="size-5" />
                  </span>
                  <CardTitle className="mt-4 text-lg">{t.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
