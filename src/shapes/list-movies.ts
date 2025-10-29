import z, { type ZodRawShape } from "zod";

export const ListMoviesOutput: ZodRawShape = {
  shows: z.array(
    z.string().describe("The name of the movie")
  ).describe("A list of shows")
}
