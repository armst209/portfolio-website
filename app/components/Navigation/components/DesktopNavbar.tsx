'use client'

import { navItems } from '@/app/utils/content'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DesktopNavbar = () => {
    const pathname = usePathname()
    return (
        <div id="desktop-menu" className="hidden lg:flex">
            <div className="font-bold flex items-center">
                {navItems.map(({ title, pathname, id }) => {
                    return (
                        <Link
                            key={`desktop-link-${id}`}
                            className="mr-6 h-full flex items-center"
                            href={pathname}
                        >
                            {title}
                        </Link>
                    )
                })}

                <a
                    id="desktop-link-contact"
                    href={`${pathname !== '/' ? '/#contact-me' : '#contact-me'}`}
                    className="w-25 text-center text-white bg-black-custom border-2 p-2 rounded-md dark:bg-orange-custom dark:text-black-custom"
                >
                    Contact
                </a>
            </div>
        </div>
    )
}

export default DesktopNavbar
