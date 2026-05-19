import FordLogo from '@public/assets/logos/ford-logo.svg'
import UWMLogo from '@public/assets/logos/uwm-logo.webp'
import BNGLogo from '@public/assets/logos/bng-logo.svg'
import ModernIcon from '@public/assets/icons/modern.svg'
import AccessibilityIcon from '@public/assets/icons/accessibility.svg'
import EyeIcon from '@public/assets/icons/visually-pleasing.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type NavigationItems = {
    id: number | string
    title: string
    pathname: string
}

type ProfessionalExperienceContent = {
    id: number
    header: string
    logo: string | StaticImport
    location: string
    website: string
    contentItems: string[]
    technologies: string[]
}

type ValuesContent = {
    id: number
    title: string
    content: string
    icon: string | StaticImport
}

export const skillSetContent = [
    'UI/UX Design',
    'API Integration',
    'Web Accessibility',
    'Fullstack Development',
    'Frontend Architecture',
]

export const uiuxContent = [
    'Typography',
    'Wireframing',
    'Prototyping',
    'Storytelling',
    'User Testing',
    'Color Selection',
    'Product Branding',
    'Responsive Layouts',
]

export const navItems: NavigationItems[] = [
    { id: 1, title: 'Home', pathname: '/' },
    { id: 2, title: 'Projects', pathname: '/projects' },
    { id: 3, title: 'About', pathname: '/about' },
]

export const professionalExpContent: ProfessionalExperienceContent[] = [
    {
        id: 1,
        header: 'Front End Software Engineer @ Ford Motor Company (2025 - 2026)',
        logo: FordLogo,
        location: 'Dearborn, Michigan',
        website: 'https://www.ford.com/',
        contentItems: [
            'Developed responsive & accessible web applications for 500,000 plus daily users using React, Next.js, Tailwind CSS & Web Component Architecture',
            'Vehicle Purchase - Built a versatile, production-ready lead form web application that generated over 1000 plus purchase leads, using React, Vite & React Hook Form',
            `Vehicle Trade-In - rebuilt & modernized several of Ford's legacy web applications using Next.js, React, Tailwind CSS, Playwright, Monorepo Architecture, Google Firebase, Web Components, Zustand, Tanstack Query`,
        ],
        technologies: [
            'Next.js',
            'Tailwind CSS',
            'Zustand',
            'Web Components',
            'React',
            'Playwright',
            'Javascript',
        ],
    },
    {
        id: 2,
        header: 'UI Developer II @ United Wholesale Mortgage (2021 - 2024)',
        logo: UWMLogo,
        location: 'Pontiac, Michigan',
        website: 'https://www.uwm.com/',
        contentItems: [
            'Supported, maintained, and refactored code base for United Wholesale Mortgage’s proprietary loan origination and marketing software suites (EASE, EDGE, BOLT & Brand360) – utilized Scrum & Agile methodologies',
            'Mortgage Refinance & Title Features (BOLT) – using React, YAML, Data Driven Forms and an in-house-built form templating library, created several UI components & pages that streamlined the title and refinance process for UWM brokers and underwriters – these features also implemented AI and microservice architecture',
            "Loan Origination & Underwriting (EDGE & EASE) - using C#, .NET & Razor, optimized user endpoints & internal-use API's for UWM underwriters & developers",
        ],
        technologies: [
            'Javascript',
            'React',
            'Vue',
            'Next.js',
            'C#',
            '.NET',
            'Blazor',
            'Razor',
            'JQuery',
        ],
    },
    {
        id: 3,
        header: 'Frontend Developer @ Biscuits n Groovy (2021 - 2022)',
        logo: BNGLogo,
        location: 'Detroit, Michigan',
        website: 'https://linktr.ee/bngroovy',
        contentItems: [
            'Planned and designed the frontend aspects of Biscuits n Groovy’s official website (Website is no longer being hosted), ensuring a seamless user experience.',
            'Implemented wire-framing and UI design, adhering to accessibility and ADA standards.',
        ],
        technologies: ['React', 'Redux', 'Figma', 'Lit', 'Vite'],
    },
]

export const valuesContent: ValuesContent[] = [
    {
        id: 1,
        title: 'Modern',
        content:
            'I build with modern frameworks and best practices to create fast, scalable and maintainable applications.',
        icon: ModernIcon,
    },
    {
        id: 2,
        title: 'Accessible',
        content:
            'Accessibility is at the core of what I do. I build inclusive experiences that work for everyone.',
        icon: AccessibilityIcon,
    },
    {
        id: 3,
        title: 'Visually Pleasing',
        content: 'Clean, thoughtful design and attention to detail.',
        icon: EyeIcon,
    },
]
