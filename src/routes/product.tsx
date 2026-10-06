import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/marketing/pages";

export const Route = createFileRoute("/product")({
  head: () => ({ meta: [{ title: "Product — Kivo" }] }),
  component: ProductPage,
});
