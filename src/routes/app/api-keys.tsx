import { createFileRoute } from "@tanstack/react-router";
import { KeysPage } from "@/components/app/ops";

export const Route = createFileRoute("/app/api-keys")({
  head: () => ({ meta: [{ title: "API keys — Kivo" }] }),
  component: KeysPage,
});
