import z, { type ZodRawShape } from "zod";

export const CreateShowEpisodeInput: ZodRawShape = {
  name: z.string().describe("The name of the show"),
  year: z.number().int().min(1888).max(2100).optional().describe("Optional year the show was released"),
  seasonNumber: z.number().int().min(0).describe("The season number (0 for specials)"),
  episodeNumber: z.number().int().positive().describe("The episode number"),
  sourceFilePath: z.string().describe("The absolute path to the source file to move"),
  identifier: z.string().optional().describe("Optional third-party identifier (e.g., imdbid-tt00000000, tmdbid-12345, anilistid-12345)")
};

export const CreateShowEpisodeOutput: ZodRawShape = {
  destinationPath: z.string().describe("The path where the file was moved to")
};
