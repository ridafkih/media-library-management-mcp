FROM oven/bun:latest

RUN apt-get update && apt-get install -y gettext-base && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /root/.codex

COPY .template.config.toml /root/.codex/.template.config.toml
COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
