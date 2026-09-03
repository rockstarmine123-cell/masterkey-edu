import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/site";
import logo from "@/assets/logo.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logo} alt={`${site.name} logo`} width={40} height={40} className="h-9 w-9" />
          <span className="font-display text-lg font-bold leading-none tracking-tight">
            VidyaPath
            <span className="block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Academy
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "bg-primary-soft text-primary font-semibold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <Phone className="size-4" /> {site.phoneDisplay}
          </a>
          <Button asChild variant="accent" size="sm">
            <Link to="/batches">Join a batch</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-border lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page grid gap-1 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                activeProps={{ className: "bg-primary-soft text-primary font-semibold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="accent" className="mt-2">
              <Link to="/batches" onClick={() => setOpen(false)}>
                Join a batch
              </Link>
            </Button>
            <a
              href={site.phoneHref}
              className="mt-1 flex items-center justify-center gap-2 py-2 text-sm text-muted-foreground"
            >
              <Phone className="size-4" /> {site.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
