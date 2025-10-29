import { listPendingTool } from "./tools/list-pending";
import { createMovieTool } from "./tools/create-movie";
import { createShowEpisodeTool } from "./tools/create-show-episode";
import { listEpisodesTool } from "./tools/list-episodes";
import { listMoviesTool } from "./tools/list-movies";
import { listShowsTool } from "./tools/list-shows";
import { searchContentDatabaseTool } from "./tools/search-content-database";

import { registerTool } from "./utils/register-tool";
import { transport } from "./transport";
import { mcpServer } from "./mcp-server";

registerTool(mcpServer, listPendingTool);
registerTool(mcpServer, listShowsTool);
registerTool(mcpServer, listMoviesTool);
registerTool(mcpServer, createShowEpisodeTool);
registerTool(mcpServer, createMovieTool);
registerTool(mcpServer, searchContentDatabaseTool);
registerTool(mcpServer, listEpisodesTool);
