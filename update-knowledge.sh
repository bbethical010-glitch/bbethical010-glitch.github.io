#!/bin/bash
OWNER="editorav010-dev"
REPO="meme-capsule-sync"
BRANCH="main"
LOCAL_PATH=".knowledge/MEME_CAPSULE_KNOWLEDGE.md"
META_PATH=".knowledge/.knowledge_meta.json"
MESSAGE="Update MEME_CAPSULE_KNOWLEDGE.md via AI agent"

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
if [ ! -f "$META_PATH" ]; then
  echo "Error: Run fetch-knowledge.sh first."; exit 1
fi

SHA=$(python3 -c "import json; print(json.load(open('$META_PATH'))['sha'])")
CONTENT_B64=$(base64 < "$LOCAL_PATH" | tr -d '\n')

RESPONSE=$(curl -s -X PUT \
  -H "Authorization: token $CAPSULE_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Content-Type: application/json" \
  -d "{\"message\":\"$MESSAGE\",\"content\":\"$CONTENT_B64\",\"sha\":\"$SHA\",\"branch\":\"$BRANCH\"}" \
  "https://api.github.com/repos/$OWNER/$REPO/contents/MEME_CAPSULE_KNOWLEDGE.md")

NEW_SHA=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('content',{}).get('sha',''))" 2>/dev/null)

if [ -z "$NEW_SHA" ]; then
  echo "CONFLICT DETECTED: Someone updated the file after your last fetch."
  echo "1. Run fetch-knowledge.sh to get the latest version."
  echo "2. Manually add your new notes into the fresh file."
  echo "3. Run update-knowledge.sh again."
  exit 1
else
  echo "{\"sha\": \"$NEW_SHA\"}" > "$META_PATH"
  echo "MEME_CAPSULE_KNOWLEDGE.md updated. (new sha: ${NEW_SHA:0:7})"
fi