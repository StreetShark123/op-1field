# OP-1 Field Learning App

An offline-first desktop learning app built around a practical OP-1 Field course.

This started as a long HTML manual. It is now packaged like a product app with onboarding, persistent progress, core/full learning paths, search, bookmarks, and study modes.

## What is inside

- 16 course modules (original content preserved)
- Sidebar + subnavigation + progress tracking
- Interactive learning widgets
- Onboarding start screen
- Resume where you left off
- Core track and full track modes
- Practice mode and reading mode
- Offline local persistence (localStorage)

## Install dependencies

```bash
npm install
```

## Run in development

```bash
npm run dev
```

## Run app (same as dev)

```bash
npm start
```

## Package desktop builds

Build all configured targets:

```bash
npm run dist
```

Build Windows installer (NSIS) first:

```bash
npm run dist:win
```

## Where the installer appears

Generated files are written to:

- `dist/`

For Windows target, the `.exe` installer is produced there.

## App structure

- `main.js` — Electron main process and window boot
- `package.json` — scripts + electron-builder config
- `index.html` — app shell + course content
- `assets/css/main.css` — styles (visual identity preserved)
- `assets/js/state.js` — persistence layer
- `assets/js/core.js` — course navigation/progress/core-full logic
- `assets/js/app-shell.js` — onboarding and product UI controls
- `assets/js/widgets.js` — interactive audio/learning widgets
- `docs/EDITING_GUIDE.md` — contributor editing workflow

## Notes

- Original course content is preserved.
- No cloud backend is required.
- Works offline after install.

---

遊んで、間違えて、作ろう。
