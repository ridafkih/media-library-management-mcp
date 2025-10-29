export type ShowName = string;
export type SeasonSet = Set<string>;

export interface SearchResultEntry {
  title: string;
  title_original: string;
  year: number;
  id: string;
}

export interface SearchResults {
  imdb?: SearchResultEntry[];
  jikan?: SearchResultEntry[];
}
