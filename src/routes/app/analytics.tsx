import { createFileRoute } from "@tanstack/react-router";
import { AnalyticsPage } from "@/components/app/ops";

export const Route = createFileRoute("/app/analytics")({
  head: () => ({ meta: [{ title: "Analytics — Kivo" }] }),
  component: AnalyticsPage,
});
