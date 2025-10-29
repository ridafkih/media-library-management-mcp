#!/bin/bash

envsubst < /root/.codex/.template.config.toml > /root/.codex/config.toml
echo "config file created at /root/.codex/config.toml"

exec bun x @openai/codex exec "$(cat /root/PROMPT.md)" --model "${OPENAI_API_MODEL}" --skip-git-repo-check
