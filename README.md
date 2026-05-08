# Portfolio Website

A personal portfolio website built with Next.js 16, React 19, Tailwind CSS v4, and EmailJS.

The app features a home page with a hero section, technical skills overview, a project gallery, and a contact form with email delivery.

## Features

- Responsive single-page portfolio layout
- Home sections for hero, skills, and contact
- Project detail cards with live demo links
- Contact form powered by EmailJS
- Custom local fonts and SVG/graphic styling

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS v4
- TypeScript
- EmailJS for client-side email submission
- React Hook Form for form validation
- React Hot Toast for user notifications

## Project Structure

- `app/`
    - `page.tsx` — main home page
    - `projects/page.tsx` — project listing page
    - `layout.tsx` — root layout with global styles and fonts
    - `globals.css` — Tailwind and custom global utilities
    - `components/` — reusable UI sections and form components

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment variables in a `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

3. Run the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`

## Available Scripts

- `npm run dev` — start development server
- `npm run build` — build the app for production
- `npm run start` — start the production server
- `npm run lint` — run ESLint
- `npm run test` — run Vitest tests
- `npm run prettier` — format code
- `npm run prettier:check` — check formatting

## Notes

- The contact form uses EmailJS and requires valid public keys and service/template IDs.
- The project cards currently include work for a fictional `Anaheim Electronics` site.
- Static assets such as SVGs and fonts are stored under `public/assets/`.

## License

This repository is set up as a private project and does not include an open-source license.
