New-Item -ItemType Directory -Force -Path "docs"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/editorav010-dev/meme-capsule-sync/main/MEME_CAPSULE_KNOWLEDGE.md" -OutFile "docs\MEME_CAPSULE_KNOWLEDGE.md"
