import { f as pipeline } from "./data-DuUJBt1G.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Button } from "./ui-DwlCNc4O.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageIntro, t as MarketingFrame } from "./chrome-C2UwOrXU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pages-C4f-cfCS.js
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MarketingFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			eyebrow: "Product",
			title: "The control plane for AI customer operations.",
			lede: "Kivo hosts the runtime. Your team connects the business, sets the rules and ships agents that resolve work — not just reply to it."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-4 px-5 pb-20 md:grid-cols-3",
			children: [
				{
					title: "AI that knows",
					text: "Policies, product docs, order history and the current conversation. Answers cite the source they came from."
				},
				{
					title: "AI that acts",
					text: "Track, cancel, return, refund and reply — only through tools you turned on, with timeouts, retries and an audit row."
				},
				{
					title: "AI that can be trusted",
					text: "Permissions, approval thresholds, evaluations and a human queue. A failed critical test does not reach production."
				}
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-lg border border-line bg-card p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-medium",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-secondary",
					children: item.text
				})]
			}, item.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-medium tracking-tight",
						children: "One control plane."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-secondary",
						children: "You should not have to run model routing, retrieval, workers or tool infrastructure to put an agent on your store."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-6 flex flex-wrap gap-2",
						children: pipeline.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-md border border-line px-3 py-1.5 text-sm",
							children: step
						}, step))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-line bg-card p-5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted",
							children: "You don't operate"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 grid grid-cols-2 gap-2 text-secondary",
							children: [
								"Model hosting",
								"Retrieval",
								"Workers",
								"Scaling",
								"Tool execution",
								"Trace storage",
								"Release gates",
								"Channel adapters"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-md bg-elevated px-3 py-2",
								children: item
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/start",
							className: "mt-6 inline-block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Build your first agent" })
						})
					]
				})]
			})
		})
	] });
}
function PlatformPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MarketingFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Platform",
		title: "Infrastructure for agents that are allowed to act.",
		lede: "A gateway, a plan-execute-verify runtime, policy retrieval, approvals and a release gate. The control plane is what your team sees. The runtime is what Kivo runs."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-5 pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-lg border border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[640px] text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-card text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
						"",
						"Knowledge",
						"Actions",
						"Release"
					].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 font-medium",
						children: h
					}, h)) })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [[
					"Prompt-only chat",
					"Answers from memory",
					"Cannot touch orders",
					"Ships on vibes"
				], [
					"Kivo operations",
					"Answers from your policies",
					"Executes approved actions",
					"Fails closed"
				]].map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
					className: i === 1 ? "bg-elevated" : "",
					children: row.map((cell) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "border-t border-line px-4 py-3",
						children: cell
					}, cell))
				}, row[0])) })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-4 md:grid-cols-3",
			children: [
				["Gateway", "Auth, rate limits, input guards and output checks sit in front of every channel."],
				["Runtime", "Supervisor, planner, tools, verifier, human review and a final QA pass."],
				["Release gate", "Unauthorized refunds must stay at zero. A critical failure blocks deploy."]
			].map(([title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-lg border border-line bg-card p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-medium",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-secondary",
					children: text
				})]
			}, title))
		})]
	})] });
}
function SolutionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MarketingFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Solutions",
		title: "Built for brands that ship physical products.",
		lede: "Returns, refunds, cancellations and the question behind them. Kivo is for teams who need the agent to finish the operation, not open another ticket."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-6xl gap-4 px-5 pb-20 md:grid-cols-3",
		children: [
			{
				name: "D2C skincare",
				example: "AuraSkin",
				text: "Opened-product rules, damage photos, and refunds that stop at a rupee limit. The agent explains policy when it cannot act."
			},
			{
				name: "Quick commerce",
				example: "Same-day orders",
				text: "Missing items, late deliveries and replacements. Fast paths for policy questions. A person for high-value exceptions."
			},
			{
				name: "Marketplace sellers",
				example: "Multi-store",
				text: "One workspace per brand. Separate policies, tool permissions and keys. The same runtime underneath."
			}
		].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-lg border border-line bg-card p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-xs text-muted",
					children: item.example
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-lg font-medium",
					children: item.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-secondary",
					children: item.text
				})
			]
		}, item.name))
	})] });
}
function DevelopersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MarketingFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Developers",
		title: "An API for the agent. A gate for the money.",
		lede: "Chat with an agent, read the case, and approve the action. Secret keys stay on the server. The widget uses a publishable key."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-4 px-5 pb-20 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "overflow-x-auto rounded-lg border border-line bg-card p-5 font-mono text-xs leading-relaxed text-secondary",
			children: `POST /v1/agents/support/chat
Authorization: Bearer kivo_live_...

{
  "message": "Where is order #3812?",
  "customer": { "email": "priya@example.com" }
}`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg border border-line bg-card p-5 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-medium",
					children: "What comes back"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-secondary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The customer-facing message." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Structured events: intent, tools, sources, policy, latency." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No chain-of-thought. If a refund needs a person, status is waiting for approval." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-secondary",
					children: [
						"Widget installs use ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-fg",
							children: "pk_live_"
						}),
						". Never put",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-fg",
							children: "kivo_live_"
						}),
						" in browser code."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/app/api-keys",
					className: "mt-5 inline-block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						children: "Open API keys"
					})
				})
			]
		})]
	})] });
}
function PricingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MarketingFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Pricing",
		title: "Pay for a control plane, not a cluster.",
		lede: "Start in sandbox with mock tools. Move a version to production only after the suite passes."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-6xl gap-4 px-5 pb-20 lg:grid-cols-3",
		children: [
			{
				name: "Sandbox",
				price: "Free",
				detail: "Mock tools. One workspace. Full evaluation suite. No live charges.",
				points: [
					"Support agent template",
					"Policy knowledge",
					"Release gate",
					"Web widget preview"
				]
			},
			{
				name: "Production",
				price: "₹79,000",
				detail: "per month. Hosted runtime for a commerce brand.",
				points: [
					"Shopify, Stripe, Gmail",
					"Approval queue",
					"Chat, email, API",
					"Observability"
				]
			},
			{
				name: "Scale",
				price: "Custom",
				detail: "Multiple brands, voice preview and a shared release process.",
				points: [
					"Extra workspaces",
					"Voice sandbox",
					"SSO-ready members",
					"Dedicated limits"
				]
			}
		].map((tier) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "flex flex-col rounded-lg border border-line bg-card p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-medium",
					children: tier.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 text-3xl font-medium tracking-tight",
					children: tier.price
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-secondary",
					children: tier.detail
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-2 text-sm text-secondary",
					children: tier.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: point }, point))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/start",
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: tier.name === "Production" ? "primary" : "secondary",
						className: "w-full",
						children: "Start building"
					})
				})
			]
		}, tier.name))
	})] });
}
function DocsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MarketingFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Docs",
		title: "How Kivo is supposed to behave.",
		lede: "Short reference for the control plane. The runtime plans, calls tools, verifies, and either answers or waits."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-6xl gap-3 px-5 pb-20 md:grid-cols-2",
		children: [
			["Agents", "A versioned worker with instructions, knowledge, actions and a release state."],
			["Actions", "Shopify, Stripe and Gmail tools. Each one has a timeout, a retry count and an approval rule."],
			["Knowledge", "Policies and docs are retrieved per question. Answers can show the section they used."],
			["Evaluations", "Golden conversations, a 39-query retrieval check, and a release gate that counts unauthorized refunds."],
			["Approvals", "Above the workspace limit the runtime stops and waits. Nothing is marked refunded until a person allows it."],
			["Traces", "Intent, risk, tool calls, sources, verifier, latency and cost. Not the model's private reasoning."],
			["Environments", "Sandbox uses mock tools. Production keys stay refused until the gate is green."],
			["Channels", "API and web widget first. Email through Gmail. Voice is a sandbox preview."]
		].map(([title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			id: title.toLowerCase(),
			className: "rounded-lg border border-line bg-card p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-medium",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-secondary",
				children: text
			})]
		}, title))
	})] });
}
//#endregion
export { ProductPage as a, PricingPage as i, DocsPage as n, SolutionsPage as o, PlatformPage as r, DevelopersPage as t };
