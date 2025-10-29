import { join } from "node:path";
import type { ToolDefinition } from "../types/tool";
import { ListMoviesOutput } from "../shapes/list-movies";
import { dumpDirectory } from "../utils/dump-directory";
import { env } from "../env";

export const listMoviesTool: ToolDefinition = {
  name: "ListMovies",
  title: "List Movies",
  description: "Get a list of movies in the library",
  outputSchema: ListMoviesOutput,
  handler: async () => {

    const files = await dumpDirectory({
      recursive: false,
      returnFullPath: false,
      directory: join(env.DATA_DIRECTORY, "movies"),
    });

    return {
      content: [],
      structuredContent: { movies: files },
    };
  },
};
