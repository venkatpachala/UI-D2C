import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Plus } from "lucide-react";
import { Badge, Button, Metric, StatusDot } from "@/components/ui";
import { actions, conversations, integrations, type ToolAction } from "@/lib/data";
import { useKivo, workspaces } from "@/lib/store";
import { cn } from "@/lib/cn";

export function Overview() {
  const workspaceId = useKivo((s) => s.workspaceId);
  const agents = useKivo((s) => s.agents);
  const ws = workspaces[workspaceId];
  const [greet, setGreet] = useState("Hello");
  useEffect(() => {
    const h = new Date().getHours();
    setGreet(h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening");
  }, []);
  const recent = conversations.slice(0, 4);
  return (
    <div>
      <h1 className="text-2xl font-medium tracking-tight">{greet}.</h1>
      <p className="mt-1 text-sm text-secondary">Here's how your AI team is performing.</p>
      {workspaceId === "northstar" ? (
        <p className="mt-3 rounded-md border border-line bg-elevated px-3 py-2 text-sm text-secondary">
          Northstar Home is a sandbox workspace. Live charges stay off.
        </p>
      ) : null}
      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Metric label="Resolution rate" value={ws.resolution} hint="Last 7 days" />
        <Metric label="Conversations" value={ws.conversations} hint="This week" />
        <Metric label="Escalations" value={ws.escalations} hint="Sent to a person" />
        <Metric label="P95 latency" value="1.9s" hint="Production" />
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-medium">AI agents</h2>
            <Link to="/app/agents" className="text-xs text-secondary hover:text-fg">
              View all
            </Link>
          </div>
          <div className="space-y-2">
            {agents.map((agent) => (
              <Link
                key={agent.id}
                to="/app/agents/$agentId"
                params={{ agentId: agent.id }}
                className="flex items-center justify-between rounded-lg border border-line bg-card px-4 py-3 hover:border-line-strong"
              >
                <div>
                  <div className="text-sm">{agent.name}</div>
                  <div className="text-xs text-muted">{agent.summary}</div>
                </div>
                <Badge tone={agent.status === "live" ? "live" : agent.status === "review" ? "warn" : "neutral"}>
                  <StatusDot tone={agent.status === "live" ? "live" : agent.status === "review" ? "warn" : "muted"} />
                  {agent.status}
                </Badge>
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h2 className="mb-3 text-sm font-medium">Recent conversations</h2>
          <div className="overflow-hidden rounded-lg border border-line">
            {recent.map((row) => (
              <Link
                key={row.id}
                to="/app/conversations"
                className="flex items-center justify-between border-b border-line px-4 py-3 text-sm last:border-b-0 hover:bg-elevated"
              >
                <span>
                  <span className="block">{row.customer}</span>
                  <span className="text-xs text-muted">{row.intent}</span>
                </span>
                <span className="text-xs text-secondary">{row.outcome}</span>
              </Link>
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-line bg-card p-4">
            <div className="text-xs text-muted">Production health</div>
            <div className="mt-2 flex items-center gap-2 text-sm">
              <StatusDot />
              support-agent@v14 · Healthy
            </div>
            <div className="mt-1 font-mono text-xs text-muted">api.kivo.ai/v1/agents/support</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export function AgentsPage() {
  const agents = useKivo((s) => s.agents);
  const addAgent = useKivo((s) => s.addAgent);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("Orders Agent");
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-medium tracking-tight">Your AI workforce</h1>
          <p className="mt-1 text-sm text-secondary">Agents for AuraSkin. Each one has its own actions and limits.</p>
        </div>
        <Button onClick={() => setOpen(true)}>
          <Plus className="size-4" />
          Create agent
        </Button>
      </div>
      <div className="mt-6 grid gap-3 lg:grid-cols-3">
        {agents.map((agent) => (
          <Link
            key={agent.id}
            to="/app/agents/$agentId"
            params={{ agentId: agent.id }}
            className="rounded-lg border border-line bg-card p-4 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{agent.name}</h2>
              <Badge tone={agent.status === "live" ? "live" : "warn"}>{agent.status}</Badge>
            </div>
            <p className="mt-2 min-h-10 text-sm text-secondary">{agent.summary}</p>
            <div className="mt-4 flex gap-6 text-sm">
              <div>
                <div className="text-xs text-muted">Resolution</div>
                <div className="tabular">{agent.resolution}%</div>
              </div>
              <div>
                <div className="text-xs text-muted">Requests</div>
                <div className="tabular">{agent.requests}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" role="dialog" aria-modal="true" aria-labelledby="new-agent">
          <form
            className="w-full max-w-md rounded-lg border border-line bg-card p-5"
            onSubmit={(e) => {
              e.preventDefault();
              const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "agent";
              addAgent({
                id,
                name,
                status: "draft",
                summary: "New agent. Configure actions before it can deploy.",
                resolution: 0,
                requests: "0",
                environment: "Sandbox",
                version: "v1",
                p95: "—",
                health: "Review",
                channels: ["Web"],
                role: `You are ${name} for AuraSkin. Use only approved actions and published policies.`,
              });
              setOpen(false);
              toast("Agent created in sandbox");
            }}
          >
            <h2 id="new-agent" className="text-lg font-medium">
              Create agent
            </h2>
            <label className="mt-4 block text-xs text-muted" htmlFor="agent-name">
              Name
            </label>
            <input
              id="agent-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 h-10 w-full rounded-md border border-line bg-bg px-3 text-sm outline-none"
            />
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Create</Button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}

const tabs = ["Overview", "Instructions", "Knowledge", "Actions", "Policies", "Guardrails", "Evaluations", "Versions"] as const;

export function AgentDetail({ agentId }: { agentId: string }) {
  const agents = useKivo((s) => s.agents);
  const agent = agents.find((a) => a.id === agentId) ?? agents[0];
  const [tab, setTab] = useState<(typeof tabs)[number]>("Overview");
  const [action, setAction] = useState<ToolAction | null>(null);
  const [role, setRole] = useState(agent?.role ?? "");
  const [friendly, setFriendly] = useState(35);
  const [concise, setConcise] = useState(40);
  const [langs, setLangs] = useState<string[]>(["English"]);

  useEffect(() => {
    setRole(agent?.role ?? "");
    setTab("Overview");
  }, [agent?.id, agent?.role]);

  if (!agent) {
    return <p className="text-secondary">That agent is not in this workspace.</p>;
  }

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-medium tracking-tight">{agent.name}</h1>
            <Badge tone="accent">{agent.environment}</Badge>
            <Badge tone={agent.health === "Healthy" ? "live" : "warn"}>
              <StatusDot tone={agent.health === "Healthy" ? "live" : "warn"} />
              {agent.health}
            </Badge>
          </div>
          <p className="mt-1 font-mono text-xs text-muted">
            {agent.version} · P95 {agent.p95}
          </p>
        </div>
        <div className="flex gap-2">
          <Link to="/app/playground">
            <Button variant="secondary" size="sm">
              Test
            </Button>
          </Link>
          <Link to="/app/deployments">
            <Button size="sm">Deploy</Button>
          </Link>
        </div>
      </div>
      <div className="mt-5 flex gap-1 overflow-x-auto border-b border-line" role="tablist" aria-label="Agent sections">
        {tabs.map((item) => (
          <button
            key={item}
            role="tab"
            aria-selected={tab === item}
            className={cn(
              "h-10 shrink-0 border-b px-3 text-sm",
              tab === item ? "border-fg text-fg" : "border-transparent text-secondary",
            )}
            onClick={() => setTab(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-5">
        {tab === "Overview" ? (
          <div className="grid gap-3 sm:grid-cols-3">
            <Metric label="Resolution" value={`${agent.resolution}%`} />
            <Metric label="Requests" value={agent.requests} />
            <Metric label="Channels" value={String(agent.channels.length)} hint={agent.channels.join(" · ")} />
          </div>
        ) : null}
        {tab === "Instructions" ? (
          <div className="max-w-2xl space-y-5">
            <label className="block">
              <span className="text-xs text-muted">Role</span>
              <textarea
                value={role}
                onChange={(e) => setRole(e.target.value)}
                rows={5}
                className="mt-1 w-full rounded-md border border-line bg-card p-3 text-sm outline-none"
              />
            </label>
            <Slider label="Personality" left="Friendly" right="Professional" value={friendly} onChange={setFriendly} />
            <Slider label="Length" left="Concise" right="Detailed" value={concise} onChange={setConcise} />
            <div>
              <div className="text-xs text-muted">Language</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {["English", "Hindi", "Telugu"].map((lang) => {
                  const on = langs.includes(lang);
                  return (
                    <button
                      key={lang}
                      className={cn(
                        "h-8 rounded-md border px-3 text-sm",
                        on ? "border-line-strong bg-elevated text-fg" : "border-line text-secondary",
                      )}
                      aria-pressed={on}
                      onClick={() =>
                        setLangs((curr) => (curr.includes(lang) ? curr.filter((l) => l !== lang) : [...curr, lang]))
                      }
                    >
                      {lang}
                    </button>
                  );
                })}
              </div>
            </div>
            <details className="rounded-md border border-line px-3 py-2 text-sm">
              <summary className="cursor-pointer text-secondary">Advanced model routing</summary>
              <p className="mt-2 text-secondary">
                Kivo routes the request. This workspace uses the hosted production profile. You don't pick a model to ship an agent.
              </p>
            </details>
            <Button
              size="sm"
              onClick={() => toast("Instructions saved on this draft")}
            >
              Save draft
            </Button>
          </div>
        ) : null}
        {tab === "Knowledge" ? <KnowledgeList compact /> : null}
        {tab === "Actions" ? (
          <ActionList onOpen={setAction} />
        ) : null}
        {tab === "Policies" ? <PolicyPanel /> : null}
        {tab === "Guardrails" ? <Guardrails /> : null}
        {tab === "Evaluations" ? (
          <p className="text-sm text-secondary">
            Latest gate on {agent.version}: production is serving a passing build. Open{" "}
            <Link to="/app/evaluations" className="text-fg underline">
              evaluations
            </Link>{" "}
            to inspect the blocked draft.
          </p>
        ) : null}
        {tab === "Versions" ? <Versions /> : null}
      </div>
      {action ? <ActionDrawer action={action} onClose={() => setAction(null)} /> : null}
    </div>
  );
}

function Slider({
  label,
  left,
  right,
  value,
  onChange,
}: {
  label: string;
  left: string;
  right: string;
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <span className="text-xs text-muted">{label}</span>
      <div className="mt-2 flex items-center gap-3 text-xs text-secondary">
        <span>{left}</span>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 accent-[var(--color-accent)]"
          aria-label={label}
        />
        <span>{right}</span>
      </div>
    </label>
  );
}

function ActionList({ onOpen }: { onOpen: (a: ToolAction) => void }) {
  const groups = ["Shopify", "Stripe", "Gmail"] as const;
  return (
    <div className="space-y-5">
      {groups.map((group) => (
        <section key={group}>
          <h3 className="text-xs font-medium track-label text-muted uppercase">{group}</h3>
          <ul className="mt-2 divide-y divide-line rounded-lg border border-line">
            {actions
              .filter((a) => a.integration === group)
              .map((action) => (
                <li key={action.id}>
                  <button
                    className="flex w-full items-center justify-between px-3 py-3 text-left text-sm hover:bg-elevated"
                    onClick={() => onOpen(action)}
                  >
                    <span className="font-mono text-xs">{action.name}</span>
                    <Badge tone={action.state === "enabled" ? "live" : action.state === "approval" ? "warn" : "neutral"}>
                      {action.state === "enabled" ? "Enabled" : action.state === "approval" ? "Approval required" : "Off"}
                    </Badge>
                  </button>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function ActionDrawer({ action, onClose }: { action: ToolAction; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const rows = [
    ["Description", action.description],
    ["Parameters", action.params.join(", ")],
    ["Permission", action.permission],
    ["Approval", action.approval],
    ["Timeout", action.timeout],
    ["Retries", action.retries],
    ["Audit logging", action.audit],
  ];
  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby="action-title">
      <button className="absolute inset-0 bg-black/50" aria-label="Close action" onClick={onClose} />
      <aside className="absolute top-0 right-0 h-full w-full max-w-md overflow-auto border-l border-line bg-bg-2 p-6">
        <div className="text-xs text-muted">{action.integration}</div>
        <h2 id="action-title" className="mt-1 font-mono text-lg">
          {action.name}
        </h2>
        <dl className="mt-5 space-y-3">
          {rows.map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs text-muted">{k}</dt>
              <dd className="mt-1 text-sm">{v}</dd>
            </div>
          ))}
        </dl>
        <Button className="mt-6" variant="secondary" onClick={onClose}>
          Close
        </Button>
      </aside>
    </div>
  );
}

function PolicyPanel() {
  return (
    <div className="max-w-lg rounded-lg border border-line bg-card p-4">
      <h3 className="text-sm font-medium">Refund policy</h3>
      <ul className="mt-3 divide-y divide-line text-sm">
        <li className="flex justify-between py-2">
          <span>Under ₹1,000</span>
          <span className="text-success">AI may execute</span>
        </li>
        <li className="flex justify-between py-2">
          <span>₹1,000 – ₹5,000</span>
          <span className="text-warning">Human approval</span>
        </li>
        <li className="flex justify-between py-2">
          <span>Above ₹5,000</span>
          <span className="text-danger">Blocked</span>
        </li>
      </ul>
      <p className="mt-3 text-xs text-muted">Customer verification, eligibility and policy evidence are required.</p>
    </div>
  );
}

function Guardrails() {
  const items = [
    ["Input guard", "Blocks prompt injection and out-of-scope requests."],
    ["PII", "Card numbers and secrets are stripped before they are stored."],
    ["Verified customer", "Refunds and cancellations require a matched identity."],
    ["Output guard", "Stops invented tracking events and unapproved refund claims."],
  ];
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {items.map(([title, text]) => (
        <li key={title} className="rounded-lg border border-line bg-card p-4">
          <div className="text-sm">{title}</div>
          <p className="mt-1 text-sm text-secondary">{text}</p>
        </li>
      ))}
    </ul>
  );
}

function Versions() {
  return (
    <ul className="max-w-lg divide-y divide-line rounded-lg border border-line">
      {[
        ["v14", "Production", "Healthy"],
        ["v15", "Draft", "Blocked · REFUND_LIMIT"],
        ["v13", "Previous", "Rollback target"],
      ].map(([v, env, note]) => (
        <li key={v} className="flex items-center justify-between px-4 py-3 text-sm">
          <span className="font-mono">{v}</span>
          <span className="text-secondary">{env}</span>
          <span className="text-xs text-muted">{note}</span>
        </li>
      ))}
    </ul>
  );
}

export function KnowledgePage() {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-medium tracking-tight">Knowledge</h1>
          <p className="mt-1 text-sm text-secondary">Everything your agents know about your business.</p>
        </div>
        <AddKnowledge />
      </div>
      <div className="mt-6">
        <KnowledgeList />
      </div>
    </div>
  );
}

function KnowledgeList({ compact = false }: { compact?: boolean }) {
  const sources = useKivo((s) => s.sources);
  return (
    <div className={cn("grid gap-3", compact ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3")}>
      {sources.map((source) => (
        <article key={source.id} className="rounded-lg border border-line bg-card p-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-sm font-medium">{source.name}</h3>
            <Badge tone={source.status === "Indexing" ? "warn" : "live"}>{source.status}</Badge>
          </div>
          <div className="mt-3 flex justify-between text-xs text-muted">
            <span>{source.kind}</span>
            <span>{source.detail}</span>
          </div>
          <div className="mt-1 text-xs text-muted">Updated {source.updated}</div>
        </article>
      ))}
    </div>
  );
}

function AddKnowledge() {
  const addSource = useKivo((s) => s.addSource);
  const [open, setOpen] = useState(false);
  const options = ["Upload files", "Website", "URL", "Notion", "Google Drive", "Help Center", "Manual text"];
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Plus className="size-4" />
        Add knowledge
      </Button>
      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center p-4" role="dialog" aria-modal="true" aria-labelledby="add-k">
          <button className="absolute inset-0 bg-black/60" aria-label="Close" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-lg rounded-lg border border-line bg-card p-5">
            <h2 id="add-k" className="text-lg font-medium">
              Add knowledge
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {options.map((option) => (
                <button
                  key={option}
                  className="rounded-md border border-line px-3 py-3 text-left text-sm hover:bg-elevated"
                  onClick={() => {
                    addSource({
                      id: `${option}-${Date.now()}`,
                      name: option === "Website" ? "help.auraskin.com" : option,
                      kind: option,
                      status: "Indexing",
                      detail: "Queued",
                      updated: "Just now",
                    });
                    setOpen(false);
                    toast("Indexing started");
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function IntegrationsPage() {
  const [cat, setCat] = useState<"All" | "Commerce" | "Payments" | "Communication" | "Support" | "Shipping">("All");
  const [selected, setSelected] = useState("shopify");
  const cats = ["All", "Commerce", "Payments", "Communication", "Support", "Shipping"] as const;
  const list = useMemo(
    () => integrations.filter((item) => cat === "All" || item.category === cat),
    [cat],
  );
  const current = integrations.find((item) => item.id === selected) ?? integrations[0];
  return (
    <div>
      <h1 className="text-2xl font-medium tracking-tight">Integrations</h1>
      <p className="mt-1 text-sm text-secondary">Connect the systems an agent is allowed to use.</p>
      <div className="mt-4 flex gap-1 overflow-x-auto">
        {cats.map((item) => (
          <button
            key={item}
            className={cn(
              "h-8 shrink-0 rounded-md px-3 text-sm",
              cat === item ? "bg-elevated text-fg" : "text-secondary",
            )}
            onClick={() => setCat(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_320px]">
        <div className="grid gap-3 sm:grid-cols-2">
          {list.map((item) => (
            <button
              key={item.id}
              className={cn(
                "rounded-lg border bg-card p-4 text-left",
                selected === item.id ? "border-line-strong" : "border-line",
              )}
              onClick={() => setSelected(item.id)}
            >
              <div className="flex items-center justify-between">
                <h2 className="font-medium">{item.name}</h2>
                <Badge tone={item.state === "connected" ? "live" : "neutral"}>
                  {item.state === "connected" ? "Connected" : "Connect"}
                </Badge>
              </div>
              <p className="mt-2 text-sm text-secondary">{item.blurb}</p>
            </button>
          ))}
        </div>
        <aside className="rounded-lg border border-line bg-card p-4">
          <h2 className="font-medium">{current?.name}</h2>
          <p className="mt-2 text-sm text-secondary">{current?.note}</p>
          {current?.id === "shopify" ? (
            <dl className="mt-4 space-y-2 text-sm">
              <div className="text-xs text-muted">Connection health</div>
              <div className="flex items-center gap-2">
                <StatusDot /> Healthy
              </div>
              {[
                ["Read orders", "Yes"],
                ["Read customers", "Yes"],
                ["Cancel order", "Approval"],
                ["Create return", "Yes"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-t border-line py-2">
                  <dt className="text-secondary">{k}</dt>
                  <dd className={v === "Approval" ? "text-warning" : "text-success"}>{v}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <Button
              className="mt-4"
              variant={current?.state === "connected" ? "secondary" : "primary"}
              onClick={() => toast(current?.state === "connected" ? "Already connected" : `${current?.name} is ready to authorize`)}
            >
              {current?.state === "connected" ? "Manage" : "Connect"}
            </Button>
          )}
        </aside>
      </div>
    </div>
  );
}
