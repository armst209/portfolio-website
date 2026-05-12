'use client'

import Image from 'next/image'
import Link from 'next/link'
import HamburgerIcon from '@public/assets/icons/bars-staggered.svg'
import ScribblePeriod from '@public/assets/icons/scribble-blob.svg'
import CloseIcon from '@public/assets/icons/close.svg'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import SiteLogo from './SiteLogo'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMobileMenu = () => setIsOpen(!isOpen)
    const closeMobileMenu = () => setIsOpen(false)
    const pathname = usePathname()

    return (
        <header className="grid place-items-center sticky top-0 z-50 h-20 w-full box-shadow-custom bg-background-light dark:bg-background-dark dark:border-b-0">
            <nav className="flex justify-center w-full md:w-[90%]">
                <div className=" flex justify-between p-4  lg:items-center w-full">
                    <SiteLogo />
                    <div className="relative flex">
                        <ThemeToggle className="mr-6" />
                        <div id="desktop-menu" className="hidden lg:flex">
                            <div className="font-bold flex items-center">
                                <Link className="mr-6" href="/">
                                    Home
                                </Link>
                                <Link className="mr-6" href="/projects">
                                    Projects
                                </Link>
                                <Link className="mr-6" href="/about">
                                    About
                                </Link>
                                <a href={`${pathname !== '/' ? '/#contact' : '#contact'}`}>
                                    Contact
                                </a>
                            </div>
                        </div>

                        <button
                            id="hamburger"
                            className="flex lg:hidden"
                            onClick={toggleMobileMenu}
                            aria-label="Open Navigation"
                        >
                            <Image
                                src={HamburgerIcon}
                                width={25}
                                alt="mobile menu icon"
                                className="hidden white-color-filter dark:flex"
                            />
                            <Image
                                src={HamburgerIcon}
                                width={25}
                                alt="mobile menu icon"
                                className="flex black-color-filter dark:hidden"
                            />
                        </button>

                        <div
                            role="dialog"
                            id="mobile-menu"
                            aria-label="mobile menu"
                            aria-expanded={isOpen}
                            className={`w-full h-screen flex fixed inset-0 z-50 transition-transform duration-300 ease-out shadow(12px 9px 18px 5px rgba(0,0,0,0.84)) transform ${isOpen ? ' translate-x-0' : 'translate-x-full'} bg-background-light dark:bg-background-dark lg:hidden`}
                        >
                            <button
                                onClick={closeMobileMenu}
                                className="absolute top-0 flex justify-end w-full pt-5 pr-3"
                                aria-label="Close Navigation"
                            >
                                <Image
                                    src={CloseIcon}
                                    alt="close navigation icon"
                                    width={40}
                                    className="hidden white-color-filter dark:flex"
                                />
                                <Image
                                    src={CloseIcon}
                                    alt="close navigation icon"
                                    width={40}
                                    className="flex black-color-filter dark:hidden"
                                />
                            </button>
                            <div className="z-10 relative font-bold text-6xl flex flex-col pt-20 pl-4 h-full">
                                <Link
                                    className="mr-2 flex flex-row items-center focus-visible:outline-1"
                                    href="/"
                                    onNavigate={closeMobileMenu}
                                >
                                    <p>Home</p>
                                    <div>
                                        <Image
                                            src={ScribblePeriod}
                                            className="orange-color-filter ml-2 w-10"
                                            alt="scribble blob period"
                                        />
                                    </div>
                                </Link>
                                <Link
                                    className="mr-2 flex flex-row items-center"
                                    href="/projects"
                                    onNavigate={closeMobileMenu}
                                >
                                    <p>Projects</p>
                                    <div>
                                        <Image
                                            src={ScribblePeriod}
                                            className="orange-color-filter ml-2 w-10"
                                            alt="scribble blob period"
                                        />
                                    </div>
                                </Link>
                                <Link
                                    className="mr-2 flex flex-row items-center"
                                    href="/about"
                                    onNavigate={closeMobileMenu}
                                >
                                    <p>About</p>
                                    <div>
                                        <Image
                                            src={ScribblePeriod}
                                            className="orange-color-filter ml-2 w-10"
                                            alt="scribble blob period"
                                        />
                                    </div>
                                </Link>
                                <a
                                    href={`${pathname !== '/' ? '/#contact' : '#contact'}`}
                                    className="w-70 flex flex-row items-center"
                                    onClick={closeMobileMenu}
                                >
                                    <p>Contact</p>
                                    <div>
                                        <Image
                                            src={ScribblePeriod}
                                            className="orange-color-filter ml-2 w-10"
                                            alt="scribble blob period"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navigation
