import { createFileRoute } from "@tanstack/react-router";
import { PlatformPage } from "@/components/marketing/pages";

export const Route = createFileRoute("/platform")({
  head: () => ({ meta: [{ title: "Platform — Kivo" }] }),
  component: PlatformPage,
});
