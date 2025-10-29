import z, { type ZodRawShape } from "zod";

export const ListShowsOutput: ZodRawShape = {
  shows: z.array(
    z.object({
      name: z.string().describe("The show name, also used as the folder name"),
      seasons: z.array(
        z.string().describe("The season name")
      )
      .describe("An array of season names")
    })
    .describe("An object containing show metadata")
  )
  .describe("A list of shows")
}
