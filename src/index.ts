import { join, extname } from "node:path";
import { createServer } from "node:http";
import { mkdir, rename } from "node:fs/promises";

import { dumpDirectory } from "./utils/dump-directory";

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ListPendingOutput } from "./shapes/list-pending";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { ListShowsOutput } from "./shapes/list-shows";
import { ListMoviesOutput } from "./shapes/list-movies";
import { CreateShowEpisodeInput, CreateShowEpisodeOutput } from "./shapes/create-show-episode";
import { CreateMovieInput, CreateMovieOutput } from "./shapes/create-movie";

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

mcp.registerTool("ListMovies", {
  title: "List Movies",
  description: "Get a list of movies in the library",
  outputSchema: ListMoviesOutput,
}, async () => {
  const files = await dumpDirectory({
    recursive: false,
    returnFullPath: false,
    directory: join(DATA_DIRECTORY_PATH, "movies"),
  });

  return {
    content: [],
    structuredContent: { movies: files }
  }
})

mcp.registerTool("CreateShowEpisode", {
  title: "Create Show Episode",
  description: "Move a file to the shows library with proper organization",
  inputSchema: CreateShowEpisodeInput,
  outputSchema: CreateShowEpisodeOutput,
}, async (input) => {
  const { name, year, seasonNumber, episodeNumber, sourceFilePath, identifier } = input;

  const fileExtension = extname(sourceFilePath);

  let showFolderName = name;
  if (year) {
    showFolderName += ` (${year})`;
  }
  if (identifier) {
    showFolderName += ` [${identifier}]`;
  }

  const seasonFolder = `Season ${String(seasonNumber).padStart(2, '0')}`;

  const paddedSeason = String(seasonNumber).padStart(2, '0');
  const paddedEpisode = String(episodeNumber).padStart(2, '0');
  const episodeFilename = `${name} S${paddedSeason}E${paddedEpisode}${fileExtension}`;

  const showDirectory = join(DATA_DIRECTORY_PATH, "shows", showFolderName, seasonFolder);

  await mkdir(showDirectory, { recursive: true });

  const destinationPath = join(showDirectory, episodeFilename);

  await rename(sourceFilePath, destinationPath);

  return {
    content: [],
    structuredContent: { destinationPath }
  };
})

mcp.registerTool("CreateMovie", {
  title: "Create Movie",
  description: "Move a file to the movies library with proper naming",
  inputSchema: CreateMovieInput,
  outputSchema: CreateMovieOutput,
}, async (input) => {
  const { name, year, sourceFilePath, identifier } = input;

  const fileExtension = extname(sourceFilePath);

  let movieFilename = `${name} (${year})`;
  if (identifier) {
    movieFilename += ` [${identifier}]`;
  }
  movieFilename += fileExtension;

  const moviesDirectory = join(DATA_DIRECTORY_PATH, "movies");

  await mkdir(moviesDirectory, { recursive: true });

  const destinationPath = join(moviesDirectory, movieFilename);

  await rename(sourceFilePath, destinationPath);

  return {
    content: [],
    structuredContent: { destinationPath }
  };
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
