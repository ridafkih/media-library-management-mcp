FROM oven/bun:latest

RUN apt-get update && apt-get install -y gettext-base ca-certificates

RUN useradd -m -s /bin/bash mcpclient && \
  mkdir -p /home/mcpclient/.codex

COPY .template.config.toml /tmp/.template.config.toml

RUN --mount=type=secret,id=OLLAMA_API_URL \
  --mount=type=secret,id=MEDIA_LIBRARY_MANAGEMENT_MCP_SERVER_URL \
  export OLLAMA_API_URL=$(cat /run/secrets/OLLAMA_API_URL) && \
  export MEDIA_LIBRARY_MANAGEMENT_MCP_SERVER_URL=$(cat /run/secrets/MEDIA_LIBRARY_MANAGEMENT_MCP_SERVER_URL) && \
  envsubst < /tmp/.template.config.toml > /home/mcpclient/.codex/config.toml && \
  rm /tmp/.template.config.toml && \
  chown mcpclient:mcpclient /home/mcpclient/.codex && \
  chown root:root /home/mcpclient/.codex/config.toml && \
  chmod 444 /home/mcpclient/.codex/config.toml

COPY --chown=root:root --chmod=555 entrypoint.sh /entrypoint.sh

USER mcpclient

ENTRYPOINT ["/entrypoint.sh"]
