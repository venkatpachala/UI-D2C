import { useState, type ReactNode } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui";
import { useKivo } from "@/lib/store";
import { cn } from "@/lib/cn";

const steps = [
  "Create workspace",
  "Connect store",
  "Connect tools",
  "Add knowledge",
  "Configure agent",
  "Test agent",
  "Deploy",
];

export function SignInPage() {
  const signIn = useKivo((s) => s.signIn);
  const done = useKivo((s) => s.done);
  const navigate = useNavigate();
  const [email, setEmail] = useState("anika@auraskin.com");
  const [password, setPassword] = useState("auraskin");

  const go = (value: string) => {
    signIn(value);
    void navigate({ to: done ? "/app" : "/start" });
  };

  return (
    <div className="grid min-h-dvh place-items-center bg-bg px-5">
      <div className="w-full max-w-sm">
        <Logo />
        <h1 className="mt-8 text-2xl font-medium tracking-tight">Sign in</h1>
        <p className="mt-2 text-sm text-secondary">Use your work email. This demo opens the AuraSkin workspace.</p>
        <form
          className="mt-6 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            go(email);
          }}
        >
          <label className="block text-xs text-muted">
            Work email
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 h-10 w-full rounded-md border border-line bg-card px-3 text-sm text-fg outline-none"
            />
          </label>
          <label className="block text-xs text-muted">
            Password
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 h-10 w-full rounded-md border border-line bg-card px-3 text-sm text-fg outline-none"
              autoComplete="current-password"
            />
          </label>
          <Button type="submit" className="w-full">
            Continue
          </Button>
        </form>
        <button className="mt-3 w-full text-center text-sm text-secondary hover:text-fg" onClick={() => go("anika@auraskin.com")}>
          Open the AuraSkin demo
        </button>
        <Link to="/" className="mt-6 block text-sm text-muted hover:text-fg">
          Back
        </Link>
      </div>
    </div>
  );
}

export function Onboarding() {
  const step = useKivo((s) => s.step);
  const setStep = useKivo((s) => s.setStep);
  const finish = useKivo((s) => s.finish);
  const signIn = useKivo((s) => s.signIn);
  const navigate = useNavigate();
  const [shop, setShop] = useState(false);
  const [stripe, setStripe] = useState(false);
  const [gmail, setGmail] = useState(false);
  const [refund, setRefund] = useState("approval");

  const next = () => setStep(Math.min(step + 1, 6));

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="flex h-14 items-center justify-between px-5">
        <Logo />
        <button
          className="text-sm text-secondary hover:text-fg"
          onClick={() => {
            signIn("anika@auraskin.com");
            finish();
            void navigate({ to: "/app" });
          }}
        >
          Skip to workspace
        </button>
      </header>
      <div className="mx-auto grid max-w-5xl gap-8 px-5 py-8 lg:grid-cols-[220px_1fr]">
        <ol className="space-y-2">
          <div className="text-xs font-medium track-label text-muted uppercase">Setup</div>
          {steps.map((label, i) => (
            <li key={label}>
              <button
                className={cn("flex w-full items-center gap-2 text-left text-sm", i === step ? "text-fg" : "text-muted")}
                onClick={() => setStep(i)}
              >
                <span className="font-mono text-xs">{i < step ? "✓" : String(i + 1).padStart(2, "0")}</span>
                {label}
              </button>
            </li>
          ))}
        </ol>
        <section className="rounded-lg border border-line bg-card p-6">
          {step === 0 ? (
            <Block title="Create workspace" text="A workspace holds agents, knowledge, keys and the audit log for one brand.">
              <label className="block text-xs text-muted">
                Workspace
                <input
                  defaultValue="AuraSkin"
                  className="mt-1 h-10 w-full rounded-md border border-line bg-bg px-3 text-sm text-fg outline-none"
                />
              </label>
              <Button className="mt-4" onClick={next}>
                Continue
              </Button>
            </Block>
          ) : null}
          {step === 1 ? (
            <Block title="Connect your store" text="Orders and customers come from the store. Mutations still obey approval rules.">
              <Row name="Shopify" action={shop ? "Connected" : "Connect"} onClick={() => setShop(true)} done={shop} />
              <Row name="WooCommerce" action="Coming soon" disabled />
              <Row name="Custom API" action="Configure" onClick={() => toast("Custom API saved as a draft connector")} />
              <Button className="mt-4" onClick={next} disabled={!shop}>
                Continue
              </Button>
            </Block>
          ) : null}
          {step === 2 ? (
            <Block title="Connect tools" text="Payments and email. Live refunds stay off until the release gate passes.">
              <Row name="Stripe" action={stripe ? "Connected" : "Connect"} onClick={() => setStripe(true)} done={stripe} />
              <Row name="Gmail" action={gmail ? "Connected" : "Connect"} onClick={() => setGmail(true)} done={gmail} />
              <Button className="mt-4" onClick={next} disabled={!stripe || !gmail}>
                Continue
              </Button>
            </Block>
          ) : null}
          {step === 3 ? (
            <Block title="Add knowledge" text="The agent answers from these sources. It should not invent a policy.">
              {["Return Policy.pdf", "Shipping Policy", "FAQ", "auraskin.com"].map((name) => (
                <div key={name} className="flex items-center justify-between border-b border-line py-2 text-sm">
                  <span>{name}</span>
                  <span className="font-mono text-xs text-success">Ready</span>
                </div>
              ))}
              <Button className="mt-4" onClick={next}>
                Continue
              </Button>
            </Block>
          ) : null}
          {step === 4 ? (
            <Block title="Meet your first AI agent" text="Support Agent was drafted from what you connected.">
              <ul className="space-y-1 text-sm">
                {["Order tracking", "Customer lookup", "Payment verification", "Policy Q&A"].map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
              <div className="mt-4 text-sm text-secondary">Requires configuration</div>
              <fieldset className="mt-2 space-y-2">
                <legend className="text-sm">Refund permissions</legend>
                {[
                  ["auto", "AI may execute under ₹1,000"],
                  ["approval", "Human approval from ₹1,000"],
                  ["block", "Block all refunds"],
                ].map(([id, label]) => (
                  <label key={id} className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="refund"
                      checked={refund === id}
                      onChange={() => setRefund(id)}
                    />
                    {label}
                  </label>
                ))}
              </fieldset>
              <Button className="mt-4" onClick={next}>
                Configure agent
              </Button>
            </Block>
          ) : null}
          {step === 5 ? (
            <Block title="Test agent" text="A customer asks to cancel an unfulfilled order.">
              <div className="rounded-md border border-line bg-bg p-3 text-sm">
                <div className="text-xs text-muted">Customer</div>
                <p>I want to cancel order #3812.</p>
                <div className="mt-3 text-xs text-muted">Agent</div>
                <p>Order #3812 is unfulfilled and eligible. I can cancel it.</p>
              </div>
              <div className="mt-3 font-mono text-xs text-success">Verifier PASS · 1.82s</div>
              <Button className="mt-4" onClick={next}>
                Continue
              </Button>
            </Block>
          ) : null}
          {step === 6 ? (
            <Block title="Production readiness" text="Sandbox tools are connected. Live charges remain off until you pass the gate on a real key.">
              {[
                ["Shopify", "Connected"],
                ["Stripe", "Connected"],
                ["Knowledge", "Ready"],
                ["Evaluation suite", "39 / 39 passed"],
                ["Refund guardrail", "Active"],
                ["Escalation", "Configured"],
                ["API authentication", "Enabled"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-line py-2 text-sm">
                  <span className="text-secondary">{k}</span>
                  <span>{v}</span>
                </div>
              ))}
              <div className="mt-4 text-sm text-success">Ready to deploy</div>
              <Button
                className="mt-4"
                onClick={() => {
                  signIn("anika@auraskin.com");
                  finish();
                  void navigate({ to: "/app" });
                }}
              >
                Deploy agent
              </Button>
            </Block>
          ) : null}
        </section>
      </div>
    </div>
  );
}

function Block({ title, text, children }: { title: string; text: string; children: ReactNode }) {
  return (
    <div>
      <h1 className="text-2xl font-medium tracking-tight">{title}</h1>
      <p className="mt-2 max-w-xl text-sm text-secondary">{text}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Row({
  name,
  action,
  onClick,
  done,
  disabled,
}: {
  name: string;
  action: string;
  onClick?: () => void;
  done?: boolean;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-center justify-between border-b border-line py-3 text-sm">
      <span>{name}</span>
      <Button size="sm" variant={done ? "secondary" : "primary"} disabled={disabled || done} onClick={onClick}>
        {action}
      </Button>
    </div>
  );
}
