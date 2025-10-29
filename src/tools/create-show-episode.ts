import { join, extname } from "node:path";
import { mkdir, rename } from "node:fs/promises";
import type { ToolDefinition } from "../types/tool";
import {
  CreateShowEpisodeInput,
  CreateShowEpisodeOutput,
} from "../shapes/create-show-episode";

export const createShowEpisodeTool: ToolDefinition = {
  name: "CreateShowEpisode",
  title: "Create Show Episode",
  description: "Move a file to the shows library with proper organization",
  inputSchema: CreateShowEpisodeInput,
  outputSchema: CreateShowEpisodeOutput,
  handler: async (input) => {
    const DATA_DIRECTORY_PATH = join(import.meta.dir, "..", "..", ".playground");
    const { name, year, seasonNumber, episodeNumber, sourceFilePath, identifier } = input;

    if (typeof sourceFilePath !== 'string') {
      throw Error("sourceFilePath must be a string")
    }
    
    const fileExtension = extname(sourceFilePath);

    if (typeof name !== 'string') {
      throw Error("name must be a string")
    }
    
    let showFolderName = name;
    if (year) {
      showFolderName += ` (${year})`;
    }
    if (identifier) {
      showFolderName += ` [${identifier}]`;
    }

    const seasonFolder = `Season ${String(seasonNumber).padStart(2, "0")}`;

    const paddedSeason = String(seasonNumber).padStart(2, "0");
    const paddedEpisode = String(episodeNumber).padStart(2, "0");
    const episodeFilename = `${name} S${paddedSeason}E${paddedEpisode}${fileExtension}`;

    const showDirectory = join(
      DATA_DIRECTORY_PATH,
      "shows",
      showFolderName,
      seasonFolder
    );

    await mkdir(showDirectory, { recursive: true });

    const destinationPath = join(showDirectory, episodeFilename);

    await rename(sourceFilePath, destinationPath);

    return {
      content: [],
      structuredContent: { destinationPath },
    };
  },
};
