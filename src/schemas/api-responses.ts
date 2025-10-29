import { z } from "zod";

export const JikanAnimeItem = z.object({
  mal_id: z.number(),
  title: z.string().optional(),
  title_english: z.string().optional().nullable(),
  title_japanese: z.string().optional().nullable(),
  year: z.number().optional().nullable(),
  aired: z.object({
    from: z.string().optional().nullable(),
  }).optional().nullable(),
});

export const JikanResponse = z.object({
  data: z.array(JikanAnimeItem).optional(),
});

export const OMDBSearchItem = z.object({
  Title: z.string(),
  Year: z.string(),
  imdbID: z.string(),
  Type: z.string().optional(),
  Poster: z.string().optional(),
});

export const OMDBResponse = z.object({
  Search: z.array(OMDBSearchItem).optional(),
  totalResults: z.string().optional(),
  Response: z.string(),
  Error: z.string().optional(),
});

export type JikanAnimeItem = z.infer<typeof JikanAnimeItem>;
export type JikanResponse = z.infer<typeof JikanResponse>;
export type OMDBSearchItem = z.infer<typeof OMDBSearchItem>;
export type OMDBResponse = z.infer<typeof OMDBResponse>;
