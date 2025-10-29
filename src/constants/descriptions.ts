export const CREATE_MOVIE_INPUT_DESCRIBE__NAME
  = "The name of the movie"
export const CREATE_MOVIE_INPUT_DESCRIBE__YEAR
  = "Optional year the movie was released"
export const CREATE_MOVIE_INPUT_DESCRIBE__SOURCE_FILE_PATH
  = "The path to the source file relative to pending/ to move"
export const CREATE_MOVIE_INPUT_DESCRIBE__IDENTIFIER
  = "Optional third-party identifier (e.g., IMDB ID)"
export const CREATE_MOVIE_INPUT_DESCRIBE__EXCLUDE
  = "Optional exclusion rules for folder naming, can be used to match existing entries in the library"
export const CREATE_MOVIE_INPUT_DESCRIBE__EXCLUDE__METADATA_ID
  = "Exclude the metadataId from the resulting folder"
export const CREATE_MOVIE_INPUT_DESCRIBE__EXCLUDE__YEAR
  = "Exclude the year from the resulting folder"

export const CREATE_MOVIE_OUTPUT_DESCRIBE__DESTINATION_PATH
  = "The path where the file was moved to"

export const CREATE_SHOW_EPISODE_INPUT_DESCRIBE__NAME
  = "The name of the show"
export const CREATE_SHOW_EPISODE_INPUT_DESCRIBE__YEAR
  = "Optional year the show was released"
export const CREATE_SHOW_EPISODE_INPUT_DESCRIBE__SEASON_NUMBER
  = "The season number (0 for specials)"
export const CREATE_SHOW_EPISODE_INPUT_DESCRIBE__EPISODE_NUMBER
  = "The episode number"
export const CREATE_SHOW_EPISODE_INPUT_DESCRIBE__SOURCE_FILE_PATH
  = "The path to the source file relative to pending/ to move"
export const CREATE_SHOW_EPISODE_INPUT_DESCRIBE__IDENTIFIER
  = "Optional third-party identifier (e.g., imdbid-tt00000000, tmdbid-12345, anilistid-12345)"
export const CREATE_SHOW_EPISODE_INPUT_DESCRIBE__EXCLUDE
  = "Optional exclusion rules for folder naming, can be used to match existing entries in the library"
export const CREATE_SHOW_EPISODE_INPUT_DESCRIBE__EXCLUDE__METADATA_ID
  = "Exclude the metadataId from the resulting folder"
export const CREATE_SHOW_EPISODE_INPUT_DESCRIBE__EXCLUDE__YEAR
  = "Exclude the year from the resulting folder"

export const CREATE_SHOW_EPISODE_OUTPUT_DESCRIBE__DESTINATION_PATH
  = "The path where the file was moved to"

export const LIST_EPISODES_INPUT_DESCRIBE__SHOW_NAME
  = "The name of the show"
export const LIST_EPISODES_INPUT_DESCRIBE__SEASON_NUMBER
  = "The season number"

export const LIST_EPISODES_OUTPUT_DESCRIBE__EPISODES
  = "An array of strings representing episodes"
export const LIST_EPISODES_OUTPUT_DESCRIBE__EPISODES__ENTRY
  = "Sourced from the content file-name, a string representing the episode"

export const LIST_MOVIES_OUTPUT_DESCRIBE__MOVIES
  = "A list of movies"
export const LIST_MOVIES_OUTPUT_DESCRIBE__MOVIES__ENTRY
  = "The name of the movie"

export const LIST_SHOWS_OUTPUT_DESCRIBE__SHOWS
  = "A list of shows"
export const LIST_SHOWS_OUTPUT_DESCRIBE__SHOWS__ENTRY
  = "An object containing show metadata"
export const LIST_SHOWS_OUTPUT_DESCRIBE__SHOWS__ENTRY__NAME
  = "The show name, also used as the folder name"
export const LIST_SHOWS_OUTPUT_DESCRIBE__SHOWS__ENTRY__SEASONS
  = "An array of season names"
export const LIST_SHOWS_OUTPUT_DESCRIBE__SHOWS__ENTRY__SEASONS__ENTRY
  = "The season name"

export const LIST_PENDING_OUTPUT_DESCRIBE__PENDING_FILES
  = "An array of full file path (relative) pending renaming and organization, may be shows or movies"
export const LIST_PENDING_OUTPUT_DESCRIBE__PENDING_FILES__ENTRY
  = "The full file path (relative) of a file pending renaming and organization"

export const STAGE_MOVE_FILE_OR_FOLDER_INPUT_DESCRIBE__FROM
  = "The current full file path (relative) of the file or folder to be moved"
export const STAGE_MOVE_FILE_OR_FOLDER_INPUT_DESCRIBE__TO
  = "The destination full file path (relative) where the file or folder should be moved"

export const STAGE_MOVE_FILE_OR_FOLDER_OUTPUT_DESCRIBE__IDENTIFIER
  = "A unique 3-word passphrase identifier for this staged move operation"
export const STAGE_MOVE_FILE_OR_FOLDER_OUTPUT_DESCRIBE__PATH
  = "The staged full file path (relative) to the moved file or folder"
export const STAGE_MOVE_FILE_OR_FOLDER_OUTPUT_DESCRIBE__CONTENTS
  = "An recursive list of full staged file paths (relative) of items in the moved folder (null if moving a file)"
export const STAGE_MOVE_FILE_OR_FOLDER_OUTPUT_DESCRIBE__CONTENTS__ENTRY
  = "The staged full file path (relative) to an item in the moved folder"

export const COMMIT_MOVE_FILE_OR_FOLDER_INPUT_DESCRIBE__IDENTIFIER
  = "The unique 3-word passphrase identifier from the staging operation"

export const COMMIT_MOVE_FILE_OR_FOLDER_OUTPUT_DESCRIBE__PATH
  = "The committed full file path (relative) to the moved file or folder"
export const COMMIT_MOVE_FILE_OR_FOLDER_OUTPUT_DESCRIBE__CONTENTS
  = "An recursive list of full committed file paths (relative) of items in the moved folder (null if moving a file)"
export const COMMIT_MOVE_FILE_OR_FOLDER_OUTPUT_DESCRIBE__CONTENTS__ENTRY
  = "The committed full file path (relative) to an item in the moved folder"

export const SEARCH_CONTENT_INPUT_DESCRIBE__QUERY
  = "The search query string for finding content in the database"

export const SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS
  = "Search results grouped by provider (imdb, jikan)"
export const SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY
  = "A single content entry from the search results"
export const SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY__TITLE
  = "The title of the content"
export const SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY__TITLE_ORIGINAL
  = "The original title of the content (if different from title)"
export const SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY__YEAR
  = "The release year of the content"
export const SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY__ID
  = "The provider-specific ID for the content"