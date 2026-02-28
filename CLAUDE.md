# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page personal site for svenlito.com, built with Hugo. No theme — the entire site is a single layout (`layouts/index.html`) with inline CSS and vanilla JS. Content lives in `content/_index.md` (front matter only, no body). Deployed to Cloudflare Pages.

## Commands

```bash
hugo server -D     # local dev server with drafts
hugo --minify      # production build → public/
```

## Dev Environment

Nix flake provides `hugo` and `pre-commit`. Enter with `nix develop` or automatically via direnv.

## Architecture

- `hugo.toml` — site config (base URL, minification)
- `layouts/index.html` — the entire site: markup, styles, and email obfuscation script
- `content/_index.md` — homepage content entry (title only)
- No themes, no partials, no JS build step
