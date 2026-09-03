import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { nav, site } from "@/lib/site";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt={`${site.name} logo`}
              width={40}
              height={40}
              loading="lazy"
              className="h-9 w-9"
            />
            <span className="font-display text-lg font-bold">{site.name}</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            {site.tagline} Live classes, structured notes, previous year papers and daily doubt
            support for Class 9–12 students, college learners and working professionals.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">{site.hours}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted-foreground hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">Reach us</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" />
              <a className="hover:text-foreground" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" />
              <a className="hover:text-foreground" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Made for students, parents and working professionals across India.</p>
        </div>
      </div>
    </footer>
  );
}
