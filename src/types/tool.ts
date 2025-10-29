import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export type ToolDefinition = Parameters<McpServer["registerTool"]>[1] & {
  name: string;
  handler: Parameters<McpServer["registerTool"]>[2]
}
