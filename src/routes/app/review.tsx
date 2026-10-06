import { createFileRoute } from "@tanstack/react-router";
import { ReviewPage } from "@/components/app/ops";

export const Route = createFileRoute("/app/review")({
  head: () => ({ meta: [{ title: "Review — Kivo" }] }),
  component: ReviewPage,
});
