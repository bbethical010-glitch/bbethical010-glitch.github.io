#!/bin/bash
OWNER="editorav010-dev"
REPO="meme-capsule-sync"
BRANCH="main"
LOCAL_PATH=".knowledge/MEME_CAPSULE_KNOWLEDGE.md"
META_PATH=".knowledge/.knowledge_meta.json"

if [ -z "$CAPSULE_TOKEN" ] && [ -f "$HOME/.zshrc" ]; then
  source "$HOME/.zshrc" >/dev/null 2>&1
fi
if [ -z "$CAPSULE_TOKEN" ] && [ -f "$HOME/.zprofile" ]; then
  source "$HOME/.zprofile" >/dev/null 2>&1
fi
if [ -z "$CAPSULE_TOKEN" ] && [ -f "$HOME/.bash_profile" ]; then
  source "$HOME/.bash_profile" >/dev/null 2>&1
fi

if [ -z "$CAPSULE_TOKEN" ]; then
  echo "Error: CAPSULE_TOKEN not set. Run Step 2 first."; exit 1
fi

mkdir -p .knowledge

RESPONSE=$(curl -s \
  -H "Authorization: token $CAPSULE_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/$OWNER/$REPO/contents/MEME_CAPSULE_KNOWLEDGE.md?ref=$BRANCH")

echo "$RESPONSE" \
  | python3 -c "import sys,json,base64; d=json.load(sys.stdin); print(base64.b64decode(d['content']).decode())" \
  > "$LOCAL_PATH"

SHA=$(echo "$RESPONSE" | python3 -c "import sys,json; print(json.load(sys.stdin)['sha'])")
echo "{\"sha\": \"$SHA\"}" > "$META_PATH"

echo "MEME_CAPSULE_KNOWLEDGE.md fetched. (sha: ${SHA:0:7})"