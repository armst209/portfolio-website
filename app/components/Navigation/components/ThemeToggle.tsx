'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import DarkModeIcon from '@public/assets/icons/dark-moon.svg'
import LightModeIcon from '@public/assets/icons/sun-light.svg'
import CoffeeModeIcon from '@public/assets/icons/coffee.svg'

import CaretIcon from '@public/assets/icons/caret-down.svg'
import { motion, AnimatePresence } from 'motion/react'

const ThemeToggle = ({ className }: { className?: string }) => {
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
        <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex flex-row h-full items-center justify-center relative mr-6 z-50 cursor-pointer"
        >
            <AnimatePresence mode="wait" initial={true}>
                <motion.div
                    className="mr-1 "
                    key="caret"
                    whileHover={{ scale: 1.2 }}
                    animate={{ rotate: showDropdown ? 180 : 0 }}
                    transition={{ duration: 0.15 }}
                >
                    <Image
                        src={CaretIcon}
                        alt="dropdown caret icon"
                        width={15}
                        className={`flex black-color-filter dark:hidden coffee:hidden`}
                    />
                    <Image
                        src={CaretIcon}
                        alt="dropdown caret icon"
                        width={15}
                        className="hidden orange-color-filter coffee:hidden dark:flex"
                    />
                    <Image
                        src={CaretIcon}
                        alt="dropdown caret icon"
                        width={15}
                        className="hidden coffee-color-filter coffee:flex dark:hidden"
                    />
                </motion.div>
            </AnimatePresence>
            <div>
                <AnimatePresence mode="wait" initial={true}>
                    {isLightMode && (
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
                    )}
                    {isDarkMode && (
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
                    {isCoffeeMode && (
                        <motion.div
                            key={'coffee'}
                            initial={{ x: 20, opacity: 0, rotate: 90 }}
                            animate={{ x: 0, opacity: 1, rotate: 0 }}
                            exit={{ x: -20, opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.15 }}
                        >
                            <Image
                                src={CoffeeModeIcon}
                                alt="coffee mode icon"
                                width={26}
                                className="coffee-color-filter"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {showDropdown && (
                <motion.div
                    animate={showDropdown ? 'enter' : 'exit'}
                    transition={{ duration: 0.15 }}
                    className="bg-white cursor-pointer font-bold text-xl p-4 flex flex-col justify-center items-center absolute top-0 mt-10 border-2 border-light-border rounded-md dark:bg-black-custom coffee:bg-background-coffee"
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
