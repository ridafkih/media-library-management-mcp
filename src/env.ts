import arkenv from "arkenv";
import { logger } from "./logger";

export const env = arkenv({
  OMDB_API_KEY: "string",
  MCP_SERVER_PORT: "string.integer",
  DATA_DIRECTORY: "string",
})

logger.addSecrets([env.OMDB_API_KEY]);
logger.log("environment loaded", JSON.stringify({
  OMDB_API_KEY: env.OMDB_API_KEY,
  MCP_SERVER_PORT: env.MCP_SERVER_PORT,
  DATA_DIRECTORY: env.DATA_DIRECTORY,
}, null, 0))
