import z, { type ZodRawShape } from "zod";

export const ListMoviesOutput: ZodRawShape = {
  movies: z.array(
    z.string().describe("The name of the movie")
  ).describe("A list of movies")
}
