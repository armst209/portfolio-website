# Biscuits 'n' Groovy (BNGNew2026)

A rebuild of the Biscuits 'n' Groovy music-collecting app. The look blends the original BnG yellow (`#f5ee0d`) and teal (`#25c1a9`) branding with a Spotify-style web-player layout.

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack, Cache Components, `proxy.ts`) |
| Styling | Tailwind CSS 4: design tokens live in `src/app/globals.css` under `@theme` |
| Client state | zustand 5 (`src/stores`) |
| Auth and data | None yet. Supabase was removed; a replacement is pending |
| Forms | React 19 `useActionState` with Server Actions, validated by zod 4 |
| Toasts | react-hot-toast |
| Logging | pino (pretty-printed in development, silent in tests) |
| Tests | Vitest 5, Testing Library, jest-dom, jest-extended |
| Icons | lucide-react, plus the original yellow BnG SVGs in `public/assets` |

## Getting started

```bash
npm install
npm run dev                  # http://localhost:3000
```

No environment variables are required at the moment.

| Script | What it does |
| --- | --- |
| `npm run dev` / `build` / `start` | Next.js dev server, production build, production server |
| `npm test` | Vitest in watch mode |
| `npm run test:run` | Vitest single run (CI) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint (Next + Prettier config) |
| `npm run format` | Prettier |

## Routes

All pages live under the `(main)` route group, which wraps them in the app shell (`src/app/(main)/layout.tsx` → `AppShell`). Route groups choose a layout and never change the URL.

| URL | File | Notes |
| --- | --- | --- |
| `/` | `app/(main)/page.tsx` | Hero, How It Works, Music Showcase, Know Your Collection, Attention |
| `/releases` | `app/(main)/releases/page.tsx` | Release grid |
| `/search` | `app/(main)/search/page.tsx` | Live filter synced to `?q=`, browse categories |
| `/faq` | `app/(main)/faq/page.tsx` | Accordion questions + NFTs Explained (`#nft-scroll-purchase`) |
| `/about` | `app/(main)/about/page.tsx` | Mission, principles, How We Serve (Fans/Artists tabs), Our Story |
| `/artists` | `app/(main)/artists/page.tsx` | Pitch, How it Works, Why Release With Us, inquiry form (`#artists-form`) |
| `/vault` | `app/(main)/vault/page.tsx` | Past drops; each card opens a details + tracklist dialog |
| `/events` | `app/(main)/events/page.tsx` | Event details, live countdown, map, artist socials |
| `/collection` | `app/(main)/collection/page.tsx` | Private. Live and expired biscuits, View NFT dialog |
| `/terms` | `app/(main)/terms/page.tsx` | Legal hub, plus `/terms/privacy-policy`, `/terms/subscriber`, `/terms/music-purchase` and `/terms/nft` |
| `/account` | `app/(main)/account/page.tsx` | Private. Profile form and avatar upload (stubbed) |
| `/signin`, `/signup` | `app/(main)/signin`, `app/(main)/signup` | Auth forms |
| `/confirm-account`, `/error` | `app/(main)/…` | Status screens |

`app/not-found.tsx` handles unknown URLs. Private routes are listed in `src/utils/routes.ts`.

## Project structure

```
src/
  app/
    layout.tsx          root layout: fonts (Figtree, Jost), metadata, <Toaster />
    globals.css         Tailwind theme tokens
    (main)/             every page; each route keeps its own components/, data/, schemas.ts
  shared-components/
    Avatar, Button, Card, Dropdown, Input, Modal, PlayButton, TextLink
    layout/             AppShell, Sidebar, TopBar, MobileTabBar, Footer, SignupBanner,
                        EmailVerificationBar, PageHeader, SectionHeader, MessagePanel, …
    navigation/         NavLink, nav-items, AccountSection, UserMenu, SignOutButton
    authentication/     SignInForm, SignUpForm, server actions, zod schemas, form state
    home/               home page sections and their data
  providers/            UIStoreHydrator (restores persisted UI prefs after mount)
  stores/               zustand: useUserStore (session), useUIStore (persisted UI prefs)
  utils/                cn(), logger, errors, route helpers
  types/
  proxy.ts              request proxy (currently a no-op)
test/                   Vitest setup and Next.js mocks
public/assets/          images and the original BnG SVG icons
```

### Import aliases

| Alias                  | Points to                 |
| ---------------------- | ------------------------- |
| `@/*`                  | `src/*`                   |
| `@main/*`              | `src/app/(main)/*`        |
| `@shared-components/*` | `src/shared-components/*` |
| `@public/*`            | `public/*`                |

### State

- `useUserStore` holds the current user and an `AuthStatus` of `loading`, `authenticated` or `unauthenticated`. Components such as `AccountSection`, `SignupBanner` and `Sidebar` read from it. Nothing populates it yet.
- `useUIStore` holds UI preferences (sidebar collapsed) persisted to `localStorage` under `bng-ui`. It uses `skipHydration`, and `UIStoreHydrator` rehydrates it after mount so the server and first client render match.

## Notes and known gaps

- **Auth is stubbed.** `shared-components/authentication/actions.ts` validates input with zod but has no provider behind it. `src/proxy.ts` is an empty function, so private routes aren't guarded at the edge. The account page uses placeholder claims.
- **`npm run typecheck` currently fails** because of leftover imports:
  - Supabase removal: `account/page.tsx` imports the deleted `./queries`, `AccountForm.tsx` imports a missing `../actions`, and `UserMenu`, `useUserStore` and `useUserStore.test.ts` reference the removed `AppUser` type.
  - Folder restructure: the `/terms` pages still import from `@/features/legal/…` (now `app/(main)/terms/components/LegalDocument.tsx` and `terms/documents.ts`), and `HowItWorks.test.tsx` imports `./components/HowItWorks` (now `./HowItWorks`).
- **Avatar upload** (`account/components/AvatarUpload.tsx`) renders the picker but doesn't upload anything.
- **Placeholder data** (built from existing photos) backs the release grids, `/collection` and `/vault`: `app/(main)/releases/data/sample-releases.ts`, `app/(main)/collection/data/sample-collection.ts` and `app/(main)/vault/data/sample-vault.ts`. Replace them with real queries once a backend exists.
- The newsletter form and the artist inquiry form validate input but don't send it anywhere yet. The original posted both to Mailchimp.
- `/events` shows the original ZEVY event (Nov 2021, now marked as ended). Its flyer image wasn't in either repo, so a crowd photo stands in.
- Payment / Stripe checkout from the original app is not ported.
