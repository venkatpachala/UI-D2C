import { createFileRoute } from "@tanstack/react-router";
import { DeploymentsPage } from "@/components/app/ops";

export const Route = createFileRoute("/app/deployments")({
  head: () => ({ meta: [{ title: "Deployments — Kivo" }] }),
  component: DeploymentsPage,
});
