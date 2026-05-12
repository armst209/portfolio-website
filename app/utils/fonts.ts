import localFont from 'next/font/local'

export const satoshi = localFont({
    src: [
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
            path: '../../public/fonts/Satoshi-Bold.woff2',
            weight: '900',
            style: 'bold',
        },
    ],
})

export const scheherazadeNew = localFont({
    src: [
        {
            path: '../../public/fonts/scheherazade-new-latin-400-normal.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/scheherazade-new-latin-700-normal.woff2',
            weight: '700',
            style: 'bold',
        },
    ],
})
