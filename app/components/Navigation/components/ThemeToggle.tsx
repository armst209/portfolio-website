'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import DarkModeIcon from '@public/assets/icons/dark-moon.svg'
import LightModeIcon from '@public/assets/icons/sun-light.svg'
import ChocolateModeIcon from '@public/assets/icons/chocolate.svg'
import { motion, AnimatePresence, animate } from 'motion/react'

const ThemeToggle = ({ className }: { className?: string }) => {
    const [mounted, setMounted] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()

    const isLightMode = resolvedTheme === 'light'

    const toggleTheme = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
        setTimeout(() => setIsAnimating(false), 500)
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="flex flex-row h-full items-center justify-center">
            <button onClick={toggleTheme} className={`${className} cursor-pointer relative`}>
                <AnimatePresence mode="wait" initial={false}>
                    {isLightMode ? (
                        <motion.div
                            key={'moon'}
                            initial={{ y: -20, opacity: 0, rotate: -90 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: 20, opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.15 }}
                        >
                            <Image
                                src={DarkModeIcon}
                                alt="dark mode icon"
                                width={25}
                                className="black-color-filter"
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key={'sun'}
                            initial={{ y: 20, opacity: 0, rotate: 90 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: -20, opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.15 }}
                        >
                            <Image
                                src={LightModeIcon}
                                alt="light mode icon"
                                width={25}
                                className="orange-color-filter"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </div>
    )
}

export default ThemeToggle
