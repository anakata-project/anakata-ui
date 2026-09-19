#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"

url="${API_OPENAPI_URL:-http://localhost:8000/docs/api.json}"
out="app/types/api.d.ts"

pnpm dlx openapi-typescript@7.13.0 "$url" -o "$out"

header='/**
 * Generated from the API OpenAPI spec. Committed. Do not edit by hand.
 * Regenerate with: pnpm types:api
 */'

if ! grep -q 'Regenerate with: pnpm types:api' "$out"; then
  tmp="$(mktemp)"
  {
    printf '%s\n\n' "$header"
    cat "$out"
  } > "$tmp"
  mv "$tmp" "$out"
fi

pnpm exec eslint --fix "$out"
