'use client'

import SiteLogo from '../Utility/SiteLogo'
import ThemeToggle from './components/ThemeToggle'
import DesktopNavbar from './components/DesktopNavbar'
import MobileNavbar from './components/MobileNavbar'

const Navigation = () => {
    return (
        <header className="grid place-items-center sticky top-0 z-50 h-20 w-full box-shadow-custom bg-background-light dark:bg-background-dark dark:border-b-0">
            <nav className="flex justify-center w-full md:w-[90%]">
                <div className=" flex justify-between p-4  lg:items-center w-full">
                    <SiteLogo />
                    <div className="relative flex">
                        <ThemeToggle className="mr-6" />
                        <DesktopNavbar />
                        <MobileNavbar />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navigation
