import { createFileRoute } from "@tanstack/react-router";
import { DocsPage } from "@/components/marketing/pages";

export const Route = createFileRoute("/docs")({
  head: () => ({ meta: [{ title: "Docs — Kivo" }] }),
  component: DocsPage,
});
