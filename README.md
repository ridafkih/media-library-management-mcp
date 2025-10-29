# mcp

Media organization MCP server for managing your media server library.

## Setup

To install dependencies:

```bash
bun install
```

## Configuration

**Required Environment Variable:**

- `DATA_DIRECTORY` - The root directory where your media library is stored (e.g., `/path/to/media`)
- `MCP_SERVER_PORT` - The port for which to host the MCP server on

If these are not set, the server will not start

## Running

```bash
export MCP_SERVER_PORT=3000
export DATA_DIRECTORY=/path/to/your/media
bun run build
bun .
```
