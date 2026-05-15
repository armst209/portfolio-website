# Portfolio Website

A modern personal portfolio built with Next.js 16, React 19, Tailwind CSS v4, and EmailJS.

This repository demonstrates a frontend portfolio layout with hero content, skill sections, project cards, and a contact form that sends email requests through EmailJS.

## Key Features

- Responsive portfolio site with modern layout and animation-ready components
- Hero section, skills overview, project gallery, and contact form
- Project detail cards with live/demo links and descriptive content
- Client-side contact form powered by EmailJS
- Theme-aware design with dark/light mode support
- TypeScript, Tailwind CSS, and accessibility-minded UI components

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- EmailJS (`@emailjs/browser`)
- React Hook Form
- React Hot Toast
- Lucide React icons
- shadcn UI utilities

## Repository Structure

- `app/`
    - `page.tsx` — main home page
    - `projects/page.tsx` — project showcase page
    - `layout.tsx` — root layout and global styling
    - `globals.css` — Tailwind base styles and custom utilities
    - `about/` — about page and supporting components
- `public/` — static assets, fonts, and images
- `app/components/` — reusable UI sections and page components
- `app/utils/` — shared data and helper modules

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file at the project root and add EmailJS variables:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app at:

```text
http://localhost:3000
```

## Scripts

- `npm run dev` — run the Next.js development server
- `npm run build` — build the app for production
- `npm run start` — run the production server
- `npm run lint` — run ESLint
- `npm run test` — run Vitest
- `npm run prettier` — format files with Prettier
- `npm run prettier:check` — verify formatting

## Notes

- The contact form relies on EmailJS and requires valid public keys and service/template IDs.
- Static assets, fonts, and images are served from `public/`.
- The project includes example work such as fictional portfolio projects for demonstration.

## License

This repository is private and does not include a public open-source license.
