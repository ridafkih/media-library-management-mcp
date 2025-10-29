import z, { type ZodRawShape } from "zod";
import { CREATE_MOVIE_INPUT_DESCRIBE__NAME, CREATE_MOVIE_INPUT_DESCRIBE__YEAR, CREATE_MOVIE_INPUT_DESCRIBE__SOURCE_FILE_PATH, CREATE_MOVIE_INPUT_DESCRIBE__IDENTIFIER, CREATE_MOVIE_INPUT_DESCRIBE__EXCLUDE, CREATE_MOVIE_INPUT_DESCRIBE__EXCLUDE__METADATA_ID, CREATE_MOVIE_INPUT_DESCRIBE__EXCLUDE__YEAR, CREATE_MOVIE_OUTPUT_DESCRIBE__DESTINATION_PATH } from "../constants/descriptions";

export const CreateMovieInput: ZodRawShape = {
  name: z.string().describe(CREATE_MOVIE_INPUT_DESCRIBE__NAME),
  year: z.number().int().min(1888).max(2100).optional().describe(CREATE_MOVIE_INPUT_DESCRIBE__YEAR),
  filePathFromPending: z.string().describe(CREATE_MOVIE_INPUT_DESCRIBE__SOURCE_FILE_PATH),
  identifier: z.string().optional().describe(CREATE_MOVIE_INPUT_DESCRIBE__IDENTIFIER),
  exclude: z.object({
    metadataId: z.boolean().describe(CREATE_MOVIE_INPUT_DESCRIBE__EXCLUDE__METADATA_ID),
    year: z.boolean().describe(CREATE_MOVIE_INPUT_DESCRIBE__EXCLUDE__YEAR)
  }).optional().describe(CREATE_MOVIE_INPUT_DESCRIBE__EXCLUDE)
};

export const CreateMovieOutput: ZodRawShape = {
  destinationPath: z.string().describe(CREATE_MOVIE_OUTPUT_DESCRIBE__DESTINATION_PATH)
};
