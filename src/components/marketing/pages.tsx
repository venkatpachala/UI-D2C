import { Link } from "@tanstack/react-router";
import { MarketingFrame, PageIntro } from "@/components/marketing/chrome";
import { Button } from "@/components/ui";
import { pipeline } from "@/lib/data";

export function ProductPage() {
  const pillars = [
    {
      title: "AI that knows",
      text: "Policies, product docs, order history and the current conversation. Answers cite the source they came from.",
    },
    {
      title: "AI that acts",
      text: "Track, cancel, return, refund and reply — only through tools you turned on, with timeouts, retries and an audit row.",
    },
    {
      title: "AI that can be trusted",
      text: "Permissions, approval thresholds, evaluations and a human queue. A failed critical test does not reach production.",
    },
  ];
  return (
    <MarketingFrame>
      <PageIntro
        eyebrow="Product"
        title="The control plane for AI customer operations."
        lede="Kivo hosts the runtime. Your team connects the business, sets the rules and ships agents that resolve work — not just reply to it."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-5 pb-20 md:grid-cols-3">
        {pillars.map((item) => (
          <article key={item.title} className="rounded-lg border border-line bg-card p-5">
            <h2 className="text-lg font-medium">{item.title}</h2>
            <p className="mt-3 text-sm text-secondary">{item.text}</p>
          </article>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-medium tracking-tight">One control plane.</h2>
            <p className="mt-3 text-secondary">
              You should not have to run model routing, retrieval, workers or tool infrastructure to put an agent on your store.
            </p>
            <ol className="mt-6 flex flex-wrap gap-2">
              {pipeline.map((step) => (
                <li key={step} className="rounded-md border border-line px-3 py-1.5 text-sm">
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-lg border border-line bg-card p-5 text-sm">
            <div className="text-xs text-muted">You don't operate</div>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-secondary">
              {[
                "Model hosting",
                "Retrieval",
                "Workers",
                "Scaling",
                "Tool execution",
                "Trace storage",
                "Release gates",
                "Channel adapters",
              ].map((item) => (
                <li key={item} className="rounded-md bg-elevated px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/start" className="mt-6 inline-block">
              <Button>Build your first agent</Button>
            </Link>
          </div>
        </div>
      </div>
    </MarketingFrame>
  );
}

export function PlatformPage() {
  const rows = [
    ["Prompt-only chat", "Answers from memory", "Cannot touch orders", "Ships on vibes"],
    ["Kivo operations", "Answers from your policies", "Executes approved actions", "Fails closed"],
  ];
  return (
    <MarketingFrame>
      <PageIntro
        eyebrow="Platform"
        title="Infrastructure for agents that are allowed to act."
        lede="A gateway, a plan-execute-verify runtime, policy retrieval, approvals and a release gate. The control plane is what your team sees. The runtime is what Kivo runs."
      />
      <div className="mx-auto max-w-6xl px-5 pb-20">
        <div className="overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-card text-muted">
              <tr>
                {["", "Knowledge", "Actions", "Release"].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row[0]} className={i === 1 ? "bg-elevated" : ""}>
                  {row.map((cell) => (
                    <td key={cell} className="border-t border-line px-4 py-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Gateway", "Auth, rate limits, input guards and output checks sit in front of every channel."],
            ["Runtime", "Supervisor, planner, tools, verifier, human review and a final QA pass."],
            ["Release gate", "Unauthorized refunds must stay at zero. A critical failure blocks deploy."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-lg border border-line bg-card p-5">
              <h2 className="font-medium">{title}</h2>
              <p className="mt-2 text-sm text-secondary">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </MarketingFrame>
  );
}

export function SolutionsPage() {
  const brands = [
    {
      name: "D2C skincare",
      example: "AuraSkin",
      text: "Opened-product rules, damage photos, and refunds that stop at a rupee limit. The agent explains policy when it cannot act.",
    },
    {
      name: "Quick commerce",
      example: "Same-day orders",
      text: "Missing items, late deliveries and replacements. Fast paths for policy questions. A person for high-value exceptions.",
    },
    {
      name: "Marketplace sellers",
      example: "Multi-store",
      text: "One workspace per brand. Separate policies, tool permissions and keys. The same runtime underneath.",
    },
  ];
  return (
    <MarketingFrame>
      <PageIntro
        eyebrow="Solutions"
        title="Built for brands that ship physical products."
        lede="Returns, refunds, cancellations and the question behind them. Kivo is for teams who need the agent to finish the operation, not open another ticket."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-5 pb-20 md:grid-cols-3">
        {brands.map((item) => (
          <article key={item.name} className="rounded-lg border border-line bg-card p-5">
            <div className="font-mono text-xs text-muted">{item.example}</div>
            <h2 className="mt-2 text-lg font-medium">{item.name}</h2>
            <p className="mt-3 text-sm text-secondary">{item.text}</p>
          </article>
        ))}
      </div>
    </MarketingFrame>
  );
}

export function DevelopersPage() {
  return (
    <MarketingFrame>
      <PageIntro
        eyebrow="Developers"
        title="An API for the agent. A gate for the money."
        lede="Chat with an agent, read the case, and approve the action. Secret keys stay on the server. The widget uses a publishable key."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-5 pb-20 lg:grid-cols-2">
        <pre className="overflow-x-auto rounded-lg border border-line bg-card p-5 font-mono text-xs leading-relaxed text-secondary">
{`POST /v1/agents/support/chat
Authorization: Bearer kivo_live_...

{
  "message": "Where is order #3812?",
  "customer": { "email": "priya@example.com" }
}`}
        </pre>
        <div className="rounded-lg border border-line bg-card p-5 text-sm">
          <h2 className="font-medium">What comes back</h2>
          <ul className="mt-3 space-y-2 text-secondary">
            <li>The customer-facing message.</li>
            <li>Structured events: intent, tools, sources, policy, latency.</li>
            <li>No chain-of-thought. If a refund needs a person, status is waiting for approval.</li>
          </ul>
          <p className="mt-4 text-secondary">
            Widget installs use <span className="font-mono text-fg">pk_live_</span>. Never put{" "}
            <span className="font-mono text-fg">kivo_live_</span> in browser code.
          </p>
          <Link to="/app/api-keys" className="mt-5 inline-block">
            <Button variant="secondary">Open API keys</Button>
          </Link>
        </div>
      </div>
    </MarketingFrame>
  );
}

export function PricingPage() {
  const tiers = [
    {
      name: "Sandbox",
      price: "Free",
      detail: "Mock tools. One workspace. Full evaluation suite. No live charges.",
      points: ["Support agent template", "Policy knowledge", "Release gate", "Web widget preview"],
    },
    {
      name: "Production",
      price: "₹79,000",
      detail: "per month. Hosted runtime for a commerce brand.",
      points: ["Shopify, Stripe, Gmail", "Approval queue", "Chat, email, API", "Observability"],
    },
    {
      name: "Scale",
      price: "Custom",
      detail: "Multiple brands, voice preview and a shared release process.",
      points: ["Extra workspaces", "Voice sandbox", "SSO-ready members", "Dedicated limits"],
    },
  ];
  return (
    <MarketingFrame>
      <PageIntro
        eyebrow="Pricing"
        title="Pay for a control plane, not a cluster."
        lede="Start in sandbox with mock tools. Move a version to production only after the suite passes."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-5 pb-20 lg:grid-cols-3">
        {tiers.map((tier) => (
          <article key={tier.name} className="flex flex-col rounded-lg border border-line bg-card p-5">
            <h2 className="text-lg font-medium">{tier.name}</h2>
            <div className="mt-3 text-3xl font-medium tracking-tight">{tier.price}</div>
            <p className="mt-2 text-sm text-secondary">{tier.detail}</p>
            <ul className="mt-5 space-y-2 text-sm text-secondary">
              {tier.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link to="/start" className="mt-6">
              <Button variant={tier.name === "Production" ? "primary" : "secondary"} className="w-full">
                Start building
              </Button>
            </Link>
          </article>
        ))}
      </div>
    </MarketingFrame>
  );
}

export function DocsPage() {
  const docs = [
    ["Agents", "A versioned worker with instructions, knowledge, actions and a release state."],
    ["Actions", "Shopify, Stripe and Gmail tools. Each one has a timeout, a retry count and an approval rule."],
    ["Knowledge", "Policies and docs are retrieved per question. Answers can show the section they used."],
    ["Evaluations", "Golden conversations, a 39-query retrieval check, and a release gate that counts unauthorized refunds."],
    ["Approvals", "Above the workspace limit the runtime stops and waits. Nothing is marked refunded until a person allows it."],
    ["Traces", "Intent, risk, tool calls, sources, verifier, latency and cost. Not the model's private reasoning."],
    ["Environments", "Sandbox uses mock tools. Production keys stay refused until the gate is green."],
    ["Channels", "API and web widget first. Email through Gmail. Voice is a sandbox preview."],
  ];
  return (
    <MarketingFrame>
      <PageIntro
        eyebrow="Docs"
        title="How Kivo is supposed to behave."
        lede="Short reference for the control plane. The runtime plans, calls tools, verifies, and either answers or waits."
      />
      <div className="mx-auto grid max-w-6xl gap-3 px-5 pb-20 md:grid-cols-2">
        {docs.map(([title, text]) => (
          <article key={title} id={title.toLowerCase()} className="rounded-lg border border-line bg-card p-5">
            <h2 className="font-medium">{title}</h2>
            <p className="mt-2 text-sm text-secondary">{text}</p>
          </article>
        ))}
      </div>
    </MarketingFrame>
  );
}
