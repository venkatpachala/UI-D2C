import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type TraceStep = { id: string; label: string; meta: string };

export function useCursor(length: number, ms = 780) {
  const [cursor, setCursor] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => {
      setCursor((c) => (c + 1) % (length + 3));
    }, ms);
    return () => window.clearInterval(id);
  }, [length, ms]);
  return Math.min(cursor, length - 1);
}

export function Trace({
  steps,
  cursor,
  className,
}: {
  steps: TraceStep[];
  cursor: number;
  className?: string;
}) {
  return (
    <ol className={cn("m-0 list-none p-0", className)}>
      {steps.map((step, i) => {
        const on = i <= cursor;
        const current = i === cursor;
        return (
          <li key={step.id} className="grid grid-cols-[14px_1fr] gap-3">
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "mt-1.5 size-1.5 rounded-full",
                  on ? "bg-success" : "bg-line-strong",
                  current && "pulse-dot",
                )}
              />
              {i < steps.length - 1 ? (
                <span className={cn("my-1 w-px flex-1", i < cursor ? "bg-success/50" : "bg-line")} />
              ) : null}
            </div>
            <div
              className={cn(
                "flex min-w-0 flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5 pb-3 text-sm",
                on ? "text-fg" : "text-muted",
              )}
            >
              <span className="min-w-0">{step.label}</span>
              <span className="shrink-0 font-mono text-xs text-muted">{step.meta}</span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function WindowChrome({
  title,
  right,
  children,
  className,
  bodyClassName,
}: {
  title: string;
  right?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-line-strong bg-bg-2 shadow-lift",
        className,
      )}
    >
      <div className="flex h-11 items-center justify-between gap-3 border-b border-line px-3">
        <div className="flex min-w-0 items-center gap-2 text-sm">
          <span className="size-1.5 shrink-0 rounded-full bg-success pulse-dot" aria-hidden="true" />
          <span className="truncate">{title}</span>
        </div>
        <div className="shrink-0 text-xs text-muted">{right}</div>
      </div>
      <div className={cn("p-4", bodyClassName)}>{children}</div>
    </div>
  );
}
