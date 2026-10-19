# Biscuits 'n' Groovy (BNGNew2026)

A rebuild of the Biscuits 'n' Groovy music-collecting app. The look blends the original BnG yellow (`#f5ee0d`) and teal (`#25c1a9`) branding with a Spotify-style web-player layout.

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack, Cache Components, `proxy.ts`) |
| Styling | Tailwind CSS 4: design tokens live in `src/app/globals.css` under `@theme` |
| Client state | zustand 5 (`src/stores`) |
| Auth and data | Supabase (`@supabase/ssr`) |
| Forms | React 19 `useActionState` with Server Actions, validated by zod |
| Tests | Vitest 5, Testing Library, jest-dom, jest-extended |
| Icons | lucide-react, plus the original yellow BnG SVGs in `public/assets` |

## Getting started

```bash
cp .env.example .env.local   # fill in the Supabase + Google keys
npm install
npm run dev                  # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` / `build` / `start` | Next.js dev server, production build, production server |
| `npm test` | Vitest in watch mode |
| `npm run test:run` | Vitest single run (CI) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint (Next + Prettier config) |
| `npm run format` | Prettier |

### Environment variables

| Name | Used by |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase clients (browser, server, proxy) |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase clients |
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | `GoogleOneTapButton` (not yet mounted) |
| `NEXT_PUBLIC_SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_SECRET` | Supabase Google provider config |

## Routes

| URL | File | Notes |
| --- | --- | --- |
| `/` | `app/(main)/page.tsx` | Hero, How It Works, Music Showcase, What's a Biscuit?, Attention |
| `/releases` | `app/(main)/releases/page.tsx` | Release grid |
| `/search` | `app/(main)/search/page.tsx` | Live filter synced to `?q=` |
| `/faq` | `app/(main)/faq/page.tsx` | Accordion questions + NFTs Explained (`#nft-scroll-purchase`) |
| `/about` | `app/(main)/about/page.tsx` | Mission, principles, How We Serve (Fans/Artists tabs), Our Story |
| `/artists` | `app/(main)/artists/page.tsx` | Pitch, How it Works, Why Release With Us, inquiry form (`#artists-form`) |
| `/vault` | `app/(main)/vault/page.tsx` | Past drops; each card opens a details + tracklist dialog |
| `/events` | `app/(main)/events/page.tsx` | Event details, live countdown, map, artist socials |
| `/collection` | `app/(main)/collection/page.tsx` | Private. Live and expired biscuits, View NFT dialog |
| `/terms` | `app/(main)/terms/page.tsx` | Legal hub, plus `/terms/privacy-policy`, `/terms/subscriber`, `/terms/music-purchase` and `/terms/nft` |
| `/account` | `app/(main)/account/page.tsx` | Private. Guarded by `src/proxy.ts` and re-checked on the server |
| `/confirm-account`, `/error` | `app/(main)/…` | Status screens |
| `/signin`, `/signup` | `app/(auth)/…` | Centered auth card with no app shell |
| `/auth/callback`, `/auth/confirm`, `/auth/signout` | `app/auth/…/route.ts` | Supabase route handlers |

`(main)` and `(auth)` are route groups. They choose a layout and never change the URL.

## Project structure

```
src/
  app/            routes, layouts, globals.css (theme tokens)
  components/
    ui/           Button (pill variants), Input, Card, Avatar, Dropdown, PlayButton
    layout/       AppShell, Sidebar, TopBar, MobileTabBar, SignupBanner, PageHeader, …
    navigation/   NavLink, AccountSection, UserMenu, SignOutButton
  features/       one folder per domain: home, releases, search, auth, account
                  (components, data, server actions, zod schemas, tests together)
  lib/            supabase clients, logger, cn(), route helpers
  providers/      SessionLoader (server) → AuthSync (client) → useUserStore
  stores/         zustand: useUserStore (session), useUIStore (persisted UI prefs)
  types/
test/             Vitest setup and Next.js mocks
```

### How auth state flows

1. `src/proxy.ts` refreshes the Supabase session cookie on every request and redirects anonymous visitors away from `/account`.
2. The root layout renders `<SessionLoader />` inside `<Suspense>`. With Cache Components, cookie reads must stream, so the rest of the shell stays prerendered. `SessionLoader` reads the user on the server and hands a narrowed `AppUser` to `AuthSync`.
3. `AuthSync` seeds `useUserStore` and subscribes to Supabase `onAuthStateChange`. Client components such as `AccountSection`, `SignupBanner` and `Sidebar` read from the store.
4. Server Actions (`features/*/actions.ts`) re-check the session themselves and call `revalidatePath('/', 'layout')` so the store picks up sign-in and sign-out changes.

## Notes and known gaps

- **Placeholder data** (built from existing photos) backs the release grids, `/collection` and `/vault`: `features/releases/data/sample-releases.ts`, `features/collection/data/sample-collection.ts` and `features/vault/data/sample-vault.ts`. Replace them with Supabase queries.
- The newsletter form and the artist inquiry form validate input but don’t send it anywhere yet. The original posted both to Mailchimp.
- `/events` shows the original ZEVY event (Nov 2021, now marked as ended). Its flyer image wasn’t in either repo, so a crowd photo stands in.
- Payment / Stripe checkout from the original app is not ported.
- `GoogleOneTapButton` is ported but not mounted, as in the original.
