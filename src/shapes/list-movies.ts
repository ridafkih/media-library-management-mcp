import z, { type ZodRawShape } from "zod";
import { LIST_MOVIES_OUTPUT_DESCRIBE__MOVIES, LIST_MOVIES_OUTPUT_DESCRIBE__MOVIES__ENTRY } from "../constants/descriptions";

export const ListMoviesOutput: ZodRawShape = {
  movies: z.array(
    z.string().describe(LIST_MOVIES_OUTPUT_DESCRIBE__MOVIES__ENTRY)
  ).describe(LIST_MOVIES_OUTPUT_DESCRIBE__MOVIES)
}
