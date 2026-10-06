import { createFileRoute } from "@tanstack/react-router";
import { AgentsPage } from "@/components/app/build";

export const Route = createFileRoute("/app/agents")({
  head: () => ({ meta: [{ title: "Agents — Kivo" }] }),
  component: AgentsPage,
});
