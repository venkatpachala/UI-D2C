import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/cn";

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-5", className)} aria-hidden="true">
      <rect x="3" y="3" width="4.2" height="18" rx="1" fill="currentColor" />
      <path
        d="M9.2 12.2 19.5 4.2c.5-.4 1.2 0 1.1.6L18.2 12l2.4 7.2c.2.6-.6 1-1.1.6L9.2 12.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Logo({ to = "/", className }: { to?: string; className?: string }) {
  return (
    <Link to={to} className={cn("inline-flex items-center gap-2 text-fg", className)}>
      <span className="grid size-7 place-items-center rounded-md bg-fg text-bg">
        <Mark className="size-4" />
      </span>
      <span className="display text-sm track-brand">KIVO</span>
    </Link>
  );
}
