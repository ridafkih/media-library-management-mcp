import { join, extname } from "node:path";
import { mkdir, rename } from "node:fs/promises";
import type { ToolDefinition } from "../types/tool";
import { CreateMovieInput, CreateMovieOutput } from "../shapes/create-movie";

export const createMovieTool: ToolDefinition = {
  name: "CreateMovie",
  title: "Create Movie",
  description: "Move a file to the movies library with proper naming",
  inputSchema: CreateMovieInput,
  outputSchema: CreateMovieOutput,
  handler: async (input) => {
    const DATA_DIRECTORY_PATH = join(import.meta.dir, "..", "..", ".playground");
    const { name, year, sourceFilePath, identifier } = input;

    if (typeof sourceFilePath !== 'string') {
      throw Error("sourceFilePath must be a string")
    }
    
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
      structuredContent: { destinationPath },
    };
  },
};
