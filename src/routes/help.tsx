import { createFileRoute, Link } from "@tanstack/react-router";
import { CreditCard, Headphones, Mail, Phone, PlayCircle, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { faqs, site } from "@/lib/site";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help Centre — Enrolment, Payments & Classes | VidyaPath Academy" },
      {
        name: "description",
        content:
          "Answers on enrolment, fees, refunds, class access and technical issues, plus phone and email support for VidyaPath Academy learners.",
      },
      { property: "og:title", content: "Help Centre | VidyaPath Academy" },
      {
        property: "og:description",
        content: "Enrolment, payment, refund and class-access help for students and professionals.",
      },
    ],
  }),
  component: HelpPage,
});

const topics = [
  {
    icon: CreditCard,
    title: "Fees & payments",
    text: "UPI, cards, net banking and no-cost EMI on batches above ₹3,000.",
  },
  {
    icon: PlayCircle,
    title: "Classes & recordings",
    text: "Join links appear 15 minutes early; recordings upload within two hours.",
  },
  {
    icon: ShieldCheck,
    title: "Refunds & transfers",
    text: "Full refund within 7 days of enrolment, or a free transfer to another batch.",
  },
  {
    icon: Headphones,
    title: "Technical support",
    text: "Login, video playback and download issues resolved within one working day.",
  },
];

function HelpPage() {
  return (
    <>
      <PageHero
        eyebrow="Help section"
        title="Help centre"
        description="Straight answers about enrolment, fees, classes and refunds. If something is still unclear, our support team is one call or one email away."
      >
        <Button asChild variant="onDark" size="lg">
          <a href={`mailto:${site.email}`}>Email {site.email}</a>
        </Button>
        <Button asChild variant="outlineOnDark" size="lg">
          <a href={site.phoneHref}>Call {site.phoneDisplay}</a>
        </Button>
      </PageHero>

      <section className="container-page py-16">
        <SectionHeading align="center" title="Popular help topics" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((t) => (
            <Card key={t.title} className="card-lift h-full">
              <CardHeader>
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
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
      </section>

      <section className="section-tint py-16">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div>
            <SectionHeading
              title="Frequently asked questions"
              description="The questions students, parents and professionals ask us most often."
            />
            <Card className="mt-8">
              <CardContent className="grid gap-3 pt-6 text-sm">
                <p className="flex items-center gap-2">
                  <Mail className="size-4 text-primary" />
                  <a className="hover:underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="size-4 text-primary" />
                  <a className="hover:underline" href={site.phoneHref}>
                    {site.phoneDisplay}
                  </a>
                </p>
                <p className="text-muted-foreground">{site.hours}</p>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="rounded-xl border border-border bg-card px-5">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="mt-6 text-sm text-muted-foreground">
              Still need help?{" "}
              <Link to="/contact" className="font-semibold text-primary hover:underline">
                Send us a message
              </Link>{" "}
              and we will get back within one working day.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
