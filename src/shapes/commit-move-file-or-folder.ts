import z, { type ZodRawShape } from "zod"
import { COMMIT_MOVE_FILE_OR_FOLDER_INPUT_DESCRIBE__IDENTIFIER, COMMIT_MOVE_FILE_OR_FOLDER_OUTPUT_DESCRIBE__PATH, COMMIT_MOVE_FILE_OR_FOLDER_OUTPUT_DESCRIBE__CONTENTS, COMMIT_MOVE_FILE_OR_FOLDER_OUTPUT_DESCRIBE__CONTENTS__ENTRY } from "../constants/descriptions"

export const CommitMoveFileOrFolderInput: ZodRawShape = {
  identifier: z.string().describe(COMMIT_MOVE_FILE_OR_FOLDER_INPUT_DESCRIBE__IDENTIFIER)
}

export const CommitMoveFileOrFolderOutput: ZodRawShape = {
  path: z.string().describe(COMMIT_MOVE_FILE_OR_FOLDER_OUTPUT_DESCRIBE__PATH),
  contents: z.array(
    z.string().describe(COMMIT_MOVE_FILE_OR_FOLDER_OUTPUT_DESCRIBE__CONTENTS__ENTRY)
  ).nullable().describe(COMMIT_MOVE_FILE_OR_FOLDER_OUTPUT_DESCRIBE__CONTENTS),
}
