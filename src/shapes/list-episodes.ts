import z, { type ZodRawShape } from "zod";
import { LIST_EPISODES_INPUT_DESCRIBE__SHOW_NAME, LIST_EPISODES_INPUT_DESCRIBE__SEASON_NUMBER, LIST_EPISODES_OUTPUT_DESCRIBE__EPISODES, LIST_EPISODES_OUTPUT_DESCRIBE__EPISODES__ENTRY } from "../constants/descriptions";

export const ListEpisodesInput: ZodRawShape = {
  showName: z.string().describe(LIST_EPISODES_INPUT_DESCRIBE__SHOW_NAME),
  seasonNumber: z.number().int().min(0).describe(LIST_EPISODES_INPUT_DESCRIBE__SEASON_NUMBER)
};

export const ListEpisodesOutput: ZodRawShape = {
  episodes: z.array(
    z.string().describe(LIST_EPISODES_OUTPUT_DESCRIBE__EPISODES__ENTRY)
  )
  .describe(LIST_EPISODES_OUTPUT_DESCRIBE__EPISODES)
}
