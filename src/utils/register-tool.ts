import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { ToolDefinition } from "../types/tool";
import { logger } from "../logger";

export const registerTool = (
  mcpServer: McpServer,
  { name, handler, ...options }: ToolDefinition
) => {
  logger.debug(`registering tool '${name}'`)
  return mcpServer.registerTool(name, options, (args, extra) => {
    logger.info(`called tool '${name}`)
    logger.debug(`tool '${name}' was called with arguments ${JSON.stringify(args, null, 0)}`)
    const returnValue = handler(args, extra);
    logger.debug(`tool '${name}' returned ${JSON.stringify(returnValue, null, 0)}`)
    return returnValue;
  });
};
