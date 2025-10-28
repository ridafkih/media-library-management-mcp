import z, { type ZodRawShape } from "zod"
import { STAGE_PENDING_FILE_RENAME_INPUT_DESCRIBE__FROM, STAGE_PENDING_FILE_RENAME_INPUT_DESCRIBE__TO, STAGE_PENDING_FILE_RENAME_OUTPUT_DESCRIBE__IDENTIFIER, STAGE_PENDING_FILE_RENAME_OUTPUT_DESCRIBE__FILE_PATH } from "../shape-metadata"

export const StagePendingFileRenameInput: ZodRawShape = {
  from: z.string().describe(STAGE_PENDING_FILE_RENAME_INPUT_DESCRIBE__FROM),
  to: z.string().describe(STAGE_PENDING_FILE_RENAME_INPUT_DESCRIBE__TO)
}

export const StagePendingFileRenameOutput: ZodRawShape = {
  identifier: z.string().describe(STAGE_PENDING_FILE_RENAME_OUTPUT_DESCRIBE__IDENTIFIER),
  filePath: z.string().describe(STAGE_PENDING_FILE_RENAME_OUTPUT_DESCRIBE__FILE_PATH)
}
