import localFont from 'next/font/local'

export const satoshi = localFont({
    src: [
        {
            path: '../../public/fonts/Satoshi-Light.woff2',
            weight: '400',
            style: 'light',
        },
        {
            path: '../../public/fonts/Satoshi-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Satoshi-Italic.woff2',
            weight: '400',
            style: 'italic',
        },

        {
            path: '../../public/fonts/Satoshi-Medium.woff2',
            weight: '600',
            style: 'medium',
        },

        {
            path: '../../public/fonts/Satoshi-Bold.woff2',
            weight: '900',
            style: 'bold',
        },
    ],
})
