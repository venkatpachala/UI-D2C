import { createFileRoute } from "@tanstack/react-router";
import { KnowledgePage } from "@/components/app/build";

export const Route = createFileRoute("/app/knowledge")({
  head: () => ({ meta: [{ title: "Knowledge — Kivo" }] }),
  component: KnowledgePage,
});
