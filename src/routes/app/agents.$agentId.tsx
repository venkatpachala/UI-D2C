import { createFileRoute } from "@tanstack/react-router";
import { AgentDetail } from "@/components/app/build";

export const Route = createFileRoute("/app/agents/$agentId")({
  head: () => ({ meta: [{ title: "Agent — Kivo" }] }),
  component: AgentRoute,
});

function AgentRoute() {
  const { agentId } = Route.useParams();
  return <AgentDetail agentId={agentId} />;
}
