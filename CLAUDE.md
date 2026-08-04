# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev              # dev server on :3000
npm run build            # production build
npm run lint             # eslint (flat config, next core-web-vitals + ts + prettier)
npm run test             # vitest (watch mode by default)
npm run test -- --run    # single non-watch run
npm run test -- --run app/components/Hero/Hero.test.tsx   # one test file
npm run test -- -t "accessibility"                        # by test name
npm run prettier         # format; prettier:check to verify
```

There is no typecheck script — use `npx tsc --noEmit`.

## Architecture

Next.js 16 App Router, React 19, Tailwind CSS 4, all source under `app/` (no `src/`).

**Layout chain:** [app/layout.tsx](app/layout.tsx) sets fonts + `next-themes` `ThemeProvider` (`attribute="class"`) and wraps everything in [PageContainer](app/components/PageContainer/PageContainer.tsx), which supplies `Navigation`, `main`, `ScrollUpArrow`, `Footer`, and the react-hot-toast `Toaster`. Pages therefore render only their own sections — see [app/page.tsx](app/page.tsx), which is just an ordered list of `Sections/*` components separated by `Partitions/*` dividers.

**Content vs. presentation:** copy and data (nav items, skills, values, professional experience, technologies) live in [app/utils/content.ts](app/utils/content.ts) as exported typed arrays. Section components map over them. Edit content there, not in JSX.

**Theming:** three usable themes — `light`, `dark`, `coffee` (the provider in `layout.tsx` also lists `forest`, which has no styles anywhere; it is dead). `dark` and `coffee` are Tailwind 4 `@custom-variant`s declared at the top of [app/globals.css](app/globals.css), so styling is `bg-x dark:bg-y coffee:bg-z` on every themed element. Design tokens (colors, custom breakpoints `xxs`/`xs`/`sm`, fonts) are defined in the `@theme` block of `globals.css` — `tailwind.config.ts` exists but its `content` globs point at a nonexistent `./src` tree and it does not drive the build.

**Icons/images:** SVGs in `public/assets/` are re-exported as small React components under [app/components/Images/](app/components/Images/). Because SVGs are rendered via `next/image` (not inlined), color is applied with the CSS `filter` utilities in `globals.css` (`orange-color-filter`, `black-color-filter`, `coffee-color-filter`, …). The standard pattern renders the same image three times with `hidden`/`flex` toggled per theme — see [GithubIcon.tsx](app/components/Images/icons/GithubIcon.tsx). Follow it when adding an icon.

**Client boundaries:** the default is Server Components. `'use client'` is used only where required — `Navigation` (motion scroll progress), `ThemeToggle`, `ContactForm`, and animated cards.

**Contact form:** [ContactForm.tsx](app/components/ContactMe/components/ContactForm.tsx) validates with Zod via `@hookform/resolvers/zod`, submits inside `useTransition`, and sends through EmailJS from the browser. Requires `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`, `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` in `.env.local`.

**Path aliases** (tsconfig): `@/*` → repo root, `@public/*` → `public/*`, `@fonts/*` → `public/fonts/*`.

## Testing

Vitest + jsdom with globals enabled (no `import { describe, it }` needed) — see [vitest.config.ts](vitest.config.ts) and [vitest.setup.ts](vitest.setup.ts), which wires `@testing-library/jest-dom` and `vitest-axe` matchers.

Tests are colocated as `Component.test.tsx` next to the component. Nearly every component has one, and the convention is two cases: renders without throwing, and `axe(container)` reports zero violations. Keep that pair when adding components. Test files that render `next/image` mock it first:

```tsx
vi.mock('next/image', () => ({ default: (props: any) => <img {...props} /> }))
```

The mock must come before the component import.

## Gotchas

- `zod` is imported by app code but is **not** listed in `package.json` dependencies — it currently resolves only as a transitive/peer install. Add it explicitly if you touch dependency management.
- Prettier config is unusual and enforced: 4-space indent, no semicolons, single quotes (double in JSX), 100 cols, ES5 trailing commas.
