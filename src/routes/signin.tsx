import { createFileRoute } from "@tanstack/react-router";
import { SignInPage } from "@/components/app/start";

export const Route = createFileRoute("/signin")({
  head: () => ({ meta: [{ title: "Sign in — Kivo" }] }),
  component: SignInPage,
});
