import { join } from "node:path";
import { createServer } from "node:http";

import { dumpDirectory } from "./utils/dump-directory";

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ListPendingOutput } from "./shapes/list-pending";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { ListShowsOutput } from "./shapes/list-shows";

type ShowName = string;
type SeasonSet = Set<string>;

const DATA_DIRECTORY_PATH = join(import.meta.dir, "..", ".playground");

const mcp = new McpServer({
  name: "Content Management",
  version: "1.0.0",
})

mcp.registerTool("ListPending", {
  title: "List Pending Content",
  description: "Get a list of file paths for files that are pending organization",
  outputSchema: ListPendingOutput,
}, async () => {
  return {
    structuredContent: {
      pendingFiles: await dumpDirectory({
        recursive: true,
        returnFullPath: true,
        directory: join(DATA_DIRECTORY_PATH, "pending"),
      }),
    },
    content: [],
  };
})

mcp.registerTool("ListShows", {
  title: "List Pending Content",
  description: "Get a list of file paths for files that are pending organization",
  outputSchema: ListShowsOutput,
}, async () => {
  const showsMap = new Map<ShowName, SeasonSet>();

  const files = await dumpDirectory({
    recursive: true,
    returnFullPath: false,
    directory: join(DATA_DIRECTORY_PATH, "shows"),
  });

  for (const file of files) {
    const [seriesName, seasonName] = file.split("/");

    if (!seriesName) {
      throw Error(`seriesName was not found for file path ${file}`)
    }

    const seasonSet = showsMap.get(seriesName) || new Set();
    if (seasonName) seasonSet.add(seasonName);
    showsMap.set(seriesName, seasonSet);
  }

  const shows = Array.from(showsMap).map(([name, seasons]) => ({ name, seasons: [...seasons] }));
  
  return {
    content: [],
    structuredContent: { shows }
  }
})

const transport = new StreamableHTTPServerTransport({
  sessionIdGenerator: undefined,
  enableJsonResponse: true,
});

await mcp.connect(transport);

const server = createServer((request, response) => {
  if (request.method !== "POST") {
    response.writeHead(401);
    response.end();
    return;
  }

  transport.handleRequest(request, response);
})

server.listen(3001, () => {
  console.log("::3001")
})
