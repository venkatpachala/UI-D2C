import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md";
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-transform duration-150 ease-out",
        "active:not-disabled:scale-[0.96] disabled:cursor-not-allowed disabled:opacity-40",
        size === "md" ? "h-10 px-3.5 text-sm" : "h-8 px-2.5 text-xs",
        variant === "primary" && "bg-accent text-bg hover:bg-accent-2",
        variant === "secondary" && "bg-elevated text-fg hairline hover:bg-card",
        variant === "ghost" && "bg-transparent text-secondary hover:bg-elevated hover:text-fg",
        variant === "danger" && "bg-danger-dim text-danger hairline",
        className,
      )}
      {...props}
    />
  );
}

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "live" | "warn" | "danger" | "accent";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium tracking-wide uppercase",
        tone === "neutral" && "bg-elevated text-secondary hairline",
        tone === "live" && "bg-success-dim text-success",
        tone === "warn" && "bg-warning-dim text-warning",
        tone === "danger" && "bg-danger-dim text-danger",
        tone === "accent" && "bg-elevated text-fg hairline",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function StatusDot({ tone = "live" }: { tone?: "live" | "warn" | "danger" | "muted" }) {
  return (
    <span
      className={cn(
        "size-1.5 rounded-full",
        tone === "live" && "bg-success pulse-dot",
        tone === "warn" && "bg-warning",
        tone === "danger" && "bg-danger",
        tone === "muted" && "bg-muted",
      )}
      aria-hidden="true"
    />
  );
}

export function Panel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg border border-line bg-card", className)}>{children}</div>
  );
}

export function Metric({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-lg border border-line bg-card p-4">
      <div className="text-xs text-muted">{label}</div>
      <div className="mt-2 text-2xl font-medium tracking-tight tabular">{value}</div>
      {hint ? <div className="mt-1 text-xs text-secondary">{hint}</div> : null}
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="text-xs font-medium track-label text-muted uppercase">{children}</div>
  );
}
