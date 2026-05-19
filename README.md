# Portfolio Website

> A modern, fully responsive portfolio showcasing projects, skills, and experience. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS with a focus on accessibility and performance.

## 🎯 Overview

This is a personal portfolio website designed to create a strong professional impression through a clean, modern interface. It features a comprehensive hero section, skills showcase, project gallery, and an integrated contact form to enable visitor engagement.

**Key Highlights:**

- ⚡ Fast and optimized with Next.js App Router
- 🎨 Beautiful, responsive design with Tailwind CSS
- 🌓 Dark/Light theme support with `next-themes`
- ♿ Accessibility-first approach with vitest-axe testing
- 📧 EmailJS integration for contact form submissions
- 🎬 Smooth animations with Motion library
- 📱 Mobile-optimized with adaptive navigation

## ✨ Features

- **Responsive Design** — Mobile-first approach with breakpoints for all screen sizes
- **Theme Support** — Toggle between dark and light modes with user preference persistence
- **Project Gallery** — Showcase your best work with custom project cards
- **Contact Form** — Integrated EmailJS for direct visitor messaging
- **Modern Animations** — Smooth transitions and interactive elements using Motion
- **Comprehensive Testing** — Unit tests and accessibility checks with Vitest and vitest-axe
- **SEO Optimized** — Robots.txt and sitemap.ts for search engine visibility
- **Performance Focused** — Optimized images, lazy loading, and efficient bundle size

## 🛠 Tech Stack

| Category             | Technology                          |
| -------------------- | ----------------------------------- |
| **Framework**        | Next.js 16 (App Router)             |
| **UI Library**       | React 19                            |
| **Language**         | TypeScript                          |
| **Styling**          | Tailwind CSS 4                      |
| **Animations**       | Motion 12                           |
| **Forms**            | React Hook Form, React Hot Toast    |
| **Notifications**    | EmailJS                             |
| **Theme Management** | next-themes                         |
| **Testing**          | Vitest, vitest-axe, Testing Library |
| **Linting**          | ESLint 9                            |
| **Formatting**       | Prettier                            |

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── ContactMe/       # Contact form section
│   │   ├── Navigation/      # Header navigation
│   │   ├── Hero/            # Hero section
│   │   ├── Footer/          # Footer component
│   │   ├── Sections/        # Content sections (skills, experience, etc.)
│   │   └── ...
│   ├── projects/            # Projects page and cards
│   ├── about/               # About page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── public/
│   ├── assets/              # Images, icons, favicons
│   └── fonts/               # Custom fonts
├── utils/
│   ├── content.ts           # Shared content/data
│   └── fonts.ts             # Font configuration
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd portfolio-website
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Configure environment variables:**

    Create a `.env.local` file in the root directory:

    ```env
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
    ```

    > Get these from your [EmailJS Dashboard](https://dashboard.emailjs.com/)

4. **Start the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command                  | Purpose                                  |
| ------------------------ | ---------------------------------------- |
| `npm run dev`            | Start development server with hot reload |
| `npm run build`          | Build optimized production bundle        |
| `npm run start`          | Start production server                  |
| `npm run lint`           | Run ESLint to check code quality         |
| `npm run test`           | Run unit and integration tests           |
| `npm run test:ui`        | Run tests with interactive UI            |
| `npm run prettier`       | Format all files with Prettier           |
| `npm run prettier:check` | Check formatting without modifying files |

## 🧪 Testing

This project includes comprehensive testing coverage:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test -- --coverage
```

Tests include:

- **Unit Tests** — Component logic and functionality
- **Accessibility Tests** — Powered by vitest-axe to ensure WCAG compliance
- **Integration Tests** — Form submissions and user interactions

## 🔧 Configuration

### Tailwind CSS

Customization can be done in `tailwind.config.ts`. The project uses Tailwind CSS 4 with PostCSS.

### TypeScript

Strict type checking is enabled. See `tsconfig.json` for configuration options.

### Next.js

App Router is configured in `next.config.ts` with performance optimizations.

## 🎨 Customization

- **Content** — Edit `app/utils/content.ts` to update portfolio information
- **Styling** — Modify Tailwind classes in component files or extend `tailwind.config.ts`
- **Colors/Theme** — Update theme colors in `tailwind.config.ts` and component classes
- **Components** — Add or modify components in `app/components/`

## 📝 License

This project is open source. Feel free to use it as a template for your own portfolio.

## 📧 Contact

For questions or feedback about the portfolio, please use the contact form on the website or reach out directly.

## Files to check first

- [app/layout.tsx](app/layout.tsx) — root layout and fonts
- [app/page.tsx](app/page.tsx) — home page
- [app/components/Navigation/Navigation.tsx](app/components/Navigation/Navigation.tsx) — main navigation

## Notes

- The contact form requires EmailJS keys to send messages.
- Static assets live in `public/` and project images are under `public/assets/project-photos/`.

## License & author

This repository is a personal portfolio. For questions or updates, open an issue or contact [armst209](https://www.linkedin.com/in/aaronlamararmstrong/) via the contact form on the site.
