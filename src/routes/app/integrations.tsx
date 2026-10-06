import { createFileRoute } from "@tanstack/react-router";
import { IntegrationsPage } from "@/components/app/build";

export const Route = createFileRoute("/app/integrations")({
  head: () => ({ meta: [{ title: "Integrations — Kivo" }] }),
  component: IntegrationsPage,
});
