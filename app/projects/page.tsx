import AnaheimElectronicsCard from './AnaheimElectronicsCard'
import BiscuitsNGroovyCard from './BiscuitsNGroovyCard'
import SemiColonPeriodScribble from '../components/SemiColonPeriodScribble'
import { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}

export const metadata: Metadata = {
    title: 'Personal Projects | Software Engineer, Frontend & Design',
    description:
        'Personal Projects - A portfolio website for Aaron Armstrong - I build modern, accessible and visually pleasing user experiences.',
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
        title: 'Armst209.dev - Software Engineer, Frontend & Design',
        description:
            'A portfolio website for Aaron Armstrong - I build modern, accessible and visually pleasing user experiences.',
        siteName: 'armst209.dev',
        locale: 'en_US',
        type: 'website',
        images: [],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Personal Projects - Aaron Armstrong | Software Engineer, Frontend & Design',
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
        canonical: 'https://armst209.dev/projects',
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

const Projects = () => {
    return (
        <section className="p-4 pt-20 pb-20 w-full flex flex-col justify-center items-center">
            <div className="w-full items-center justify-center">
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <h1 className="flex flex-row items-center text-6xl pb-2 font-bold text-shadow-lg/30">
                            <p>Personal Projects</p>
                        </h1>
                    </div>
                    <h2 className="text-md sm:text-xl xl:text-2xl">
                        Here you will find a collection of my completed and in-progress work
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-4 pt-10 place-items-center lg:grid-cols-2">
                    <AnaheimElectronicsCard />
                    <BiscuitsNGroovyCard />
                </div>
            </div>
        </section>
    )
}

export default Projects
