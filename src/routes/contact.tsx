import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact VidyaPath Academy — Admissions & Support" },
      {
        name: "description",
        content:
          "Contact VidyaPath Academy for admissions, fees and support. Email vidhyapath.support@edu.in or call +91 48394 24329, Monday to Saturday.",
      },
      { property: "og:title", content: "Contact | VidyaPath Academy" },
      {
        property: "og:description",
        content: "Admissions and support contact details for VidyaPath Academy.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const details = [
    { icon: Mail, label: "Admissions", value: site.admissionsEmail, href: `mailto:${site.admissionsEmail}` },
    { icon: Mail, label: "Support", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Phone", value: site.phoneDisplay, href: site.phoneHref },
    { icon: Clock, label: "Hours", value: site.hours },
    { icon: MapPin, label: "Campus office", value: site.address },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to our admissions team"
        description="Tell us your class or your career goal and we will suggest the right batch, share the fee plan and answer anything about schedules."
      />

      <section className="container-page grid gap-10 py-16 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <SectionHeading title="Send us a message" />
          {sent ? (
            <Card className="mt-8 border-success/40 bg-success/10">
              <CardContent className="flex gap-3 pt-6">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" />
                <div>
                  <p className="font-semibold">Thanks — your message is with us</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    A counsellor will call you back within one working day. For anything urgent,
                    call {site.phoneDisplay}.
                  </p>
                  <Button variant="outline" size="sm" className="mt-4" onClick={() => setSent(false)}>
                    Send another message
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
                  <Label htmlFor="c-name">Full name</Label>
                  <Input id="c-name" required placeholder="Aarav Sharma" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="c-phone">Mobile number</Label>
                  <Input id="c-phone" type="tel" required placeholder="10-digit mobile number" />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="c-email">Email</Label>
                  <Input id="c-email" type="email" required placeholder="you@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="c-topic">I am asking about</Label>
                  <Select>
                    <SelectTrigger id="c-topic">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admission">Batch admission</SelectItem>
                      <SelectItem value="fees">Fees & payment</SelectItem>
                      <SelectItem value="notes">Notes & PYQ access</SelectItem>
                      <SelectItem value="corporate">Corporate / school tie-up</SelectItem>
                      <SelectItem value="other">Something else</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="c-message">Message</Label>
                <Textarea id="c-message" required rows={5} placeholder="How can we help you?" />
              </div>
              <Button type="submit" size="lg" className="w-fit">
                Send message
              </Button>
            </form>
          )}
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardContent className="grid gap-5 pt-6">
              {details.map((d) => (
                <div key={d.label} className="flex gap-3">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <d.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a href={d.href} className="text-sm font-medium hover:underline">
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="mt-6 bg-primary-soft">
            <CardContent className="pt-6">
              <h2 className="font-display text-lg font-bold">Corporate & school tie-ups</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We run customised upskilling cohorts for companies and bulk batches for schools.
                Share your requirement at {site.admissionsEmail} and we will send a proposal within
                two working days.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
