import { i as __toESM } from "../_runtime.mjs";
import { a as cn } from "./data-DuUJBt1G.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as workspaces, t as useKivo } from "./store-C4IbI_BN.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Link, g as Outlet, p as useRouterState, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as BookOpen, a as Rocket, c as MessagesSquare, d as KeyRound, f as FlaskConical, g as Boxes, h as ChartColumn, i as Settings, l as Menu, m as ChevronDown, o as Plug, p as ClipboardCheck, r as ShieldCheck, t as X, u as LayoutDashboard } from "../_libs/lucide-react.mjs";
import { t as Logo } from "./logo-bC0ZICfG.mjs";
import { t as _e } from "../_libs/cmdk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-CqzNfIIG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		to: "/app",
		label: "Overview",
		icon: LayoutDashboard,
		exact: true
	},
	{
		to: "/app/agents",
		label: "Agents",
		icon: Boxes,
		exact: false
	},
	{
		to: "/app/knowledge",
		label: "Knowledge",
		icon: BookOpen,
		exact: true
	},
	{
		to: "/app/integrations",
		label: "Integrations",
		icon: Plug,
		exact: true
	},
	{
		to: "/app/playground",
		label: "Playground",
		icon: FlaskConical,
		exact: true
	}
];
var ops = [
	{
		to: "/app/conversations",
		label: "Conversations",
		icon: MessagesSquare
	},
	{
		to: "/app/review",
		label: "Review",
		icon: ShieldCheck
	},
	{
		to: "/app/analytics",
		label: "Analytics",
		icon: ChartColumn
	},
	{
		to: "/app/evaluations",
		label: "Evaluations",
		icon: ClipboardCheck
	}
];
var ship = [
	{
		to: "/app/deployments",
		label: "Deployments",
		icon: Rocket
	},
	{
		to: "/app/api-keys",
		label: "API Keys",
		icon: KeyRound
	},
	{
		to: "/app/settings",
		label: "Settings",
		icon: Settings
	}
];
function AppShell() {
	const open = useKivo((s) => s.navOpen);
	const setOpen = useKivo((s) => s.setNavOpen);
	const [palette, setPalette] = (0, import_react.useState)(false);
	const [picker, setPicker] = (0, import_react.useState)(false);
	const workspaceId = useKivo((s) => s.workspaceId);
	const setWorkspace = useKivo((s) => s.setWorkspace);
	const openCount = useKivo((s) => s.reviews).filter((r) => r.status === "open").length;
	const ws = workspaces[workspaceId];
	const path = useRouterState({ select: (s) => s.location.pathname });
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setPalette((v) => !v);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [path, setOpen]);
	const jump = (to) => {
		setPalette(false);
		navigate({ to });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-line bg-bg lg:flex",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Side, {
					ws: ws.name,
					plan: ws.plan,
					openCount,
					picker,
					setPicker,
					workspaceId,
					setWorkspace
				})
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-40 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "absolute inset-0 bg-black/60",
					"aria-label": "Close navigation",
					onClick: () => setOpen(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "absolute inset-y-0 left-0 flex w-60 flex-col border-r border-line bg-bg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Side, {
						ws: ws.name,
						plan: ws.plan,
						openCount,
						picker,
						setPicker,
						workspaceId,
						setWorkspace
					})
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pl-60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "sticky top-0 z-20 flex h-12 items-center justify-between gap-3 border-b border-line bg-bg/85 px-4 backdrop-blur",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "grid size-11 place-items-center rounded-md lg:hidden",
							"aria-label": "Open navigation",
							onClick: () => setOpen(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "hidden h-8 flex-1 items-center rounded-md border border-line bg-elevated px-3 text-left text-sm text-muted md:flex md:max-w-sm",
							onClick: () => setPalette(true),
							children: ["Search or jump…", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-auto font-mono text-xs",
								children: "⌘K"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-2 text-xs text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: ws.plan
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-success pulse-dot" })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "px-4 py-6 md:px-8 md:py-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.Dialog, {
				open: palette,
				onOpenChange: setPalette,
				label: "Command menu",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Input, { placeholder: "Jump to a surface…" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.List, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Empty, { children: "No matches." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
					heading: "Workspace",
					children: [
						...nav,
						...ops,
						...ship
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
						onSelect: () => jump(item.to),
						children: item.label
					}, item.to))
				})] })]
			})
		]
	});
}
function Side({ ws, plan, openCount, picker, setPicker, workspaceId, setWorkspace }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-3 pt-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { to: "/app" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "text-muted hover:text-fg",
				"aria-label": "Close app",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4 lg:hidden" })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative px-3 pt-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "flex w-full items-center justify-between rounded-md border border-line bg-elevated px-2.5 py-2 text-left",
				"aria-expanded": picker,
				onClick: () => setPicker(!picker),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-sm",
					children: ws
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs text-muted",
					children: plan
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 text-muted" })]
			}), picker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-3 left-3 z-10 mt-1 rounded-md border border-line bg-card p-1",
				children: [["auraskin", "AuraSkin"], ["northstar", "Northstar Home"]].map(([id, name]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: cn("block w-full rounded px-2 py-2 text-left text-sm", workspaceId === id ? "bg-elevated" : "text-secondary"),
					onClick: () => {
						setWorkspace(id);
						setPicker(false);
					},
					children: name
				}, id))
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mt-4 flex-1 space-y-4 overflow-auto px-2 scroll-thin",
			"aria-label": "Workspace",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, {
					items: nav,
					openCount
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, {
					items: ops,
					openCount
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, {
					items: ship,
					openCount
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 border-t border-line px-3 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-8 place-items-center rounded-full bg-elevated text-xs",
				children: "AR"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-sm",
					children: "Anika Rao"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-xs text-muted",
					children: "Owner"
				})]
			})]
		})
	] });
}
function Group({ items, openCount }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-0.5 border-t border-line pt-3 first:border-t-0 first:pt-0",
		children: items.map((item) => {
			const Icon = item.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: item.to,
				activeOptions: { exact: item.exact ?? true },
				className: "flex h-9 items-center gap-2 rounded-md px-2 text-sm text-secondary hover:bg-elevated hover:text-fg",
				activeProps: { className: "bg-elevated text-fg" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 shrink-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }),
					item.to === "/app/review" && openCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-auto font-mono text-xs text-warning",
						children: openCount
					}) : null
				]
			}, item.to);
		})
	});
}
var SplitComponent = AppShell;
//#endregion
export { SplitComponent as component };
