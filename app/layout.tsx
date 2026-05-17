import type { Metadata, Viewport } from 'next'
import { bonaNova, satoshi } from './utils/fonts'
import './globals.css'
import PageContainer from './components/PageContainer/PageContainer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}

export const metadata: Metadata = {
    title: 'Aaron Armstrong | Software Engineer, Frontend & Design',
    description:
        'Armst209.dev - A portfolio website for Aaron Armstrong - I build modern, accessible and visually pleasing user experiences.',
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
        title: 'Armst209.dev | Software Engineer, Frontend & Design',
        description:
            'A portfolio website for Aaron Armstrong | I build modern, accessible and visually pleasing user experiences.',
        siteName: 'armst209.dev',
        locale: 'en_US',
        type: 'website',
        images: [],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Armst209.dev | Software Engineer, Frontend & Design',
        description:
            'A portfolio website for Aaron Armstrong | I build modern, accessible and visually pleasing user experiences.',
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
        canonical: 'https://armst209.dev',
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${satoshi.className} ${bonaNova.className} h-full antialiased transition-colors duration-400 bg-background-light dark:bg-background-dark text-light dark:text-dark coffee:bg-background-coffee coffee:text-coffee`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem={true}
                    themes={['light', 'dark', 'forest', 'coffee']}
                >
                    <PageContainer>{children}</PageContainer>
                </ThemeProvider>
            </body>
        </html>
    )
}
