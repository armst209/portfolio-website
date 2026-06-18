import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import ScribblePeriod from '@public/assets/icons/scribble-blob.svg'
import CoffeeBeansIcon from '@public/assets/icons/coffee-beans.svg'
import { navItems } from '@/app/utils/content'
import CloseIcon from '../../Images/icons/CloseIcon'
import MobileMenuIcon from '../../Images/icons/MobileMenuIcon'

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMobileMenu = () => setIsOpen(!isOpen)
    const closeMobileMenu = () => setIsOpen(false)
    const pathname = usePathname()
    return (
        <>
            <button
                id="mobile-menu-toggle"
                className="flex lg:hidden"
                onClick={toggleMobileMenu}
                aria-label="Open Mobile Navigation"
                aria-haspopup="menu"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
            >
                <MobileMenuIcon />
            </button>
            <div
                role="dialog"
                id="mobile-menu"
                aria-labelledby="mobile-menu-toggle"
                className={`w-full h-screen flex fixed inset-0 z-100 transition-transform duration-300 ease-out shadow(12px 9px 18px 5px rgba(0,0,0,0.84)) transform ${isOpen ? ' translate-x-0' : 'translate-x-full'} bg-background-light dark:bg-background-dark coffee:bg-background-coffee lg:hidden`}
            >
                <button
                    onClick={closeMobileMenu}
                    className="absolute top-0 flex justify-end w-full pt-5 pr-3"
                    aria-label="Close Mobile Navigation"
                >
                    <CloseIcon />
                </button>
                <div className="z-10 relative font-bold text-6xl flex flex-col pt-20 pl-4 h-full">
                    {navItems.map(({ title, pathname, id }) => {
                        return (
                            <Link
                                key={`mobile-link-${id}`}
                                className="mr-2 flex flex-row items-center focus-visible:outline-1"
                                href={pathname}
                                onNavigate={closeMobileMenu}
                            >
                                <p className="font-display">{title}</p>
                                <div>
                                    <Image
                                        src={ScribblePeriod}
                                        className="hidden orange-color-filter ml-2 dark:flex coffee:hidden"
                                        width={40}
                                        height={40}
                                        alt={`accent image for ${title} mobile link `}
                                    />
                                    <Image
                                        src={ScribblePeriod}
                                        className="flex black-color-filter ml-2 dark:hidden coffee:hidden"
                                        width={40}
                                        height={40}
                                        alt={`accent image for ${title} mobile link `}
                                    />
                                    <Image
                                        src={CoffeeBeansIcon}
                                        className="hidden coffee-color-filter ml-2 dark:hidden coffee:flex"
                                        width={40}
                                        height={40}
                                        alt={`accent image for ${title} mobile link `}
                                    />
                                </div>
                            </Link>
                        )
                    })}

                    <a
                        id="mobile-link-contact"
                        href={`${pathname !== '/' ? '/#contact-me' : '#contact-me'}`}
                        className="flex flex-row items-center"
                        onClick={closeMobileMenu}
                    >
                        <p className="font-display">Contact</p>
                        <div>
                            <Image
                                src={ScribblePeriod}
                                className="hidden orange-color-filter ml-2 dark:flex coffee:hidden"
                                width={40}
                                height={40}
                                alt={'accent image for Contact mobile link'}
                            />
                            <Image
                                src={ScribblePeriod}
                                className="flex black-color-filter ml-2 dark:hidden coffee:hidden"
                                width={40}
                                height={40}
                                alt={'accent image for Contact mobile link'}
                            />
                            <Image
                                src={CoffeeBeansIcon}
                                className="hidden coffee-color-filter ml-2 dark:hidden coffee:flex"
                                width={40}
                                height={40}
                                alt={'accent image for Contact mobile link'}
                            />
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default MobileNavbar
