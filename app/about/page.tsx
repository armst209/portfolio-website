import { Metadata, Viewport } from 'next'
import Image from 'next/image'
import AboutMeHeadShot from '@public/assets/AboutMeHeadshot.webp'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}

export const metadata: Metadata = {
    title: 'About Me | Software Engineer, Frontend & Design',
    description:
        'About Me - A portfolio website for Aaron Armstrong - I build modern, accessible and visually pleasing user experiences.',
    keywords: [
        'Aaron',
        'Armstrong',
        'Aaron Armstrong',
        'developer',
        'frontend',
        'front-end',
        'frontend developer',
        'engineer',
        'frontend engineer',
        'javascript',
        'css',
        'ux design',
        'ui/ux design',
        'web accessibility',
        'portfolio',
    ],
    openGraph: {
        title: 'About Me - Software Engineer, Frontend & Design',
        description:
            'A portfolio website for Aaron Armstrong - I build modern, accessible and visually pleasing user experiences.',
        siteName: 'armst209.dev',
        locale: 'en_US',
        type: 'website',
        images: [],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Me | Software Engineer, Frontend & Design',
        description:
            'A portfolio website for Aaron Armstrong - I build modern, accessible and visually pleasing user experiences.',
        creator: '@armst209dev',
        images: [],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': '-1',
        },
    },
    alternates: {
        canonical: 'https://armst209.dev/about',
    },
    icons: {
        icon: [
            {
                url: '/favicon.ico',
                type: 'image/x-icon',
            },
            {
                url: '/assets/favicons/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                url: '/assets/favicons/favicon-96x96.png',
                sizes: '96x96',
                type: 'image/png',
            },
            {
                url: '/assets/favicons/favicon-128.png',
                sizes: '128x128',
                type: 'image/png',
            },
            {
                url: '/assets/favicons/favicon-196x196.png',
                sizes: '196x196',
                type: 'image/png',
            },
        ],
        shortcut: [
            {
                url: '/favicon.ico',
                type: 'image/x-icon',
            },
        ],
        apple: [
            {
                url: '/assets/favicons/apple-touch-icon-57x57.png',
                sizes: '57x57',
                type: 'image/png',
            },
            {
                url: '/assets/favicons/apple-touch-icon-60x60.png',
                sizes: '60x60',
                type: 'image/png',
            },
            {
                url: '/assets/favicons/apple-touch-icon-72x72.png',
                sizes: '72x72',
                type: 'image/png',
            },
            {
                url: '/assets/favicons/apple-touch-icon-76x76.png',
                sizes: '76x76',
                type: 'image/png',
            },
            {
                url: '/assets/favicons/apple-touch-icon-114x114.png',
                sizes: '114x114',
                type: 'image/png',
            },
            {
                url: '/assets/favicons/apple-touch-icon-120x120.png',
                sizes: '120x120',
                type: 'image/png',
            },
            {
                url: '/assets/favicons/apple-touch-icon-144x144.png',
                sizes: '144x144',
                type: 'image/png',
            },
            {
                url: '/assets/favicons/apple-touch-icon-152x152.png',
                sizes: '152x152',
                type: 'image/png',
            },
        ],
    },
}

const About = () => {
    return (
        <section className="min-h-[calc(100vh-80px)] p-4 pt-20 pb-20 w-full">
            <article className="flex flex-col justify-center items-center w-full">
                <Image
                    src={AboutMeHeadShot}
                    alt="about me headshot"
                    className="w-50 about-image-float pb-6"
                />
                <p className="text-lg">
                    Hi! My name is Aaron Armstrong! I am a software engineer with 6+ years of
                    experience, focusing on frontend development and design. I specialize in
                    creating robust and visually pleasing user interfaces, optimizing website
                    functionality and performance, and curating modern and accessible user
                    experiences. I started out as a teacher, then moving to The bulk of my
                    experience has been with corporate (fintech & automobile industry), where I
                    start in backend work with C# & .NET. I later mo I am very passionate about
                    building modern, accessible and visually pleasing user experiences and (add
                    text). During my time as a teacher, I was very detail-oriented and had to
                    provide example for a wide variety of students. Those same skills transferred
                    over to how I approach frontend development, design and architecture.
                </p>
            </article>
            <div></div>
        </section>
    )
}

export default About
