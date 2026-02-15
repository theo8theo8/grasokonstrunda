# AGENTS.md

This repository is a Next.js (App Router) project using TypeScript, Tailwind CSS,
and HeroUI. Follow the guidance below when making changes.

## Project overview
- Framework: Next.js 15 (App Router)
- Language: TypeScript (strict)
- Styling: Tailwind CSS + HeroUI theme tokens
- UI components: @heroui/react
- Fonts: next/font (Comfortaa)

## Commands
Install
- npm install

Development
- npm run dev

Build
- npm run build

Start (production)
- npm run start

Lint
- npm run lint

Tests
- No test runner is configured in package.json.
- There is no known "single test" command in this repo.
- If tests are added later, document the exact command and how to scope to one test.

## Repo-specific rules
- No Cursor rules found in `.cursor/rules/` or `.cursorrules`.
- No Copilot rules found in `.github/copilot-instructions.md`.

## Code style and conventions

General
- Use TypeScript in strict mode; avoid `any`.
- Prefer functional React components.
- Keep components small and focused; extract repeated UI into components.
- Keep UI text in Swedish where appropriate (current content is Swedish).

Formatting
- Use existing formatting style: double quotes for strings, semicolons, and trailing commas where present.
- Prefer multiline JSX props for long className strings.
- Keep JSX readable with line breaks similar to existing files.

Imports
- Group imports with this order:
  1) Framework/React/Next.js imports
  2) Third-party libraries
  3) Internal aliases ("@/...")
  4) Relative imports
  5) Styles (CSS)
- Keep imports sorted within each group.
- Use the `@/*` path alias for app-level imports (configured in tsconfig).

TypeScript
- Define explicit props interfaces/types for components with multiple props.
- Use `ReactNode` for JSX content slots.
- Use `const` for arrays/objects that are not reassigned.
- Prefer `type` or `interface` consistently within a file; follow existing file style.

React and Next.js
- Use App Router conventions: `app/` pages export default components and optional `metadata`.
- Client components must include the `"use client"` directive at the top.
- Avoid accessing `window` directly in Server Components.
- Favor Next.js `Link` when linking to internal routes.

Styling
- Tailwind classes are the primary styling mechanism.
- Use HeroUI components and theme colors where possible.
- Prefer Tailwind responsive classes (e.g., `md:`/`lg:`) to custom CSS.

Naming conventions
- Components: PascalCase (e.g., `MapInfo`, `Topbar`).
- Files: lower-case for components in `components/` (matches current code).
- Variables: camelCase.
- Types/interfaces: PascalCase.

Error handling
- UI code is mostly static; handle missing data defensively where needed.
- For optional data, guard with conditional rendering instead of non-null assertions.
- Prefer early returns for missing data in client components.

Data and content
- Large static datasets (like locations) live in `components/locations.tsx`.
- Keep location IDs stable; they are used for map area lookups.
- When adding new locations, update both the map data and any pages that list locations.

Accessibility
- Provide `alt` text for all images.
- Prefer semantic headings (`h1`, `h2`, etc.) in content sections.

Assets
- Images live in the `public/` folder and are referenced by absolute paths (e.g., `/logo.webp`).
- Use `.webp` assets where possible to match existing usage.

Linting
- `next lint` is the only configured lint command.
- Fix lint issues rather than disabling rules, unless there is a strong reason.

When editing
- Preserve Swedish copy unless explicitly asked to translate.
- Keep layout responsive across breakpoints used in `tailwind.config.js`.
- Avoid adding new dependencies unless necessary.

## Quick reference
- Dev server: `npm run dev`
- Build: `npm run build`
- Start: `npm run start`
- Lint: `npm run lint`
