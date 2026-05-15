# Portfolio Website

A polished personal portfolio built with Next.js 16, React 19, Tailwind CSS v4, and EmailJS.

This repository showcases a frontend portfolio experience with a hero section, skill highlights, project cards, and a client-side contact form.

## Features

- Responsive, modern portfolio layout
- Hero banner, skills overview, and project showcase
- Dedicated projects page with project card components
- Contact form integrated with EmailJS for email submission
- Theme support with dark/light mode styles
- Accessible UI components and structured content

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- EmailJS (`@emailjs/browser`)
- React Hook Form
- React Hot Toast
- Lucide React icons
- `class-variance-authority`, `clsx`, `next-themes`

## Repository Structure

- `app/`
    - `page.tsx` — main home page
    - `projects/page.tsx` — project gallery page
    - `layout.tsx` — root layout, metadata, and font setup
    - `globals.css` — Tailwind base styles and custom utilities
    - `about/` — about page and related components
    - `components/` — reusable UI sections and page pieces
    - `utils/` — shared content and helper modules
- `public/` — static assets, fonts, and images

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file at the repository root and add EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

3. Run the development server:

```bash
npm run dev
```

4. Open the site:

```text
http://localhost:3000
```

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint checks
- `npm run test` — run Vitest tests
- `npm run prettier` — format code
- `npm run prettier:check` — check formatting

## Notes

- The contact form requires EmailJS configuration to send messages.
- Static assets are stored under `public/`.
- This project is configured as a private repository.
