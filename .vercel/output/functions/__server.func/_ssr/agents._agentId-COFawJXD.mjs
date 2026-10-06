import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as AgentDetail } from "./build-Byp4Dwf3.mjs";
import { n as Route } from "./router-jy0Qwcsn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/agents._agentId-COFawJXD.js
var import_jsx_runtime = require_jsx_runtime();
function AgentRoute() {
	const { agentId } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentDetail, { agentId });
}
//#endregion
export { AgentRoute as component };
