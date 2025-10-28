import z, { type ZodRawShape } from "zod"
import { COMMIT_PENDING_FILE_RENAME_INPUT_DESCRIBE__IDENTIFIER, COMMIT_PENDING_FILE_RENAME_OUTPUT_DESCRIBE__FILE_PATH } from "../shape-metadata"

export const CommitPendingFileRenameInput: ZodRawShape = {
  identifier: z.string().describe(COMMIT_PENDING_FILE_RENAME_INPUT_DESCRIBE__IDENTIFIER)
}

export const CommitPendingFileRenameOutput: ZodRawShape = {
  filePath: z.string().describe(COMMIT_PENDING_FILE_RENAME_OUTPUT_DESCRIBE__FILE_PATH)
}
