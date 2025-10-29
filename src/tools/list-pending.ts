import { join } from "node:path";
import type { ToolDefinition } from "../types/tool";
import { ListPendingOutput } from "../shapes/list-pending";
import { dumpDirectory } from "../utils/dump-directory";
import { env } from "../env";

export const listPendingTool: ToolDefinition = {
  name: "ListPending",
  title: "List Pending Content",
  description: "Get a list of file paths for files that are pending organization",
  outputSchema: ListPendingOutput,
  handler: async () => {
    return {
      structuredContent: {
        pendingFiles: await dumpDirectory({
          recursive: true,
          returnFullPath: false,
          directory: join(env.DATA_DIRECTORY, "pending"),
        }),
      },
      content: [],
    };
  },
};
