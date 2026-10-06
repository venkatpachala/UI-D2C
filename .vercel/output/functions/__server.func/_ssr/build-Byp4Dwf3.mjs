import { i as __toESM } from "../_runtime.mjs";
import { a as cn, c as integrations, o as conversations, t as actions } from "./data-DuUJBt1G.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as workspaces, t as useKivo } from "./store-C4IbI_BN.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as StatusDot, n as Button, r as Metric, t as Badge } from "./ui-DwlCNc4O.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Plus } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/build-Byp4Dwf3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Overview() {
	const workspaceId = useKivo((s) => s.workspaceId);
	const agents = useKivo((s) => s.agents);
	const ws = workspaces[workspaceId];
	const [greet, setGreet] = (0, import_react.useState)("Hello");
	(0, import_react.useEffect)(() => {
		const h = (/* @__PURE__ */ new Date()).getHours();
		setGreet(h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening");
	}, []);
	const recent = conversations.slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
			className: "text-2xl font-medium tracking-tight",
			children: [greet, "."]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-secondary",
			children: "Here's how your AI team is performing."
		}),
		workspaceId === "northstar" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 rounded-md border border-line bg-elevated px-3 py-2 text-sm text-secondary",
			children: "Northstar Home is a sandbox workspace. Live charges stay off."
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					label: "Resolution rate",
					value: ws.resolution,
					hint: "Last 7 days"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					label: "Conversations",
					value: ws.conversations,
					hint: "This week"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					label: "Escalations",
					value: ws.escalations,
					hint: "Sent to a person"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					label: "P95 latency",
					value: "1.9s",
					hint: "Production"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-medium",
					children: "AI agents"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/app/agents",
					className: "text-xs text-secondary hover:text-fg",
					children: "View all"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: agents.map((agent) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/app/agents/$agentId",
					params: { agentId: agent.id },
					className: "flex items-center justify-between rounded-lg border border-line bg-card px-4 py-3 hover:border-line-strong",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm",
						children: agent.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted",
						children: agent.summary
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						tone: agent.status === "live" ? "live" : agent.status === "review" ? "warn" : "neutral",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusDot, { tone: agent.status === "live" ? "live" : agent.status === "review" ? "warn" : "muted" }), agent.status]
					})]
				}, agent.id))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-sm font-medium",
					children: "Recent conversations"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-lg border border-line",
					children: recent.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/app/conversations",
						className: "flex items-center justify-between border-b border-line px-4 py-3 text-sm last:border-b-0 hover:bg-elevated",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: row.customer
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted",
							children: row.intent
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-secondary",
							children: row.outcome
						})]
					}, row.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 rounded-lg border border-line bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted",
							children: "Production health"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-center gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusDot, {}), "support-agent@v14 · Healthy"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-mono text-xs text-muted",
							children: "api.kivo.ai/v1/agents/support"
						})
					]
				})
			] })]
		})
	] });
}
function AgentsPage() {
	const agents = useKivo((s) => s.agents);
	const addAgent = useKivo((s) => s.addAgent);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("Orders Agent");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-medium tracking-tight",
				children: "Your AI workforce"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-secondary",
				children: "Agents for AuraSkin. Each one has its own actions and limits."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => setOpen(true),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Create agent"]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-3 lg:grid-cols-3",
			children: agents.map((agent) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/app/agents/$agentId",
				params: { agentId: agent.id },
				className: "rounded-lg border border-line bg-card p-4 transition-transform duration-200 hover:-translate-y-0.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-medium",
							children: agent.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: agent.status === "live" ? "live" : "warn",
							children: agent.status
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 min-h-10 text-sm text-secondary",
						children: agent.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex gap-6 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted",
							children: "Resolution"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "tabular",
							children: [agent.resolution, "%"]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted",
							children: "Requests"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "tabular",
							children: agent.requests
						})] })]
					})
				]
			}, agent.id))
		}),
		open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-50 grid place-items-center bg-black/60 p-4",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "new-agent",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "w-full max-w-md rounded-lg border border-line bg-card p-5",
				onSubmit: (e) => {
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
						role: `You are ${name} for AuraSkin. Use only approved actions and published policies.`
					});
					setOpen(false);
					toast("Agent created in sandbox");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "new-agent",
						className: "text-lg font-medium",
						children: "Create agent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mt-4 block text-xs text-muted",
						htmlFor: "agent-name",
						children: "Name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "agent-name",
						value: name,
						onChange: (e) => setName(e.target.value),
						className: "mt-1 h-10 w-full rounded-md border border-line bg-bg px-3 text-sm outline-none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => setOpen(false),
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: "Create"
						})]
					})
				]
			})
		}) : null
	] });
}
var tabs = [
	"Overview",
	"Instructions",
	"Knowledge",
	"Actions",
	"Policies",
	"Guardrails",
	"Evaluations",
	"Versions"
];
function AgentDetail({ agentId }) {
	const agents = useKivo((s) => s.agents);
	const agent = agents.find((a) => a.id === agentId) ?? agents[0];
	const [tab, setTab] = (0, import_react.useState)("Overview");
	const [action, setAction] = (0, import_react.useState)(null);
	const [role, setRole] = (0, import_react.useState)(agent?.role ?? "");
	const [friendly, setFriendly] = (0, import_react.useState)(35);
	const [concise, setConcise] = (0, import_react.useState)(40);
	const [langs, setLangs] = (0, import_react.useState)(["English"]);
	(0, import_react.useEffect)(() => {
		setRole(agent?.role ?? "");
		setTab("Overview");
	}, [agent?.id, agent?.role]);
	if (!agent) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-secondary",
		children: "That agent is not in this workspace."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-medium tracking-tight",
						children: agent.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "accent",
						children: agent.environment
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						tone: agent.health === "Healthy" ? "live" : "warn",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusDot, { tone: agent.health === "Healthy" ? "live" : "warn" }), agent.health]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 font-mono text-xs text-muted",
				children: [
					agent.version,
					" · P95 ",
					agent.p95
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/app/playground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						size: "sm",
						children: "Test"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/app/deployments",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						children: "Deploy"
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 flex gap-1 overflow-x-auto border-b border-line",
			role: "tablist",
			"aria-label": "Agent sections",
			children: tabs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				role: "tab",
				"aria-selected": tab === item,
				className: cn("h-10 shrink-0 border-b px-3 text-sm", tab === item ? "border-fg text-fg" : "border-transparent text-secondary"),
				onClick: () => setTab(item),
				children: item
			}, item))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5",
			children: [
				tab === "Overview" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "Resolution",
							value: `${agent.resolution}%`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "Requests",
							value: agent.requests
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "Channels",
							value: String(agent.channels.length),
							hint: agent.channels.join(" · ")
						})
					]
				}) : null,
				tab === "Instructions" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: "Role"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: role,
								onChange: (e) => setRole(e.target.value),
								rows: 5,
								className: "mt-1 w-full rounded-md border border-line bg-card p-3 text-sm outline-none"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							label: "Personality",
							left: "Friendly",
							right: "Professional",
							value: friendly,
							onChange: setFriendly
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							label: "Length",
							left: "Concise",
							right: "Detailed",
							value: concise,
							onChange: setConcise
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted",
							children: "Language"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: [
								"English",
								"Hindi",
								"Telugu"
							].map((lang) => {
								const on = langs.includes(lang);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: cn("h-8 rounded-md border px-3 text-sm", on ? "border-line-strong bg-elevated text-fg" : "border-line text-secondary"),
									"aria-pressed": on,
									onClick: () => setLangs((curr) => curr.includes(lang) ? curr.filter((l) => l !== lang) : [...curr, lang]),
									children: lang
								}, lang);
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "rounded-md border border-line px-3 py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
								className: "cursor-pointer text-secondary",
								children: "Advanced model routing"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-secondary",
								children: "Kivo routes the request. This workspace uses the hosted production profile. You don't pick a model to ship an agent."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => toast("Instructions saved on this draft"),
							children: "Save draft"
						})
					]
				}) : null,
				tab === "Knowledge" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnowledgeList, { compact: true }) : null,
				tab === "Actions" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionList, { onOpen: setAction }) : null,
				tab === "Policies" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolicyPanel, {}) : null,
				tab === "Guardrails" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Guardrails, {}) : null,
				tab === "Evaluations" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-secondary",
					children: [
						"Latest gate on ",
						agent.version,
						": production is serving a passing build. Open",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app/evaluations",
							className: "text-fg underline",
							children: "evaluations"
						}),
						" ",
						"to inspect the blocked draft."
					]
				}) : null,
				tab === "Versions" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Versions, {}) : null
			]
		}),
		action ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionDrawer, {
			action,
			onClose: () => setAction(null)
		}) : null
	] });
}
function Slider({ label, left, right, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 flex items-center gap-3 text-xs text-secondary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: left }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 0,
					max: 100,
					value,
					onChange: (e) => onChange(Number(e.target.value)),
					className: "flex-1 accent-[var(--color-accent)]",
					"aria-label": label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: right })
			]
		})]
	});
}
function ActionList({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-5",
		children: [
			"Shopify",
			"Stripe",
			"Gmail"
		].map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-xs font-medium track-label text-muted uppercase",
			children: group
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-2 divide-y divide-line rounded-lg border border-line",
			children: actions.filter((a) => a.integration === group).map((action) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "flex w-full items-center justify-between px-3 py-3 text-left text-sm hover:bg-elevated",
				onClick: () => onOpen(action),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs",
					children: action.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: action.state === "enabled" ? "live" : action.state === "approval" ? "warn" : "neutral",
					children: action.state === "enabled" ? "Enabled" : action.state === "approval" ? "Approval required" : "Off"
				})]
			}) }, action.id))
		})] }, group))
	});
}
function ActionDrawer({ action, onClose }) {
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
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
		["Audit logging", action.audit]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50",
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "action-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "absolute inset-0 bg-black/50",
			"aria-label": "Close action",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "absolute top-0 right-0 h-full w-full max-w-md overflow-auto border-l border-line bg-bg-2 p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted",
					children: action.integration
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "action-title",
					className: "mt-1 font-mono text-lg",
					children: action.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-5 space-y-3",
					children: rows.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs text-muted",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-sm",
						children: v
					})] }, k))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-6",
					variant: "secondary",
					onClick: onClose,
					children: "Close"
				})
			]
		})]
	});
}
function PolicyPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-lg rounded-lg border border-line bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-medium",
				children: "Refund policy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-3 divide-y divide-line text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Under ₹1,000" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-success",
							children: "AI may execute"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "₹1,000 – ₹5,000" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-warning",
							children: "Human approval"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Above ₹5,000" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-danger",
							children: "Blocked"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted",
				children: "Customer verification, eligibility and policy evidence are required."
			})
		]
	});
}
function Guardrails() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "grid gap-3 md:grid-cols-2",
		children: [
			["Input guard", "Blocks prompt injection and out-of-scope requests."],
			["PII", "Card numbers and secrets are stripped before they are stored."],
			["Verified customer", "Refunds and cancellations require a matched identity."],
			["Output guard", "Stops invented tracking events and unapproved refund claims."]
		].map(([title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "rounded-lg border border-line bg-card p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-secondary",
				children: text
			})]
		}, title))
	});
}
function Versions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "max-w-lg divide-y divide-line rounded-lg border border-line",
		children: [
			[
				"v14",
				"Production",
				"Healthy"
			],
			[
				"v15",
				"Draft",
				"Blocked · REFUND_LIMIT"
			],
			[
				"v13",
				"Previous",
				"Rollback target"
			]
		].map(([v, env, note]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center justify-between px-4 py-3 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono",
					children: v
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-secondary",
					children: env
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted",
					children: note
				})
			]
		}, v))
	});
}
function KnowledgePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-end justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-medium tracking-tight",
			children: "Knowledge"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-secondary",
			children: "Everything your agents know about your business."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddKnowledge, {})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnowledgeList, {})
	})] });
}
function KnowledgeList({ compact = false }) {
	const sources = useKivo((s) => s.sources);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("grid gap-3", compact ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"),
		children: sources.map((source) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-lg border border-line bg-card p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-medium",
						children: source.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: source.status === "Indexing" ? "warn" : "live",
						children: source.status
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex justify-between text-xs text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: source.kind }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: source.detail })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 text-xs text-muted",
					children: ["Updated ", source.updated]
				})
			]
		}, source.id))
	});
}
function AddKnowledge() {
	const addSource = useKivo((s) => s.addSource);
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		onClick: () => setOpen(true),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Add knowledge"]
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 grid place-items-center p-4",
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "add-k",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "absolute inset-0 bg-black/60",
			"aria-label": "Close",
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-lg rounded-lg border border-line bg-card p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "add-k",
				className: "text-lg font-medium",
				children: "Add knowledge"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-2 gap-2",
				children: [
					"Upload files",
					"Website",
					"URL",
					"Notion",
					"Google Drive",
					"Help Center",
					"Manual text"
				].map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "rounded-md border border-line px-3 py-3 text-left text-sm hover:bg-elevated",
					onClick: () => {
						addSource({
							id: `${option}-${Date.now()}`,
							name: option === "Website" ? "help.auraskin.com" : option,
							kind: option,
							status: "Indexing",
							detail: "Queued",
							updated: "Just now"
						});
						setOpen(false);
						toast("Indexing started");
					},
					children: option
				}, option))
			})]
		})]
	}) : null] });
}
function IntegrationsPage() {
	const [cat, setCat] = (0, import_react.useState)("All");
	const [selected, setSelected] = (0, import_react.useState)("shopify");
	const cats = [
		"All",
		"Commerce",
		"Payments",
		"Communication",
		"Support",
		"Shipping"
	];
	const list = (0, import_react.useMemo)(() => integrations.filter((item) => cat === "All" || item.category === cat), [cat]);
	const current = integrations.find((item) => item.id === selected) ?? integrations[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-medium tracking-tight",
			children: "Integrations"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-secondary",
			children: "Connect the systems an agent is allowed to use."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex gap-1 overflow-x-auto",
			children: cats.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: cn("h-8 shrink-0 rounded-md px-3 text-sm", cat === item ? "bg-elevated text-fg" : "text-secondary"),
				onClick: () => setCat(item),
				children: item
			}, item))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-4 lg:grid-cols-[1fr_320px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: cn("rounded-lg border bg-card p-4 text-left", selected === item.id ? "border-line-strong" : "border-line"),
					onClick: () => setSelected(item.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-medium",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: item.state === "connected" ? "live" : "neutral",
							children: item.state === "connected" ? "Connected" : "Connect"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-secondary",
						children: item.blurb
					})]
				}, item.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-lg border border-line bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-medium",
						children: current?.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-secondary",
						children: current?.note
					}),
					current?.id === "shopify" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted",
								children: "Connection health"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusDot, {}), " Healthy"]
							}),
							[
								["Read orders", "Yes"],
								["Read customers", "Yes"],
								["Cancel order", "Approval"],
								["Create return", "Yes"]
							].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between border-t border-line py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-secondary",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: v === "Approval" ? "text-warning" : "text-success",
									children: v
								})]
							}, k))
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-4",
						variant: current?.state === "connected" ? "secondary" : "primary",
						onClick: () => toast(current?.state === "connected" ? "Already connected" : `${current?.name} is ready to authorize`),
						children: current?.state === "connected" ? "Manage" : "Connect"
					})
				]
			})]
		})
	] });
}
//#endregion
export { Overview as a, KnowledgePage as i, AgentsPage as n, IntegrationsPage as r, AgentDetail as t };
