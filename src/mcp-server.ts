import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { transport } from "./transport";

const mcpServer = new McpServer({
  name: "Content Management",
  version: "1.0.0",
});

await mcpServer.connect(transport);

export { mcpServer };
