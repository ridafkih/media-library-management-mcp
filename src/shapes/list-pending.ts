import z, { type ZodRawShape } from "zod";
import { LIST_PENDING_OUTPUT_DESCRIBE__PENDING_FILES, LIST_PENDING_OUTPUT_DESCRIBE__PENDING_FILES__ENTRY } from "../shape-metadata";

export const ListPendingOutput: ZodRawShape = {
  pendingFiles: z.array(
    z.string().describe(LIST_PENDING_OUTPUT_DESCRIBE__PENDING_FILES__ENTRY)
  )
  .describe(LIST_PENDING_OUTPUT_DESCRIBE__PENDING_FILES)
}