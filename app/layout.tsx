import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import PageContainer from './components/PageContainer'


const satoshi = localFont({
    src: [
        {
            path: '../public/fonts/Satoshi-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/Satoshi-Italic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../public/fonts/Satoshi-Bold.woff2',
            weight: '900',
            style: 'bold',
        },
    ],
})

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}


export const metadata: Metadata = {
    title: 'Aaron Armstrong | Frontend Developer',
    description:
        'Armst209.dev - A portfolio website for Aaron Armstrong - A developer with 6+ years of experience who is passionate about building modern, accessible and visually pleasing user experiences.',
    keywords: ["Aaron", "Armstrong", "Aaron Armstrong", "developer", "frontend", "front-end", "frontend developer", "engineer", "frontend engineer", "javascript", "css", "ux design", "ui/ux design", "web accessibility", "portfolio"],
    openGraph: {
        title: "Armst209.dev - Aaron Armstrong | Frontend Developer",
        description: "A portfolio website for Aaron Armstrong - A developer with 6+ years of experience who is passionate about building modern, accessible and visually pleasing user experiences.",
        siteName: "armst209.dev",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "",
                width: "",
                height: ""
            }

        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Armst209.dev - Aaron Armstrong | Frontend Developer",
        description: "A portfolio website for Aaron Armstrong - A developer with 6+ years of experience who is passionate about building modern, accessible and visually pleasing user experiences.",
        creator: "@armst209dev",
        images: []
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": "-1"
        }
    },
    alternates: {
        canonical: "https://armst209.dev"
    },
    icons: {
        icon: [
            {
                url: "/favicon.ico",
                type: "image/x-icon"
            },
            {
                url: "/assets/favicons/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png"
            },
            {
                url: "/assets/favicons/favicon-96x96.png",
                sizes: "96x96",
                type: "image/png"
            },
            {
                url: "/assets/favicons/favicon-128.png",
                sizes: "128x128",
                type: "image/png"
            },
            {
                url: "/assets/favicons/favicon-196x196.png",
                sizes: "196x196",
                type: "image/png"
            }

        ],
        shortcut: [
            {
                url: "/favicon.ico",
                type: "image/x-icon"
            }
        ],
        apple: [
            {
                url: "/assets/favicons/apple-touch-icon-57x57.png",
                sizes: "57x57",
                type: "image/png"
            },
            {
                url: "/assets/favicons/apple-touch-icon-60x60.png",
                sizes: "60x60",
                type: "image/png"
            },
            {
                url: "/assets/favicons/apple-touch-icon-72x72.png",
                sizes: "72x72",
                type: "image/png"
            },
            {
                url: "/assets/favicons/apple-touch-icon-76x76.png",
                sizes: "76x76",
                type: "image/png"
            },
            {
                url: "/assets/favicons/apple-touch-icon-114x114.png",
                sizes: "114x114",
                type: "image/png"
            },
            {
                url: "/assets/favicons/apple-touch-icon-120x120.png",
                sizes: "120x120",
                type: "image/png"
            },
            {
                url: "/assets/favicons/apple-touch-icon-144x144.png",
                sizes: "144x144",
                type: "image/png"
            },
            {
                url: "/assets/favicons/apple-touch-icon-152x152.png",
                sizes: "152x152",
                type: "image/png"
            }


        ]
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang='en'
            className={`${satoshi.className} h-full antialiased`}
            suppressHydrationWarning
        >
            <body >
                <PageContainer>
                    {children}
                </PageContainer>
            </body>
        </html >
    )
}