export type ShowName = string;
export type SeasonSet = Set<string>;

export interface SearchResultEntry {
  [x: string]: unknown;
  title: string;
  title_original: string;
  year: number;
  id: string;
}

export interface SearchResults {
  [x: string]: unknown;
  imdb: SearchResultEntry[];
  jikan: SearchResultEntry[];
}
