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
  = "The search query string for finding movies, TV shows, or anime"

export const SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS
  = "Search results grouped by provider (imdb, jikan)"
export const SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY
  = "A single search result entry"
export const SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY__TITLE
  = "The title of the show or movie"
export const SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY__TITLE_ORIGINAL
  = "The original title of the show or movie (if different from title)"
export const SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY__YEAR
  = "The release year of the show or movie"
export const SEARCH_CONTENT_OUTPUT_DESCRIBE__RESULTS__ENTRY__ID
  = "The provider-specific ID for the show or movie"