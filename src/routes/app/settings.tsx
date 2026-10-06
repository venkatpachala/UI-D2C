import { createFileRoute } from "@tanstack/react-router";
import { SettingsPage } from "@/components/app/ops";

export const Route = createFileRoute("/app/settings")({
  head: () => ({ meta: [{ title: "Settings — Kivo" }] }),
  component: SettingsPage,
});
