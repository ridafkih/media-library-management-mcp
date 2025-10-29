import { join } from "node:path";
import type { ToolDefinition } from "../types/tool";
import { ListShowsOutput } from "../shapes/list-shows";
import { dumpDirectory } from "../utils/dump-directory";
import { ShowName, SeasonSet } from "../types/common";

export const listShowsTool: ToolDefinition = {
  name: "ListShows",
  title: "List Pending Content",
  description: "Get a list of file paths for files that are pending organization",
  outputSchema: ListShowsOutput,
  handler: async () => {
    const DATA_DIRECTORY_PATH = join(import.meta.dir, "..", "..", ".playground");
    const showsMap = new Map<ShowName, SeasonSet>();

    const files = await dumpDirectory({
      recursive: true,
      returnFullPath: false,
      directory: join(DATA_DIRECTORY_PATH, "shows"),
    });

    for (const file of files) {
      const [seriesName, seasonName] = file.split("/");

      if (!seriesName) {
        throw Error(`seriesName was not found for file path ${file}`);
      }

      const seasonSet = showsMap.get(seriesName) || new Set();
      if (seasonName) seasonSet.add(seasonName);
      showsMap.set(seriesName, seasonSet);
    }

    const shows = Array.from(showsMap).map(([name, seasons]) => ({
      name,
      seasons: [...seasons],
    }));

    return {
      content: [],
      structuredContent: { shows },
    };
  },
};
