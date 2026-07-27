# Agent Guidelines

This is the **Helping Hands Foundation** website.

## Tech stack

- TanStack Start + TanStack Router (file-based routing under `src/routes/`)
- React 19, TypeScript, Tailwind CSS v4
- Vite 8 for bundling

## Key conventions

- Route files live in `src/routes/`. File names map directly to URL paths.
- Shared UI primitives are in `src/components/ui/` (shadcn-style components).
- Page-level components are in `src/components/`.
- Data/constants are in `src/data/`.
- Custom hooks live in `src/hooks/`.
- Utility helpers live in `src/lib/`.
