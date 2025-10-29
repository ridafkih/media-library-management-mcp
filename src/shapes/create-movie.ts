import z, { type ZodRawShape } from "zod";

export const CreateMovieInput: ZodRawShape = {
  name: z.string().describe("The name of the movie"),
  year: z.number().int().min(1888).max(2100).optional().describe("Optional year the movie was released"),
  sourceFilePath: z.string().describe("The absolute path to the source file to move"),
  identifier: z.string().optional().describe("Optional third-party identifier (e.g., IMDB ID)")
};

export const CreateMovieOutput: ZodRawShape = {
  destinationPath: z.string().describe("The path where the file was moved to")
};
