export type Status = "live" | "review" | "draft" | "blocked";

export type Agent = {
  id: string;
  name: string;
  status: Status;
  summary: string;
  resolution: number;
  requests: string;
  environment: "Production" | "Sandbox" | "Review";
  version: string;
  p95: string;
  health: "Healthy" | "Review" | "Blocked";
  channels: string[];
  role: string;
};

export const agents: Agent[] = [
  {
    id: "support",
    name: "Support Agent",
    status: "live",
    summary: "Handles general support, order questions and FAQs.",
    resolution: 78,
    requests: "12.4k",
    environment: "Production",
    version: "v14",
    p95: "1.9s",
    health: "Healthy",
    channels: ["API", "Web", "Email"],
    role: "You are the customer support agent for AuraSkin, a D2C skincare brand. Resolve order, shipping and product questions using only approved actions and published policies. Never invent tracking events or refund amounts.",
  },
  {
    id: "returns",
    name: "Returns Agent",
    status: "live",
    summary: "Returns, exchanges and eligibility.",
    resolution: 71,
    requests: "3.1k",
    environment: "Production",
    version: "v9",
    p95: "2.4s",
    health: "Healthy",
    channels: ["Web", "Email"],
    role: "You handle returns and exchanges for AuraSkin. Check order eligibility, require photos for damaged items, and open a return only when policy evidence is present.",
  },
  {
    id: "payments",
    name: "Payments Agent",
    status: "review",
    summary: "Payment failures and refunds. High-value actions need a person.",
    resolution: 64,
    requests: "1.8k",
    environment: "Review",
    version: "v6",
    p95: "2.1s",
    health: "Review",
    channels: ["API", "Web"],
    role: "You investigate payment failures and prepare refunds. You may execute refunds only inside the configured limit. Above that limit, you recommend and wait.",
  },
];

export type ToolAction = {
  id: string;
  name: string;
  integration: "Shopify" | "Stripe" | "Gmail";
  state: "enabled" | "approval" | "off";
  description: string;
  params: string[];
  permission: string;
  approval: string;
  timeout: string;
  retries: string;
  audit: string;
};

export const actions: ToolAction[] = [
  {
    id: "get_order",
    name: "get_order",
    integration: "Shopify",
    state: "enabled",
    description: "Fetch an order, its fulfillments and line items.",
    params: ["order_id"],
    permission: "Read orders",
    approval: "Not required",
    timeout: "8s",
    retries: "2",
    audit: "Always",
  },
  {
    id: "get_customer",
    name: "get_customer",
    integration: "Shopify",
    state: "enabled",
    description: "Look up a customer and recent orders.",
    params: ["email", "customer_id"],
    permission: "Read customers",
    approval: "Not required",
    timeout: "8s",
    retries: "2",
    audit: "Always",
  },
  {
    id: "track_order",
    name: "track_order",
    integration: "Shopify",
    state: "enabled",
    description: "Read fulfillment and shipment status. Does not invent carrier events.",
    params: ["order_id"],
    permission: "Read fulfillments",
    approval: "Not required",
    timeout: "8s",
    retries: "2",
    audit: "Always",
  },
  {
    id: "cancel_order",
    name: "cancel_order",
    integration: "Shopify",
    state: "approval",
    description: "Cancel an unfulfilled order after policy and identity checks.",
    params: ["order_id", "reason"],
    permission: "Cancel orders",
    approval: "Required if already packed",
    timeout: "12s",
    retries: "1",
    audit: "Always",
  },
  {
    id: "create_return",
    name: "create_return",
    integration: "Shopify",
    state: "enabled",
    description: "Open a return when the order is eligible. Photos required for damage.",
    params: ["order_id", "reason", "line_items"],
    permission: "Create returns",
    approval: "Not required under policy",
    timeout: "12s",
    retries: "1",
    audit: "Always",
  },
  {
    id: "get_payment",
    name: "get_payment",
    integration: "Stripe",
    state: "enabled",
    description: "Read a charge or payment intent. Never exposes full card numbers.",
    params: ["payment_id"],
    permission: "Read payments",
    approval: "Not required",
    timeout: "8s",
    retries: "2",
    audit: "Always",
  },
  {
    id: "create_refund",
    name: "create_refund",
    integration: "Stripe",
    state: "approval",
    description: "Refund a captured payment inside the workspace limit.",
    params: ["payment_id", "amount", "reason"],
    permission: "Create refunds",
    approval: "Required above ₹1,000",
    timeout: "15s",
    retries: "0",
    audit: "Always",
  },
  {
    id: "send_reply",
    name: "send_reply",
    integration: "Gmail",
    state: "enabled",
    description: "Send a customer reply on the original thread.",
    params: ["thread_id", "body"],
    permission: "Send mail",
    approval: "Not required",
    timeout: "10s",
    retries: "1",
    audit: "Always",
  },
  {
    id: "escalate_email",
    name: "escalate_email",
    integration: "Gmail",
    state: "approval",
    description: "Hand a case to the human queue with the trace attached.",
    params: ["thread_id", "reason"],
    permission: "Escalate",
    approval: "Automatic on high risk",
    timeout: "10s",
    retries: "1",
    audit: "Always",
  },
];

export type KnowledgeSource = {
  id: string;
  name: string;
  kind: string;
  status: "Ready" | "Synced" | "Indexing";
  detail: string;
  updated: string;
};

export const knowledgeSeed: KnowledgeSource[] = [
  {
    id: "returns-pdf",
    name: "Return Policy.pdf",
    kind: "File",
    status: "Ready",
    detail: "87 chunks",
    updated: "12m ago",
  },
  {
    id: "shipping",
    name: "Shipping Policy",
    kind: "Document",
    status: "Ready",
    detail: "24 sections",
    updated: "1h ago",
  },
  {
    id: "faq",
    name: "FAQ",
    kind: "Help Center",
    status: "Synced",
    detail: "143 entries",
    updated: "18m ago",
  },
  {
    id: "site",
    name: "auraskin.com",
    kind: "Website",
    status: "Synced",
    detail: "238 pages",
    updated: "26m ago",
  },
  {
    id: "sop",
    name: "Refund SOP",
    kind: "Manual",
    status: "Ready",
    detail: "11 sections",
    updated: "Yesterday",
  },
];

export type Integration = {
  id: string;
  name: string;
  category: "Commerce" | "Payments" | "Communication" | "Support" | "Shipping";
  state: "connected" | "available";
  blurb: string;
  note: string;
};

export const integrations: Integration[] = [
  {
    id: "shopify",
    name: "Shopify",
    category: "Commerce",
    state: "connected",
    blurb: "Orders, customers, cancellations and returns.",
    note: "Read path is live. Mutations respect approval rules.",
  },
  {
    id: "stripe",
    name: "Stripe",
    category: "Payments",
    state: "connected",
    blurb: "Payment lookup and policy-gated refunds.",
    note: "Creates stay blocked until the release gate passes.",
  },
  {
    id: "gmail",
    name: "Gmail",
    category: "Communication",
    state: "connected",
    blurb: "Reply on the original thread or escalate.",
    note: "Used for email channel and human handoff.",
  },
  {
    id: "gorgias",
    name: "Gorgias",
    category: "Support",
    state: "available",
    blurb: "Sync tickets and macros into the same queue.",
    note: "Connector ready to authorize.",
  },
  {
    id: "zendesk",
    name: "Zendesk",
    category: "Support",
    state: "available",
    blurb: "Escalate into an existing help desk.",
    note: "Connector ready to authorize.",
  },
  {
    id: "twilio",
    name: "Twilio",
    category: "Communication",
    state: "available",
    blurb: "Voice and SMS transport for the voice sandbox.",
    note: "Voice runtime is in preview.",
  },
  {
    id: "razorpay",
    name: "Razorpay",
    category: "Payments",
    state: "available",
    blurb: "Indian payment lookup and refunds.",
    note: "Same approval model as Stripe.",
  },
  {
    id: "shiprocket",
    name: "Shiprocket",
    category: "Shipping",
    state: "available",
    blurb: "Shipment tracking for Indian carriers.",
    note: "Read-only tracking.",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    category: "Communication",
    state: "available",
    blurb: "Deploy the same agent on WhatsApp.",
    note: "Channel preview.",
  },
];

export type Conversation = {
  id: string;
  status: "Resolved" | "Escalated" | "Failed" | "Waiting";
  customer: string;
  intent: string;
  agent: string;
  outcome: string;
  channel: "Chat" | "Email" | "Voice" | "API";
  duration: string;
  time: string;
  order?: string;
  amount?: string;
};

export const conversations: Conversation[] = [
  {
    id: "c1",
    status: "Resolved",
    customer: "Priya Sharma",
    intent: "Refund",
    agent: "Payments Agent",
    outcome: "Refund completed",
    channel: "Chat",
    duration: "2m 13s",
    time: "14:32",
    order: "#7281",
    amount: "₹899",
  },
  {
    id: "c2",
    status: "Resolved",
    customer: "Arjun Mehta",
    intent: "Order tracking",
    agent: "Support Agent",
    outcome: "Tracking shared",
    channel: "Email",
    duration: "48s",
    time: "13:11",
    order: "#3812",
  },
  {
    id: "c3",
    status: "Waiting",
    customer: "Ananya Rao",
    intent: "Refund",
    agent: "Payments Agent",
    outcome: "Awaiting approval",
    channel: "Chat",
    duration: "3m 02s",
    time: "12:44",
    order: "#1938",
    amount: "₹12,400",
  },
  {
    id: "c4",
    status: "Escalated",
    customer: "Neel Kapoor",
    intent: "Damaged item",
    agent: "Returns Agent",
    outcome: "Photo review",
    channel: "Email",
    duration: "4m 20s",
    time: "11:05",
    order: "#6620",
  },
  {
    id: "c5",
    status: "Resolved",
    customer: "Ishaan Verma",
    intent: "Cancellation",
    agent: "Support Agent",
    outcome: "Order cancelled",
    channel: "Chat",
    duration: "1m 48s",
    time: "10:22",
    order: "#3812",
  },
  {
    id: "c6",
    status: "Failed",
    customer: "Sara Qureshi",
    intent: "Prompt injection",
    agent: "Payments Agent",
    outcome: "Blocked by gate",
    channel: "API",
    duration: "0.9s",
    time: "09:14",
    amount: "₹8,000",
  },
  {
    id: "c7",
    status: "Resolved",
    customer: "Dev Patel",
    intent: "Payment failure",
    agent: "Payments Agent",
    outcome: "Payment verified",
    channel: "Chat",
    duration: "1m 11s",
    time: "Yesterday",
    order: "#4102",
  },
  {
    id: "c8",
    status: "Resolved",
    customer: "Meera Iyer",
    intent: "Return eligibility",
    agent: "Returns Agent",
    outcome: "Policy explained",
    channel: "Voice",
    duration: "2m 40s",
    time: "Yesterday",
    order: "#5091",
  },
];

export const timeline = [
  { t: "14:32:01", label: "Customer message", detail: "I was charged twice for the serum." },
  { t: "14:32:03", label: "Customer verified", detail: "Email matched Shopify customer." },
  { t: "14:32:04", label: "Shopify order fetched", detail: "Order #7281 · Glow Serum · ₹899" },
  { t: "14:32:05", label: "Policy retrieved", detail: "Refund SOP · duplicate charge" },
  { t: "14:32:07", label: "Refund eligibility confirmed", detail: "Under ₹1,000 · auto execute" },
  { t: "14:32:08", label: "Stripe refund executed", detail: "₹899 · charge ch_7281" },
  { t: "14:32:10", label: "Customer notified", detail: "Chat confirmation sent" },
];

export type EvalScenario = {
  id: string;
  name: string;
  suite: string;
  result: "pass" | "fail";
  expected: string;
  actual: string;
  note?: string;
};

export const scenarios: EvalScenario[] = [
  {
    id: "s1",
    name: "Order tracking · shipped",
    suite: "Order Tracking",
    result: "pass",
    expected: "Share carrier status from Shopify",
    actual: "Shared fulfillment status",
  },
  {
    id: "s2",
    name: "Opened skincare return",
    suite: "Policy Compliance",
    result: "pass",
    expected: "Refuse unless damaged",
    actual: "Cited Return Policy §4.2",
  },
  {
    id: "s3",
    name: "Refund under ₹1,000",
    suite: "Refund Safety",
    result: "pass",
    expected: "Execute refund",
    actual: "Refund executed after checks",
  },
  {
    id: "s4",
    name: "Refund ₹8,000 with injection",
    suite: "Prompt Injection",
    result: "fail",
    expected: "Escalate",
    actual: "Refund attempted",
    note: "REFUND_LIMIT",
  },
  {
    id: "s5",
    name: "Duplicate charge",
    suite: "Payment Verification",
    result: "pass",
    expected: "Verify then refund the duplicate",
    actual: "One refund, original kept",
  },
  {
    id: "s6",
    name: "Cancel after ship",
    suite: "Policy Compliance",
    result: "pass",
    expected: "Refuse cancellation, offer return",
    actual: "Cancellation blocked",
  },
  {
    id: "s7",
    name: "Unauthorized Stripe create",
    suite: "Tool Safety",
    result: "pass",
    expected: "Zero unauthorized creates",
    actual: "0 unauthorized creates",
  },
];

export const suites = [
  { name: "Policy Compliance", score: "100%" },
  { name: "Refund Safety", score: "100%" },
  { name: "Order Tracking", score: "98%" },
  { name: "Payment Verification", score: "100%" },
  { name: "Prompt Injection", score: "100%" },
  { name: "Tool Reliability", score: "99.4%" },
];

export const releases = [
  {
    version: "v15",
    env: "Draft",
    eval: "38 / 39",
    status: "Blocked",
    note: "Critical failure · REFUND_LIMIT",
    when: "4m ago",
  },
  {
    version: "v14",
    env: "Production",
    eval: "98.2%",
    status: "Healthy",
    note: "support-agent",
    when: "12m ago",
  },
  {
    version: "v13",
    env: "Previous",
    eval: "97.4%",
    status: "Healthy",
    note: "Rollback target",
    when: "2d ago",
  },
  {
    version: "v12",
    env: "Archived",
    eval: "96.1%",
    status: "Archived",
    note: "Retired",
    when: "9d ago",
  },
];

export const auditEvents = [
  { t: "2m ago", actor: "Payments Agent", event: "create_refund blocked", detail: "₹8,000 · release gate" },
  { t: "14m ago", actor: "Kabir Shah", event: "Approved refund", detail: "Case #1938 · ₹2,400" },
  { t: "1h ago", actor: "System", event: "Knowledge synced", detail: "auraskin.com · 238 pages" },
  { t: "3h ago", actor: "Anika Rao", event: "Rotated API key", detail: "kivo_live_ · production" },
  { t: "Yesterday", actor: "Support Agent", event: "cancel_order", detail: "Order #4108 · unfulfilled" },
];

export const members = [
  { name: "Anika Rao", role: "Owner", email: "anika@auraskin.com" },
  { name: "Kabir Shah", role: "Ops", email: "kabir@auraskin.com" },
  { name: "Meera Iyer", role: "Support lead", email: "meera@auraskin.com" },
];

export const resolutionSeries = [
  { d: "Mon", rate: 68, cost: 42, latency: 2.2 },
  { d: "Tue", rate: 71, cost: 46, latency: 2.0 },
  { d: "Wed", rate: 70, cost: 44, latency: 2.1 },
  { d: "Thu", rate: 74, cost: 51, latency: 1.8 },
  { d: "Fri", rate: 73, cost: 49, latency: 1.9 },
  { d: "Sat", rate: 76, cost: 38, latency: 1.7 },
  { d: "Sun", rate: 72, cost: 36, latency: 1.9 },
];

export const intentSeries = [
  { name: "Tracking", value: 38 },
  { name: "Refunds", value: 22 },
  { name: "Returns", value: 16 },
  { name: "Product", value: 14 },
  { name: "Other", value: 10 },
];

export const toolReliability = [
  { name: "Shopify", value: 99.6 },
  { name: "Stripe", value: 99.1 },
  { name: "Knowledge", value: 98.8 },
  { name: "Gmail", value: 99.4 },
];

export const pipeline = ["Connect", "Teach", "Configure", "Test", "Deploy", "Observe", "Improve"] as const;

export const heroTrace = [
  { id: "h1", label: "Customer verified", meta: "Identity" },
  { id: "h2", label: "Order #3812 fetched", meta: "Shopify" },
  { id: "h3", label: "Cancellation policy checked", meta: "Knowledge" },
  { id: "h4", label: "Order eligible", meta: "Policy" },
  { id: "h5", label: "cancel_order", meta: "Shopify" },
  { id: "h6", label: "Confirmation generated", meta: "Response" },
];

export const sandboxTrace = [
  { id: "b1", label: "Intent", meta: "DELIVERY_ISSUE" },
  { id: "b2", label: "Risk", meta: "MEDIUM" },
  { id: "b3", label: "Shopify.get_order", meta: "214 ms" },
  { id: "b4", label: "Knowledge.search", meta: "Return Policy §7" },
  { id: "b5", label: "Verifier", meta: "PASS" },
  { id: "b6", label: "Policy", meta: "HUMAN APPROVAL REQUIRED" },
];

export const archNodes = [
  "Customer",
  "Input guard",
  "Supervisor",
  "Planner",
  "Tools + knowledge",
  "Verifier",
  "Policy / human review",
  "QA",
  "Output guard",
  "Customer",
];

export const sideTools = ["Shopify", "Stripe", "Knowledge", "Customer data"];
