import { createFileRoute } from "@tanstack/react-router";
import { EvaluationsPage } from "@/components/app/ops";

export const Route = createFileRoute("/app/evaluations")({
  head: () => ({ meta: [{ title: "Evaluations — Kivo" }] }),
  component: EvaluationsPage,
});
