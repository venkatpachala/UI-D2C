import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";

const links = [
  { to: "/product", label: "Product" },
  { to: "/platform", label: "Platform" },
  { to: "/solutions", label: "Solutions" },
  { to: "/developers", label: "Developers" },
  { to: "/pricing", label: "Pricing" },
  { to: "/docs", label: "Docs" },
] as const;

export function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-200",
        solid || open ? "border-b border-line bg-bg/80 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-5">
        <Logo />
        <nav className="hidden items-center gap-0.5 desk:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-md px-2.5 py-1.5 text-sm text-secondary hover:text-fg"
              activeProps={{ className: "text-fg" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 desk:flex">
          <Link to="/signin" className="px-2.5 py-1.5 text-sm text-secondary hover:text-fg">
            Sign in
          </Link>
          <Link to="/start">
            <Button size="sm" className="rounded-full px-3.5">
              Start building
            </Button>
          </Link>
        </div>
        <button
          className="grid size-11 place-items-center rounded-md text-fg desk:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <div className="fixed inset-x-0 top-14 bottom-0 z-30 overflow-auto border-t border-line bg-bg px-5 py-6 desk:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="display border-b border-line py-4 text-3xl text-fg"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/signin" className="display py-4 text-3xl" onClick={() => setOpen(false)}>
              Sign in
            </Link>
            <Link to="/start" onClick={() => setOpen(false)} className="mt-4">
              <Button className="w-full rounded-full">Start building</Button>
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-secondary">
            AI customer operations infrastructure for commerce brands.
          </p>
        </div>
        <FooterCol
          title="Product"
          items={[
            ["/product", "Agents"],
            ["/platform", "Platform"],
            ["/pricing", "Pricing"],
            ["/solutions", "Solutions"],
          ]}
        />
        <FooterCol
          title="Developers"
          items={[
            ["/developers", "API"],
            ["/docs", "Docs"],
            ["/app/playground", "Playground"],
            ["/app/api-keys", "API keys"],
          ]}
        />
        <div>
          <div className="text-xs font-medium track-label text-muted uppercase">Kernel</div>
          <a
            className="mt-3 block text-sm text-secondary hover:text-fg"
            href="https://github.com/venkatpachala/AI-Customer-Support-"
          >
            Agent runtime
          </a>
          <Link to="/docs" className="mt-2 block text-sm text-secondary hover:text-fg">
            Release gate
          </Link>
          <Link to="/start" className="mt-2 block text-sm text-secondary hover:text-fg">
            Open a workspace
          </Link>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 text-xs text-muted">
          <span>Kivo · Hosted infrastructure for AI customer operations</span>
          <span>Policy-aware · API-first</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <div className="text-xs font-medium track-label text-muted uppercase">{title}</div>
      <ul className="mt-3 space-y-2">
        {items.map(([to, label]) => (
          <li key={to}>
            <Link to={to} className="text-sm text-secondary hover:text-fg">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MarketingFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="mx-auto max-w-6xl px-5 pt-28 pb-10">
      <div className="text-xs font-medium track-label text-muted uppercase">{eyebrow}</div>
      <h1 className="page-title mt-4 max-w-3xl text-balance">{title}</h1>
      <p className="mt-4 max-w-xl text-sm leading-6 text-secondary sm:text-base">{lede}</p>
    </header>
  );
}
