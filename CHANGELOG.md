# Changelog

## 1.1.0 — 2026-07-21

- Add content-search (Meilisearch) support: card fronts and display name are indexed via `index_dictionary`.
- Fix unstyled TinyMCE editor in Studio by resolving skin/content CSS from the bundle (`skin_url: 'default'`).


## 1.0.2rc3 — 2026-06-02

- Preserve flashcards content, display name, and styling during OLX import/export.
- Fix Studio clipboard copy/paste by restoring proper OLX serialization and deserialization for flashcards.
