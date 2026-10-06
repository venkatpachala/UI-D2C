import { createFileRoute } from "@tanstack/react-router";
import { Playground } from "@/components/app/ops";

export const Route = createFileRoute("/app/playground")({
  head: () => ({ meta: [{ title: "Playground — Kivo" }] }),
  component: Playground,
});
