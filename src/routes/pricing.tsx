import { createFileRoute } from "@tanstack/react-router";
import { PricingPage } from "@/components/marketing/pages";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [{ title: "Pricing — Kivo" }] }),
  component: PricingPage,
});
