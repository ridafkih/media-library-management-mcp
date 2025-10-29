import z, { type ZodRawShape } from "zod";

export const ListEpisodesInput: ZodRawShape = {
  showName: z.string().describe("The name of the show"),
  seasonNumber: z.number().int().min(0).describe("The season number")
};

export const ListEpisodesOutput: ZodRawShape = {
  episodes: z.array(
    z.string().describe("Sourced from the content file-name, a string representing the episode")
  )
  .describe("An array of strings representing episodes")
}
