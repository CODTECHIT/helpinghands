# Agent Guidelines

This is the **Helping Hands Foundation** website.

## Tech stack

- Next.js 15 (App Router, file-system routing under `src/app/`)
- React 19, TypeScript, Tailwind CSS v4

## Key conventions

- Route files live in `src/app/`. Each directory represents a route segment containing `page.tsx` or `layout.tsx`.
- Shared UI primitives are in `src/components/ui/` (shadcn-style components).
- Page-level components are in `src/components/`.
- Data/constants are in `src/data/`.
- Custom hooks live in `src/hooks/`.
- Utility helpers live in `src/lib/`.
