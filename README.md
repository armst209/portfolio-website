# Portfolio Website

A personal portfolio built with Next.js, React and Tailwind CSS. It demonstrates a modern, accessible frontend with sections for a hero, skills, projects, and a contact form.

## Quick overview

- **Purpose:** Showcase projects, skills, and a contact flow for freelance or personal branding.
- **Framework:** Next.js (app router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS

## Features

- Responsive layout and accessible components
- Theme (dark / light) support
- Project gallery with card components
- Client-side contact form integrated with EmailJS
- Unit and accessibility tests with Vitest and vitest-axe

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- EmailJS (`@emailjs/browser`)
- React Hook Form
- React Hot Toast
- Lucide icons

## Repository structure (high level)

- `app/` — application routes and page components
- `app/components/` — reusable UI sections (Hero, Navigation, Footer, etc.)
- `app/projects/` — project pages and cards
- `public/` — static assets, images, fonts
- `utils/` — shared utilities and content

For details, explore the `app/components` tree to see tests alongside components.

## Getting started

Prerequisites:

- Node.js (18+ recommended)
- npm or yarn

Install dependencies:

```bash
npm install
```

Create local environment variables (for EmailJS):

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available scripts

- `npm run dev` — start the Next.js development server
- `npm run build` — build the production site
- `npm run start` — start the production server
- `npm run lint` — run ESLint
- `npm run test` — run Vitest tests
- `npm run test:ui` — run Vitest with the interactive UI
- `npm run prettier` — format files with Prettier
- `npm run prettier:check` — check formatting

## Testing

Run unit and accessibility tests with Vitest:

```bash
npm run test
```

Some components include accessibility checks using `vitest-axe`.

## Deployment

This is a standard Next.js app and can be deployed to Vercel or any platform that supports Next.js. Typical flow:

```bash
npm run build
npm run start
```

For Vercel, connect the repository and use the default Next.js build settings.

## Contributing

Contributions and suggestions are welcome. Common contribution steps:

1. Fork the repository
2. Create a feature branch
3. Run tests and linters
4. Open a pull request with a clear description

## Files to check first

- [app/layout.tsx](app/layout.tsx) — root layout and fonts
- [app/page.tsx](app/page.tsx) — home page
- [app/components/Navigation/Navigation.tsx](app/components/Navigation/Navigation.tsx) — main navigation

## Notes

- The contact form requires EmailJS keys to send messages.
- Static assets live in `public/` and project images are under `public/assets/project-photos/`.

## License & author

This repository is a personal portfolio. For questions or updates, open an issue or contact [armst209](https://www.linkedin.com/in/aaronlamararmstrong/) via the contact form on the site.
