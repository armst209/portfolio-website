'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'

interface MyImageProps {
    DefaultImage: string
    DarkImage: string
}

const ThemeImage: React.FC<MyImageProps> = ({ DefaultImage, DarkImage }) => {
    const { theme } = useTheme()

    let imageUrl = DefaultImage
    if (theme === 'dark') {
        imageUrl = DarkImage
    }

    return (
        <Image
            alt="Hero Image"
            src={imageUrl}
            placeholder="blur"
            fetchPriority="high"
            blurDataURL="sdfgsgs"
        />
    )
}

export default ThemeImage
