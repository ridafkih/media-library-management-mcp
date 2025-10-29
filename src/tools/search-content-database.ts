import type { ToolDefinition } from "../types/tool";
import type { SearchResults } from "../types/common";
import {
  SearchContentInput,
  SearchContentOutput,
} from "../shapes/search-content-database";
import { JikanResponse, OMDBResponse } from "../schemas/api-responses";
import { env } from "../env";
import { logger } from "../logger";

export const searchContentDatabaseTool: ToolDefinition = {
  name: "SearchContentDatabase",
  title: "Search Content Database",
  description:
    "Search for content across multiple providers (Jikan for anime, OMDB for movies/shows)",
  inputSchema: SearchContentInput,
  outputSchema: SearchContentOutput,
  handler: async (input) => {
    const { query } = input;

    if (typeof query !== 'string') {
      throw Error("query must be a string")
    }

    const results: SearchResults = {
      imdb: [],
      jikan: [],
    };

    try {
      const jikanResponse = await fetch(
        `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=10`
      );
      const jikanJson = await jikanResponse.json();
      const jikanData = JikanResponse.parse(jikanJson);

      if (jikanData.data) {
        results.jikan = jikanData.data.map((item) => ({
          title: item.title || item.title_english || "",
          title_original: item.title_japanese || item.title || "",
          year: item.year || (item.aired?.from ? new Date(item.aired.from).getFullYear() : 0),
          id: `mal-${item.mal_id}`,
        }));
      }
    } catch (error) {
      logger.error(`Error fetching '${query}' from Jikan`, error)
      results.jikan = [];
    }

    const omdbApiKey = env.OMDB_API_KEY;
    if (omdbApiKey) {
      try {
        const omdbResponse = await fetch(
          `https://www.omdbapi.com/?apikey=${omdbApiKey}&s=${encodeURIComponent(query)}&type=series`
        );
        const omdbJson = await omdbResponse.json();
        const omdbData = OMDBResponse.parse(omdbJson);

        if (omdbData.Search) {
          results.imdb = omdbData.Search.map((item) => ({
            title: item.Title,
            title_original: item.Title,
            year: parseInt(item.Year) || 0,
            id: `imdb-${item.imdbID}`,
          }));
        }
      } catch (error) {
        logger.error(`Error fetching '${query}' from Omdb`, error)
        results.imdb = [];
      }
    }

    return {
      content: [],
      structuredContent: results,
    };
  },
};
