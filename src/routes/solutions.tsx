import { createFileRoute } from "@tanstack/react-router";
import { SolutionsPage } from "@/components/marketing/pages";

export const Route = createFileRoute("/solutions")({
  head: () => ({ meta: [{ title: "Solutions — Kivo" }] }),
  component: SolutionsPage,
});
