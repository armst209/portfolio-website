'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import DarkModeIcon from '@public/assets/icons/dark-moon.svg'
import LightModeIcon from '@public/assets/icons/sun-light.svg'

const ThemeToggle = ({ className }: { className: string }) => {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button onClick={toggleTheme} className={`${className} cursor-pointer`}>
            {resolvedTheme === 'light' ? (
                <Image
                    src={DarkModeIcon}
                    alt="dark mode icon"
                    width={25}
                    className="black-color-filter"
                />
            ) : (
                <Image
                    src={LightModeIcon}
                    alt="light mode icon"
                    width={25}
                    className="orange-color-filter"
                />
            )}
        </button>
    )
}

export default ThemeToggle
