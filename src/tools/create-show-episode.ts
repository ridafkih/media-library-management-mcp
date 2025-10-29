import { join, extname } from "node:path";
import { mkdir, rename } from "node:fs/promises";
import type { ToolDefinition } from "../types/tool";
import {
  CreateShowEpisodeInput,
  CreateShowEpisodeOutput,
} from "../shapes/create-show-episode";

const DATA_DIRECTORY_PATH = join(import.meta.dir, "..", "..", ".playground");

const validateString = (value: unknown, fieldName: string): string => {
  if (typeof value !== "string") {
    throw Error(`${fieldName} must be a string`);
  }
  return value;
};

const formatShowFolderName = (
  name: string,
  year?: number,
  identifier?: string
): string => {
  const parts = [name];
  if (year) parts.push(`(${year})`);
  if (identifier) parts.push(`[${identifier}]`);
  return parts.join(" ");
};

const formatSeasonFolder = (seasonNumber: number): string =>
  `Season ${String(seasonNumber).padStart(2, "0")}`;

const formatEpisodeFilename = (
  name: string,
  seasonNumber: number,
  episodeNumber: number,
  extension: string
): string => {
  const season = String(seasonNumber).padStart(2, "0");
  const episode = String(episodeNumber).padStart(2, "0");
  return `${name} S${season}E${episode}${extension}`;
};

const buildShowDirectory = (
  showFolder: string,
  seasonFolder: string
): string => join(DATA_DIRECTORY_PATH, "shows", showFolder, seasonFolder);

const moveFile = async (source: string, destination: string): Promise<void> => {
  const directory = join(destination, "..");
  await mkdir(directory, { recursive: true });
  await rename(source, destination);
};

export const createShowEpisodeTool: ToolDefinition = {
  name: "CreateShowEpisode",
  title: "Create Show Episode",
  description: "Move a file to the shows library with proper organization",
  inputSchema: CreateShowEpisodeInput,
  outputSchema: CreateShowEpisodeOutput,
  handler: async (input) => {
    const { name, year, seasonNumber, episodeNumber, sourceFilePath, identifier } = input;

    const validatedName = validateString(name, "name");
    const validatedSource = validateString(sourceFilePath, "sourceFilePath");

    const extension = extname(validatedSource);
    const showFolder = formatShowFolderName(validatedName, year as number | undefined, identifier as string | undefined);
    const seasonFolder = formatSeasonFolder(seasonNumber as number);
    const episodeFilename = formatEpisodeFilename(
      validatedName,
      seasonNumber as number,
      episodeNumber as number,
      extension
    );

    const showDirectory = buildShowDirectory(showFolder, seasonFolder);
    const destinationPath = join(showDirectory, episodeFilename);

    await moveFile(validatedSource, destinationPath);

    return {
      content: [],
      structuredContent: { destinationPath },
    };
  },
};
