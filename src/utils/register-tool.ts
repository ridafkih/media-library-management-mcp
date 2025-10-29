import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { ToolDefinition } from "../types/tool";
import { logger } from "../logger";

export const registerTool = (
  mcpServer: McpServer,
  { name, handler, ...options }: ToolDefinition
) => {
  logger.log(`registering tool '${name}'`)
  return mcpServer.registerTool(name, options, (args, extra) => {
    logger.debug(`calling '${name}' with ${JSON.stringify(args, null, 0)}`)
    const returnValue = handler(args, extra);
    logger.debug(`tool '${name}' returned ${JSON.stringify(returnValue, null, 0)}`)
    return returnValue;
  });
};
