## Shared Project Knowledge — MEME_CAPSULE_KNOWLEDGE.md

The single source of truth for all project-wide context, architecture,
decisions and cross-codebase knowledge lives in:
.knowledge/MEME_CAPSULE_KNOWLEDGE.md
It is NOT part of this repository — it syncs via a separate GitHub repo.

BEFORE starting any task, always fetch the latest version first:
  ./fetch-knowledge.sh

Then read .knowledge/MEME_CAPSULE_KNOWLEDGE.md fully before writing any code.

AFTER any meaningful change (new feature, architecture decision, bug fix,
workflow change, new dependency), update the knowledge file and push it:
  ./update-knowledge.sh

If a CONFLICT is reported — stop, fetch fresh, merge your new notes manually
into the updated file, then push again. Never skip the fetch before pushing.