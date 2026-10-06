import { createFileRoute } from "@tanstack/react-router";
import { Overview } from "@/components/app/build";

export const Route = createFileRoute("/app/")({
  head: () => ({ meta: [{ title: "Overview — Kivo" }] }),
  component: Overview,
});
