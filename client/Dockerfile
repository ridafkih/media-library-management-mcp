FROM oven/bun:latest

RUN apt-get update && apt-get install -y gettext-base ca-certificates

RUN useradd -m -s /bin/bash mcpclient && \
  mkdir -p /home/mcpclient/.codex && \
  chown -R mcpclient:mcpclient /home/mcpclient/.codex

COPY --chown=mcpclient:mcpclient .template.config.toml /home/mcpclient/.codex/.template.config.toml

COPY --chown=root:root --chmod=555 entrypoint.sh /entrypoint.sh

USER mcpclient

ENTRYPOINT ["/entrypoint.sh"]
