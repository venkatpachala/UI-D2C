import { createFileRoute } from "@tanstack/react-router";
import { ConversationsPage } from "@/components/app/ops";

export const Route = createFileRoute("/app/conversations")({
  head: () => ({ meta: [{ title: "Conversations — Kivo" }] }),
  component: ConversationsPage,
});
