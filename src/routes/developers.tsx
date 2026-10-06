import { createFileRoute } from "@tanstack/react-router";
import { DevelopersPage } from "@/components/marketing/pages";

export const Route = createFileRoute("/developers")({
  head: () => ({ meta: [{ title: "Developers — Kivo" }] }),
  component: DevelopersPage,
});
