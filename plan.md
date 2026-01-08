# Vite to Next.js 16 Migration Plan

## Overview

| Aspect | Before | After |
|--------|--------|-------|
| Framework | Vite + React | Next.js 16 |
| Router | React Router DOM | Next.js App Router |
| Data fetching | TanStack Query | None (static landing) |
| Auth | Mock useState | Removed |
| Pages | 3 | 1 (landing + 404) |

## Files to DELETE

```
vite.config.ts
index.html
src/vite-env.d.ts
src/App.tsx
src/App.css
src/main.tsx
src/pages/Index.tsx
src/pages/Dashboard.tsx
src/pages/NotFound.tsx
src/components/NavLink.tsx
src/components/dashboard/
  ├── SignIn.tsx
  ├── Sidebar.tsx
  └── DashboardContent.tsx
```

## Files to CREATE

```
next.config.ts              # Next.js config
app/
├── layout.tsx              # Root layout with metadata + providers
├── page.tsx                # Landing page (Server Component)
├── not-found.tsx           # 404 page (Server Component)
└── globals.css             # Styles (moved from src/index.css)
```

## Files to MOVE

```
src/components/ui/          → components/ui/
src/components/landing/     → components/landing/
src/lib/utils.ts            → lib/utils.ts
src/hooks/use-toast.ts      → hooks/use-toast.ts
src/hooks/use-mobile.tsx    → hooks/use-mobile.tsx
```

## Files to UPDATE

### package.json
- Remove: vite, @vitejs/plugin-react-swc, react-router-dom, lovable-tagger, @tanstack/react-query
- Add: next@^16.1.1
- Update scripts:
  ```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
  ```

### tsconfig.json
- Update for Next.js with proper paths

### tailwind.config.ts
- Update content paths:
  ```ts
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
  ]
  ```

### components.json
- Set rsc: true
- Update CSS path to "app/globals.css"

### Landing Components (add "use client", update imports, remove CTAs)
- components/landing/Header.tsx
- components/landing/Hero.tsx
- components/landing/Features.tsx
- components/landing/Pricing.tsx
- components/landing/Footer.tsx

### UI Components (add "use client" directive)
- All 40+ shadcn components in components/ui/

## Server vs Client Components

| Component | Type | Reason |
|-----------|------|--------|
| app/layout.tsx | Server | Static metadata + fonts |
| app/page.tsx | Server | Static page composition |
| app/not-found.tsx | Server | Static content |
| components/providers.tsx | Client | React context providers |
| components/landing/* | Client | framer-motion animations |
| components/ui/* | Client | Radix primitives |

## Implementation Order

1. Update package.json (deps + scripts)
2. Create next.config.ts
3. Update tsconfig.json
4. Create app/ directory with globals.css
5. Create app/layout.tsx with providers and metadata
6. Create app/page.tsx
7. Create app/not-found.tsx
8. Move components/ from src/ to root
9. Move lib/ from src/ to root
10. Move hooks/ from src/ to root
11. Update landing components (use client, fix imports, remove CTAs)
12. Add "use client" to UI components
13. Update tailwind.config.ts content paths
14. Update components.json
15. Delete old files (vite.config.ts, index.html, src/)
16. Run npm install
17. Run npm run build to verify
