import { join } from "node:path";
import type { ToolDefinition } from "../types/tool";
import { ListPendingOutput } from "../shapes/list-pending";
import { dumpDirectory } from "../utils/dump-directory";

export const listPendingTool: ToolDefinition = {
  name: "ListPending",
  title: "List Pending Content",
  description: "Get a list of file paths for files that are pending organization",
  outputSchema: ListPendingOutput,
  handler: async () => {
    const DATA_DIRECTORY_PATH = join(import.meta.dir, "..", "..", ".playground");

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
  },
};
