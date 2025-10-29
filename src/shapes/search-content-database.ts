import z, { type ZodRawShape } from "zod"
import { SEARCH_CONTENT_INPUT_DESCRIBE__QUERY, SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS, SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY, SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY__TITLE, SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY__TITLE_ORIGINAL, SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY__YEAR, SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY__ID } from "../constants/descriptions"

export const SearchContentInput: ZodRawShape = {
  query: z.string().describe(SEARCH_CONTENT_INPUT_DESCRIBE__QUERY)
}

const SearchResultEntry = z.object({
  title: z.string().describe(SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY__TITLE),
  title_original: z.string().describe(SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY__TITLE_ORIGINAL),
  year: z.number().describe(SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY__YEAR),
  id: z.string().describe(SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY__ID),
}).describe(SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY)

export const SearchContentOutput: ZodRawShape = {
  imdb: z.array(SearchResultEntry).optional().describe(SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS),
  jikan: z.array(SearchResultEntry).optional().describe(SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS),
}
