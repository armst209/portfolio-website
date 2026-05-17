'use client'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

const FaviconSwitcher = () => {
    const { theme, resolvedTheme } = useTheme()

    useEffect(() => {
        const isSystem = resolvedTheme === 'system'
        const isCoffee = resolvedTheme === 'coffee'
        const isDark = resolvedTheme === 'dark'
        const isLight = resolvedTheme === 'light'

        const link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']")

        if (link) {
            if (isSystem) link.href = '/public/favicon.ico'
            if (isCoffee) link.href = '/public/favicon-coffee.ico'
            if (isLight) link.href = '/public/favicon-light.ico'
            if (isDark) link.href = '/public/favicon.ico'
        }
    }, [theme, resolvedTheme])
    return null
}

export default FaviconSwitcher
