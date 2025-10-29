# media-library-management-mcp

Media organization MCP server for managing your media server library.

## Prerequisites

- [Bun](https://bun.com/)
- [OMDb API Key](https://www.omdbapi.com/)

## Configuration

You just need to set up some environment variables, you can start by copying over the [.env.example](./.env.example) file.

```bash
cp .env.example .env
```

Once that's done, just populate the variables - you'll need an OMDb API key, which you can [generate here](https://www.omdbapi.com/apikey.aspx).

- `OMDB_API_KEY` will be the key used to search the OMDb API for show metadata & context.
- `MCP_SERVER_PORT` is self-explanatory, this can be any valid port you want.
- `DATA_DIRECTORY` should be a directory which has the following folder structure.

```
├── movies/
├── shows/
└── pending/
```

When new content is put into the `pending/` folder, the titles of the files inside will be used as context to place the file in the correct file. If you attempt to use a show with no season or episode information, or a movie with no title, the agent will have no idea how to respond.

### What should my `.env` look like?

Here is an example of what your `.env` should resemble once you've configured it.

```bash
OMDB_API_KEY=for0937a
MCP_SERVER_PORT=3001
DATA_DIRECTORY=/data/media/library
```

## Getting Started

Once your environment variables are configured, you can install and launch the server.

### Build

```bash
bun run build
```

### Build & Run

```bash
bun run start
```

### Run Only

```bash
bun .
```
