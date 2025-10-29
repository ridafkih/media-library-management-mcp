import { join } from "node:path";
import type { ToolDefinition } from "../types/tool";
import { ListMoviesOutput } from "../shapes/list-movies";
import { dumpDirectory } from "../utils/dump-directory";

export const listMoviesTool: ToolDefinition = {
  name: "ListMovies",
  title: "List Movies",
  description: "Get a list of movies in the library",
  outputSchema: ListMoviesOutput,
  handler: async () => {
    const DATA_DIRECTORY_PATH = join(import.meta.dir, "..", "..", ".playground");

    const files = await dumpDirectory({
      recursive: false,
      returnFullPath: false,
      directory: join(DATA_DIRECTORY_PATH, "movies"),
    });

    return {
      content: [],
      structuredContent: { movies: files },
    };
  },
};
