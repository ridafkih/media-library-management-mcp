#!/bin/bash

exec bun x @openai/codex exec "$(cat /home/mcpclient/PROMPT.md)" --model "${OLLAMA_MODEL}" --skip-git-repo-check --full-auto
