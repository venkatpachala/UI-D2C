import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { Command } from "cmdk";
import {
  BarChart3,
  BookOpen,
  Boxes,
  ChevronDown,
  ClipboardCheck,
  FlaskConical,
  KeyRound,
  LayoutDashboard,
  Menu,
  MessagesSquare,
  Plug,
  Rocket,
  Settings,
  ShieldCheck,
  X,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/cn";
import { useKivo, workspaces } from "@/lib/store";

const nav = [
  { to: "/app", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/app/agents", label: "Agents", icon: Boxes, exact: false },
  { to: "/app/knowledge", label: "Knowledge", icon: BookOpen, exact: true },
  { to: "/app/integrations", label: "Integrations", icon: Plug, exact: true },
  { to: "/app/playground", label: "Playground", icon: FlaskConical, exact: true },
] as const;

const ops = [
  { to: "/app/conversations", label: "Conversations", icon: MessagesSquare },
  { to: "/app/review", label: "Review", icon: ShieldCheck },
  { to: "/app/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/app/evaluations", label: "Evaluations", icon: ClipboardCheck },
] as const;

const ship = [
  { to: "/app/deployments", label: "Deployments", icon: Rocket },
  { to: "/app/api-keys", label: "API Keys", icon: KeyRound },
  { to: "/app/settings", label: "Settings", icon: Settings },
] as const;

export function AppShell() {
  const open = useKivo((s) => s.navOpen);
  const setOpen = useKivo((s) => s.setNavOpen);
  const [palette, setPalette] = useState(false);
  const [picker, setPicker] = useState(false);
  const workspaceId = useKivo((s) => s.workspaceId);
  const setWorkspace = useKivo((s) => s.setWorkspace);
  const reviews = useKivo((s) => s.reviews);
  const openCount = reviews.filter((r) => r.status === "open").length;
  const ws = workspaces[workspaceId];
  const path = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path, setOpen]);

  const jump = (to: string) => {
    setPalette(false);
    void navigate({ to });
  };

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-line bg-bg lg:flex">
        <Side
          ws={ws.name}
          plan={ws.plan}
          openCount={openCount}
          picker={picker}
          setPicker={setPicker}
          workspaceId={workspaceId}
          setWorkspace={setWorkspace}
        />
      </aside>
      {open ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button className="absolute inset-0 bg-black/60" aria-label="Close navigation" onClick={() => setOpen(false)} />
          <aside className="absolute inset-y-0 left-0 flex w-60 flex-col border-r border-line bg-bg">
            <Side
              ws={ws.name}
              plan={ws.plan}
              openCount={openCount}
              picker={picker}
              setPicker={setPicker}
              workspaceId={workspaceId}
              setWorkspace={setWorkspace}
            />
          </aside>
        </div>
      ) : null}
      <div className="lg:pl-60">
        <header className="sticky top-0 z-20 flex h-12 items-center justify-between gap-3 border-b border-line bg-bg/85 px-4 backdrop-blur">
          <button
            className="grid size-11 place-items-center rounded-md lg:hidden"
            aria-label="Open navigation"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </button>
          <button
            className="hidden h-8 flex-1 items-center rounded-md border border-line bg-elevated px-3 text-left text-sm text-muted md:flex md:max-w-sm"
            onClick={() => setPalette(true)}
          >
            Search or jump…
            <span className="ml-auto font-mono text-xs">⌘K</span>
          </button>
          <div className="ml-auto flex items-center gap-2 text-xs text-muted">
            <span className="hidden sm:inline">{ws.plan}</span>
            <span className="size-1.5 rounded-full bg-success pulse-dot" />
          </div>
        </header>
        <main className="px-4 py-6 md:px-8 md:py-8">
          <Outlet />
        </main>
      </div>
      <Command.Dialog open={palette} onOpenChange={setPalette} label="Command menu">
        <Command.Input placeholder="Jump to a surface…" />
        <Command.List>
          <Command.Empty>No matches.</Command.Empty>
          <Command.Group heading="Workspace">
            {[...nav, ...ops, ...ship].map((item) => (
              <Command.Item key={item.to} onSelect={() => jump(item.to)}>
                {item.label}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </div>
  );
}

function Side({
  ws,
  plan,
  openCount,
  picker,
  setPicker,
  workspaceId,
  setWorkspace,
}: {
  ws: string;
  plan: string;
  openCount: number;
  picker: boolean;
  setPicker: (v: boolean) => void;
  workspaceId: "auraskin" | "northstar";
  setWorkspace: (id: "auraskin" | "northstar") => void;
}) {
  return (
    <>
      <div className="flex items-center justify-between px-3 pt-3">
        <Logo to="/app" />
        <Link to="/" className="text-muted hover:text-fg" aria-label="Close app">
          <X className="size-4 lg:hidden" />
        </Link>
      </div>
      <div className="relative px-3 pt-3">
        <button
          className="flex w-full items-center justify-between rounded-md border border-line bg-elevated px-2.5 py-2 text-left"
          aria-expanded={picker}
          onClick={() => setPicker(!picker)}
        >
          <span>
            <span className="block text-sm">{ws}</span>
            <span className="block text-xs text-muted">{plan}</span>
          </span>
          <ChevronDown className="size-4 text-muted" />
        </button>
        {picker ? (
          <div className="absolute right-3 left-3 z-10 mt-1 rounded-md border border-line bg-card p-1">
            {(
              [
                ["auraskin", "AuraSkin"],
                ["northstar", "Northstar Home"],
              ] as const
            ).map(([id, name]) => (
              <button
                key={id}
                className={cn(
                  "block w-full rounded px-2 py-2 text-left text-sm",
                  workspaceId === id ? "bg-elevated" : "text-secondary",
                )}
                onClick={() => {
                  setWorkspace(id);
                  setPicker(false);
                }}
              >
                {name}
              </button>
            ))}
          </div>
        ) : null}
      </div>
      <nav className="mt-4 flex-1 space-y-4 overflow-auto px-2 scroll-thin" aria-label="Workspace">
        <Group items={nav} openCount={openCount} />
        <Group items={ops} openCount={openCount} />
        <Group items={ship} openCount={openCount} />
      </nav>
      <div className="flex items-center gap-2 border-t border-line px-3 py-3">
        <span className="grid size-8 place-items-center rounded-full bg-elevated text-xs">AR</span>
        <div className="min-w-0">
          <div className="truncate text-sm">Anika Rao</div>
          <div className="truncate text-xs text-muted">Owner</div>
        </div>
      </div>
    </>
  );
}

function Group({
  items,
  openCount,
}: {
  items: readonly { to: string; label: string; icon: typeof LayoutDashboard; exact?: boolean }[];
  openCount: number;
}) {
  return (
    <div className="space-y-0.5 border-t border-line pt-3 first:border-t-0 first:pt-0">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.to}
            to={item.to}
            activeOptions={{ exact: item.exact ?? true }}
            className="flex h-9 items-center gap-2 rounded-md px-2 text-sm text-secondary hover:bg-elevated hover:text-fg"
            activeProps={{ className: "bg-elevated text-fg" }}
          >
            <Icon className="size-4 shrink-0" />
            <span>{item.label}</span>
            {item.to === "/app/review" && openCount > 0 ? (
              <span className="ml-auto font-mono text-xs text-warning">{openCount}</span>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
}
