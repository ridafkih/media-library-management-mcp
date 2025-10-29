import z, { type ZodRawShape } from "zod";
import { CREATE_SHOW_EPISODE_INPUT_DESCRIBE__NAME, CREATE_SHOW_EPISODE_INPUT_DESCRIBE__YEAR, CREATE_SHOW_EPISODE_INPUT_DESCRIBE__SEASON_NUMBER, CREATE_SHOW_EPISODE_INPUT_DESCRIBE__EPISODE_NUMBER, CREATE_SHOW_EPISODE_INPUT_DESCRIBE__SOURCE_FILE_PATH, CREATE_SHOW_EPISODE_INPUT_DESCRIBE__IDENTIFIER, CREATE_SHOW_EPISODE_OUTPUT_DESCRIBE__DESTINATION_PATH } from "../constants/descriptions";

export const CreateShowEpisodeInput: ZodRawShape = {
  name: z.string().describe(CREATE_SHOW_EPISODE_INPUT_DESCRIBE__NAME),
  year: z.number().int().min(1888).max(2100).optional().describe(CREATE_SHOW_EPISODE_INPUT_DESCRIBE__YEAR),
  seasonNumber: z.number().int().min(0).describe(CREATE_SHOW_EPISODE_INPUT_DESCRIBE__SEASON_NUMBER),
  episodeNumber: z.number().int().positive().describe(CREATE_SHOW_EPISODE_INPUT_DESCRIBE__EPISODE_NUMBER),
  sourceFilePath: z.string().describe(CREATE_SHOW_EPISODE_INPUT_DESCRIBE__SOURCE_FILE_PATH),
  identifier: z.string().optional().describe(CREATE_SHOW_EPISODE_INPUT_DESCRIBE__IDENTIFIER)
};

export const CreateShowEpisodeOutput: ZodRawShape = {
  destinationPath: z.string().describe(CREATE_SHOW_EPISODE_OUTPUT_DESCRIBE__DESTINATION_PATH)
};
