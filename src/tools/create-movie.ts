import { join, extname } from "node:path";
import { mkdir, rename } from "node:fs/promises";
import type { ToolDefinition } from "../types/tool";
import { CreateMovieInput, CreateMovieOutput } from "../shapes/create-movie";

const DATA_DIRECTORY_PATH = join(import.meta.dir, "..", "..", ".playground");

const validateString = (value: unknown, fieldName: string): string => {
  if (typeof value !== "string") {
    throw Error(`${fieldName} must be a string`);
  }
  return value;
};

const formatMovieFilename = (
  name: string,
  year: number | undefined,
  identifier: string | undefined,
  extension: string
): string => {
  const parts = [name];
  if (year) parts.push(`(${year})`);
  if (identifier) parts.push(`[${identifier}]`);
  return parts.join(" ") + extension;
};

const buildMoviesDirectory = (): string =>
  join(DATA_DIRECTORY_PATH, "movies");

const moveFile = async (source: string, destination: string): Promise<void> => {
  const directory = join(destination, "..");
  await mkdir(directory, { recursive: true });
  await rename(source, destination);
};

export const createMovieTool: ToolDefinition = {
  name: "CreateMovie",
  title: "Create Movie",
  description: "Move a file to the movies library with proper naming",
  inputSchema: CreateMovieInput,
  outputSchema: CreateMovieOutput,
  handler: async (input) => {
    const { name, year, sourceFilePath, identifier } = input;

    const validatedSource = validateString(sourceFilePath, "sourceFilePath");

    const extension = extname(validatedSource);
    const movieFilename = formatMovieFilename(
      name as string,
      year as number | undefined,
      identifier as string | undefined,
      extension
    );

    const moviesDirectory = buildMoviesDirectory();
    const destinationPath = join(moviesDirectory, movieFilename);

    await moveFile(validatedSource, destinationPath);

    return {
      content: [],
      structuredContent: { destinationPath },
    };
  },
};
