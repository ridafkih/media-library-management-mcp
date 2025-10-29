#!/bin/bash

envsubst < /root/.codex/.template.config.toml > /root/.codex/config.toml
echo "Config file created at /root/.codex/config.toml"

CMD="bun x @openai/codex exec \"$(cat /root/PROMPT.md)\" --model \"${OPENAI_API_MODEL}\""

if [ -n "${CODEX_OSS}" ]; then
    CMD="${CMD} --oss"
    echo "Running with --oss flag enabled"
fi

eval $CMD
