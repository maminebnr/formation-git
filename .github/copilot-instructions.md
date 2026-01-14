## Project quick-orientation

This repository is a small collection of static front-end pages and short Python exercises (a set of student `tp1` subfolders). There is no complex build system. Key entry points:

- `index.html` — root landing page
- `docker-compose.yml` — simple nginx service (mounts `./html` → `/usr/share/nginx/html`)
- `tp1/*/index.py` and `tp1/*/index.html` — per-student example files and configs

When making changes, prefer minimal edits and preserve the simple structure: most tasks are editing/adding static files or small Python scripts.

## Big-picture architecture and intent

- Purpose: training / demonstration repository. Each subfolder under `tp1/` is an independent exercise submission (HTML + optional Python). There is no single runtime app spanning folders.
- Runtime surface: static HTML served by nginx (via `docker-compose.yml`) or local Python webserver for quick previews.

## Important files to reference when editing or extending

- `docker-compose.yml` — currently mounts `./html` but the repo's root `index.html` lives at `/` (no `html/` folder). If you create a demo site, either place files under `html/` or update the compose file.
- `tp1/*/index.py` — small standalone Python scripts. Run them directly with the system Python (example: `python3 tp1/Dridi\ Oussama/index.py`). Note many folder names contain spaces; prefer quoting/escaping paths in scripts and CI.

## Developer workflows (commands & examples)

- Start the nginx preview (uses Docker-compose v2+):

```bash
# from repo root — will fail if ./html is missing
docker compose up --build
```

- Quick local preview without Docker (recommended for small HTML edits):

```bash
# serve current directory on port 8000
python3 -m http.server 8000
# then open http://localhost:8000/index.html
```

- Run a Python exercise:

```bash
python3 tp1/project/index.py
```

## Project-specific conventions

- Submissions are organized per-person under `tp1/`. Each contains `index.html`, `index.py`, and `config*.txt`. When adding new submissions, avoid spaces in directory names (use `-` or `_`) to reduce escaping hassles.
- Keep changes localized to one student's folder when fixing or improving an exercise; avoid cross-cutting refactors unless explicitly requested.

## Integration points & external dependencies

- Docker (docker-compose) is optionally used only for serving static pages with nginx. There are no other external services or package manifests (no package.json, requirements.txt, etc.).
- If you add Python dependencies, include a `requirements.txt` at repo root or in the specific `tp1/*` folder and document how to create the virtualenv.

## Helpful examples for the agent

- If asked to fix a preview failure where `docker compose up` shows an empty site, check `docker-compose.yml`'s `volumes` path (it expects `./html`). Either create `html/` and move `index.html` there, or edit the compose file to mount `./`.

- If editing a student's `index.py`, run it locally to verify output. Example (escape space in path):

```bash
python3 "tp1/amira's project/index.py"
```

## Notes and assumptions

- There is no automated test suite or CI configured in the repository. If you add tests, include a simple command in the README and a `requirements.txt` or other manifest.
- Assume macOS / bash environment for commands; many paths contain spaces — escape or quote them.

If anything here is unclear or you'd like the agent to include examples for a specific change (for example: add CI, normalize folder names, or scaffold a `requirements.txt`), tell me which task to prioritize and I'll update this file.
