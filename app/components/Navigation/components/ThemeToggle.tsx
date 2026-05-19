'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import DarkModeIcon from '@public/assets/icons/dark-moon.svg'
import LightModeIcon from '@public/assets/icons/sun-light.svg'
import CoffeeModeIcon from '@public/assets/icons/coffee.svg'
import CaretIcon from '../../Images/CaretIcon'
import { motion, AnimatePresence } from 'motion/react'

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()

    const isLightMode = resolvedTheme === 'light'
    const isDarkMode = resolvedTheme === 'dark'
    const isCoffeeMode = resolvedTheme === 'coffee'

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const toggleTheme = (theme: string) => {
        setTheme(theme)
        setShowDropdown(false)
    }

    return (
        <div className="relative mr-6 z-50">
            <button
                id="theme-mode-trigger"
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex flex-row h-full items-center justify-center cursor-pointer"
                aria-expanded={showDropdown}
                aria-controls="theme-mode-menu"
                aria-label="Toggle Theme Modes Menu"
                aria-haspopup="menu"
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        className="mr-1 "
                        key="caret"
                        animate={{ rotate: showDropdown ? 180 : 0 }}
                        transition={{ duration: 0.15 }}
                    >
                        <CaretIcon />
                    </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait" initial={false}>
                    {isLightMode && (
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
                                className="black-color-filter"
                            />
                        </motion.div>
                    )}
                    {isDarkMode && (
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
                                className="white-color-filter"
                            />
                        </motion.div>
                    )}
                    {isCoffeeMode && (
                        <motion.div
                            key={'coffee'}
                            initial={{ x: 20, opacity: 0, rotate: 90 }}
                            animate={{ x: 0, opacity: 1, rotate: 0 }}
                            exit={{ x: -20, opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Image
                                src={CoffeeModeIcon}
                                alt="coffee mode icon"
                                width={26}
                                className="dark-coffee-color-filter"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>

            {showDropdown && (
                <motion.div
                    id="theme-mode-dropdown"
                    aria-labelledby="theme-mode-trigger"
                    role="dialog"
                    animate={showDropdown ? 'enter' : 'exit'}
                    transition={{ duration: 0.15 }}
                    className="bg-white cursor-pointer font-bold text-xl p-4 flex flex-col justify-center items-center absolute top-0 right-0 mt-10 border-2 border-light-border rounded-md dark:bg-black-custom coffee:bg-background-coffee"
                >
                    {!isLightMode && (
                        <button
                            className="p-4 w-full text-center cursor-pointer"
                            onClick={() => toggleTheme('light')}
                        >
                            Light
                        </button>
                    )}
                    {!isLightMode && <div className="border-b border-light-border w-full"></div>}
                    {!isDarkMode && (
                        <button
                            className="p-4 w-full text-center cursor-pointer"
                            onClick={() => toggleTheme('dark')}
                        >
                            Dark
                        </button>
                    )}
                    {!isCoffeeMode && <div className="border-b border-light-border w-full"></div>}
                    {!isCoffeeMode && (
                        <button
                            className="p-4 w-full text-center cursor-pointer"
                            onClick={() => toggleTheme('coffee')}
                        >
                            Coffee
                        </button>
                    )}
                </motion.div>
            )}
        </div>
    )
}

export default ThemeToggle
