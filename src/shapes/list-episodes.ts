import z, { type ZodRawShape } from "zod";

export const ListEpisodesOutput: ZodRawShape = {
  episodes: z.array(
    z.string().describe("Sourced from the content file-name, a string representing the episode")
  )
  .describe("An array of strings representing episodes")
}
