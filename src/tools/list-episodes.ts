import { join } from "node:path";
import type { ToolDefinition } from "../types/tool";
import { ListEpisodesInput, ListEpisodesOutput } from "../shapes/list-episodes";
import { dumpDirectory } from "../utils/dump-directory";
import { env } from "../env";

export const listEpisodesTool: ToolDefinition = {
  name: "ListEpisodes",
  title: "List Episodes",
  description:
    "List locally hosted episodes for a specific show and season. The list may not be inclusive of all episodes in the series.",
  inputSchema: ListEpisodesInput,
  outputSchema: ListEpisodesOutput,
  handler: async (input) => {
    const { showName, seasonNumber } = input;

    const seasonFolder = `Season ${String(seasonNumber).padStart(2, "0")}`;

    const showsDirectory = join(env.DATA_DIRECTORY, "shows");
    const allShows = await dumpDirectory({
      recursive: false,
      returnFullPath: false,
      directory: showsDirectory,
    });

    const matchingShow = allShows.find((show) => {
      const baseName = show.split(" (")[0];
      return baseName === showName || show === showName;
    });

    if (!matchingShow) {
      throw new Error(`Show "${showName}" not found`);
    }

    const seasonPath = join(showsDirectory, matchingShow, seasonFolder);

    const episodes = await dumpDirectory({
      recursive: false,
      returnFullPath: false,
      directory: seasonPath,
    });

    return {
      content: [],
      structuredContent: { episodes },
    };
  },
};
