import { join, extname } from "node:path";
import { mkdir, rename, access } from "node:fs/promises";
import type { ToolDefinition } from "../types/tool";
import { CreateMovieInput, CreateMovieOutput } from "../shapes/create-movie";
import { env } from "../env";

const validateString = (value: unknown, fieldName: string): string => {
  if (typeof value !== "string") {
    throw Error(`${fieldName} must be a string`);
  }
  return value;
};

const validateFileExists = async (filePath: string): Promise<void> => {
  try {
    await access(filePath);
  } catch {
    throw Error(`File does not exist in pending directory: ${filePath}`);
  }
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
  join(env.DATA_DIRECTORY, "movies");

const buildPendingDirectory = (): string =>
  join(env.DATA_DIRECTORY, "pending");

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
    const { name, year, filePathFromPending, identifier } = input;

    const validatedSource = validateString(filePathFromPending, "filePathFromPending");

    const pendingDirectory = buildPendingDirectory();
    const fullSourcePath = join(pendingDirectory, validatedSource);

    await validateFileExists(fullSourcePath);

    const extension = extname(validatedSource);
    const movieFilename = formatMovieFilename(
      name,
      year,
      identifier,
      extension
    );

    const moviesDirectory = buildMoviesDirectory();
    const destinationPath = join(moviesDirectory, movieFilename);

    await moveFile(fullSourcePath, destinationPath);

    return {
      content: [],
      structuredContent: { destinationPath },
    };
  },
};
