import { Metadata, Viewport } from 'next'
import Image from 'next/image'
import AboutMeHeadShotDark from '@public/assets/AboutMeHeadshot_Dark.webp'
import AboutMeHeadShotLight from '@public/assets/AboutMeHeadshot_Light.webp'
import AboutMeHeadShotCoffee from '@public/assets/AboutMeHeadshot_Coffee.webp'
import ScribbledDashPartition from '../components/Partitions/ScribbledDashPartition'

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
            <div className="flex flex-row w-full mb-10">
                <h1 className="font-display flex flex-row items-center text-6xl pb-2 font-bold hero-text-h1">
                    <p>About Me</p>
                </h1>
            </div>
            <article className="flex flex-col justify-center items-center w-full">
                <Image
                    src={AboutMeHeadShotDark}
                    alt="about me headshot"
                    className="hidden w-50 about-image-float pb-6 lg:w-90 dark:flex coffee:hidden"
                    quality={75}
                    placeholder="blur"
                    preload={true}
                />
                <Image
                    src={AboutMeHeadShotLight}
                    alt="about me headshot"
                    className="flex w-50 about-image-float pb-6 lg:w-90 dark:hidden coffee:hidden"
                    quality={75}
                    placeholder="blur"
                    preload={true}
                />
                <Image
                    src={AboutMeHeadShotCoffee}
                    alt="about me headshot"
                    className="hidden w-50 about-image-float pb-6 lg:w-90 dark:hidden coffee:flex"
                    quality={75}
                    placeholder="blur"
                    preload={true}
                />
                <ScribbledDashPartition />
                <div className="flex flex-col justify-center items-center w-full xl:hidden">
                    <p className="text-md mb-4 wrap-normal w-full md:text-xl lg:text-2xl xl:mb-0 xl:text-3xl">
                        Hi! My name is Aaron Armstrong! I am a software engineer with 6+ years of
                        experience, focusing on frontend development and design.
                    </p>
                    <p className="text-md mb-4 wrap-normal w-full md:text-xl lg:text-2xl xl:mb-0 xl:text-3xl">
                        I specialize in creating robust and visually pleasing user interfaces,
                        optimizing website functionality and performance, and curating modern and
                        accessible user experiences.
                    </p>
                    <p className="text-md wrap-normal w-full md:text-xl lg:text-2xl xl:text-3xl">
                        I've spent most of career working in the financial technology and automotive
                        industries, building in-house and client facing web applications.
                    </p>
                </div>
                <div>
                    <p className="hidden text-3xl xl:flex">
                        Hi! My name is Aaron Armstrong! I am a software engineer with 6+ years of
                        experience, focusing on frontend development and design. I specialize in
                        creating robust and visually pleasing user interfaces, optimizing website
                        functionality and performance, and curating modern and accessible user
                        experiences. I've spent most of career working in the financial technology
                        and automotive industries, building in-house and client facing web
                        applications.
                    </p>
                </div>

                <ScribbledDashPartition />
                <div className="w-full flex justify-start mb-4">
                    <h2 className="text-2xl font-bold lg:text-3xl">How I got started</h2>
                </div>

                <p className="text-md wrap-normal w-full md:text-xl lg:text-2xl xl:text-3xl">
                    I started out as a teacher, instructing and tutoring kids ages 3 to 11 years
                    old. I then moved to technical recruiting and finally to software engineering
                    through a frontend boot-camp.
                </p>

                <p className="hidden text-highlight-coffee text-3xl font-bold mt-10 dark:hidden coffee:flex">
                    Also, I really like coffee.
                </p>
            </article>
            <div></div>
        </section>
    )
}

export default About
