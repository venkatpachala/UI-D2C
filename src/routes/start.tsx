import { createFileRoute } from "@tanstack/react-router";
import { Onboarding } from "@/components/app/start";

export const Route = createFileRoute("/start")({
  head: () => ({ meta: [{ title: "Set up Kivo" }] }),
  component: Onboarding,
});
