#!/bin/bash

envsubst < /home/mcpclient/.codex/.template.config.toml > /home/mcpclient/.codex/config.toml

exec bun x @openai/codex exec "$(cat /home/mcpclient/PROMPT.md)" --model "${OLLAMA_MODEL}" --skip-git-repo-check --full-auto
