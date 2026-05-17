'use client'

import SiteLogo from '../Utility/SiteLogo'
import ThemeToggle from './components/ThemeToggle'
import DesktopNavbar from './components/DesktopNavbar'
import MobileNavbar from './components/MobileNavbar'
import { useScroll } from 'motion/react'
import { motion } from 'motion/react'

const Navigation = () => {
    const { scrollYProgress } = useScroll()

    return (
        <header className="grid place-items-center sticky top-0 z-50 h-20 w-full box-shadow-custom bg-background-light dark:bg-background-dark dark:border-b-0 coffee:bg-background-coffee">
            <nav className=" flex justify-center w-full md:w-[90%]">
                <div className="flex justify-between p-4  lg:items-center w-full">
                    <SiteLogo />
                    <div className=" flex items-center">
                        <ThemeToggle className="mr-6" />
                        <DesktopNavbar />
                        <MobileNavbar />
                    </div>
                </div>
            </nav>
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-black-custom dark:bg-orange-custom coffee:bg-background-coffee-secondary"
                style={{
                    scaleX: scrollYProgress,
                    originX: 0,
                }}
            ></motion.div>
        </header>
    )
}

export default Navigation
