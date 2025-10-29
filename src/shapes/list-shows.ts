import z, { type ZodRawShape } from "zod";
import { LIST_SHOWS_OUTPUT_DESCRIBE__SHOWS, LIST_SHOWS_OUTPUT_DESCRIBE__SHOWS__ENTRY, LIST_SHOWS_OUTPUT_DESCRIBE__SHOWS__ENTRY__NAME, LIST_SHOWS_OUTPUT_DESCRIBE__SHOWS__ENTRY__SEASONS, LIST_SHOWS_OUTPUT_DESCRIBE__SHOWS__ENTRY__SEASONS__ENTRY } from "../constants/descriptions";

export const ListShowsOutput: ZodRawShape = {
  shows: z.array(
    z.object({
      name: z.string().describe(LIST_SHOWS_OUTPUT_DESCRIBE__SHOWS__ENTRY__NAME),
      seasons: z.array(
        z.string().describe(LIST_SHOWS_OUTPUT_DESCRIBE__SHOWS__ENTRY__SEASONS__ENTRY)
      )
      .describe(LIST_SHOWS_OUTPUT_DESCRIBE__SHOWS__ENTRY__SEASONS)
    })
    .describe(LIST_SHOWS_OUTPUT_DESCRIBE__SHOWS__ENTRY)
  )
  .describe(LIST_SHOWS_OUTPUT_DESCRIBE__SHOWS)
}
