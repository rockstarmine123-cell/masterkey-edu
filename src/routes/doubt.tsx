import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, MessageCircleQuestion, Video } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { site } from "@/lib/site";
import posterDoubt from "@/assets/poster-doubt.jpg";

export const Route = createFileRoute("/doubt")({
  head: () => ({
    meta: [
      { title: "Doubt Solving Support for Students | VidyaPath Academy" },
      {
        name: "description",
        content:
          "Post a doubt and get a mentor answer within 30 minutes, or join live evening doubt rooms from 6 PM to 9 PM, six days a week.",
      },
      { property: "og:title", content: "Doubt Section | VidyaPath Academy" },
      {
        property: "og:description",
        content: "Mentor replies within 30 minutes and daily live doubt rooms for every subject.",
      },
    ],
  }),
  component: DoubtPage,
});

const channels = [
  {
    icon: MessageCircleQuestion,
    title: "Text doubts",
    text: "Type your question, attach a photo of the sum, and get a written solution within 30 minutes.",
  },
  {
    icon: Video,
    title: "Live doubt rooms",
    text: "Join a subject room every evening, 6 PM to 9 PM, and share your screen with a mentor.",
  },
  {
    icon: Clock,
    title: "Priority window",
    text: "Batch students get a 10-minute priority queue during the week before every exam.",
  },
];

const recent = [
  {
    subject: "Physics · Class 12",
    q: "Why does the current lag the voltage in a purely inductive AC circuit?",
    answered: "Answered in 12 min",
  },
  {
    subject: "Maths · Class 10",
    q: "How do I decide which method to use for a quadratic word problem?",
    answered: "Answered in 8 min",
  },
  {
    subject: "Analytics · Professionals",
    q: "When should I use a pivot table instead of SUMIFS in a monthly report?",
    answered: "Answered in 21 min",
  },
];

function DoubtPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Doubt section"
        title="Never stay stuck on one question"
        description="Ask anything from any chapter. Our subject mentors reply fast, in plain language, with the full working shown step by step."
      />

      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionHeading
              title="Post your doubt"
              description="Fill in the details below. You will get a reply on your email and inside your dashboard."
            />
            {sent ? (
              <Card className="mt-8 border-success/40 bg-success/10">
                <CardContent className="flex gap-3 pt-6">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" />
                  <div>
                    <p className="font-semibold">Doubt received</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      A mentor will reply within 30 minutes during support hours ({site.hours}). For
                      anything urgent, call {site.phoneDisplay}.
                    </p>
                    <Button variant="outline" size="sm" className="mt-4" onClick={() => setSent(false)}>
                      Ask another doubt
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <form
                className="mt-8 grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="doubt-name">Full name</Label>
                    <Input id="doubt-name" required placeholder="Aarav Sharma" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="doubt-email">Email</Label>
                    <Input id="doubt-email" type="email" required placeholder="you@example.com" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="doubt-class">Class / track</Label>
                    <Select>
                      <SelectTrigger id="doubt-class">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9">Class 9</SelectItem>
                        <SelectItem value="10">Class 10</SelectItem>
                        <SelectItem value="11">Class 11</SelectItem>
                        <SelectItem value="12">Class 12</SelectItem>
                        <SelectItem value="pro">Working professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="doubt-subject">Subject & chapter</Label>
                    <Input id="doubt-subject" required placeholder="Physics · Current Electricity" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="doubt-text">Your doubt</Label>
                  <Textarea
                    id="doubt-text"
                    required
                    rows={5}
                    placeholder="Describe where exactly you got stuck..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-fit">
                  Submit doubt
                </Button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2">
            <img
              src={posterDoubt}
              alt="Poster of an online class with doubt-solving chat bubbles"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-2xl border border-border"
            />
            <div className="mt-6 grid gap-4">
              {channels.map((c) => (
                <Card key={c.title}>
                  <CardContent className="flex gap-3 pt-6">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                      <c.icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold">{c.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-tint py-16">
        <div className="container-page">
          <SectionHeading title="Recently solved doubts" />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {recent.map((r) => (
              <Card key={r.q} className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-muted-foreground">{r.subject}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium leading-relaxed">{r.q}</p>
                  <p className="mt-3 text-xs font-semibold text-success">{r.answered}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
