import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { ToolDefinition } from "../types/tool";

export const registerTool = (
  mcpServer: McpServer,
  { name, handler, ...options }: ToolDefinition
) => {
  return mcpServer.registerTool(name, options, handler);
};
