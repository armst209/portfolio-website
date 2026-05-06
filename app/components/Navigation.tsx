"use client"

import Image from "next/image"
import Link from "next/link"
import HamburgerIcon from "@public/assets/bars-staggered.svg"
import { useState } from "react"

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMobileMenu = () => setIsOpen(!isOpen)

    return (
        <header className="sticky top-0 z-20 w-full bg-background border-b-[.5px] border-b-[hsl(240,4,16)]">
            <nav className="flex flex-row p-4 w-full justify-between lg:items-center">
                <div>
                    <Link href="/">
                        <h1 className='text-lg font-bold text-emerald-600 md:text-2xl'>armst209.dev</h1>
                    </Link>
                </div>
                <div className="relative">
                    <div id="desktop-menu" className="hidden lg:flex">
                        <ul className="font-bold">
                            <Link className="mr-2" href="/">Home</Link>
                            <Link className="mr-2" href="/projects">Projects</Link>
                            <Link className="mr-2" href="/contact">Contact</Link>
                        </ul>
                    </div>
                    <div id="hamburger" className="flex lg:hidden" onClick={toggleMobileMenu}>
                        <Image src={HamburgerIcon} width={25} alt="mobile menu icon" className="icon-white-filter" />
                    </div>
                    <div id="mobile-menu" className={`flex fixed inset-0 bg-background z-50 transition-transform duration-300 ease-out h-100 border-b-4 rounded-br-full mt-[3.8rem] shadow(12px 9px 18px 5px rgba(0,0,0,0.84)) transform ${isOpen ? " translate-x-0" : "translate-x-full"} lg:hidden`}>
                        <ul className="font-bold text-6xl flex flex-col pt-20 pl-4 h-full">
                            <Link className="mr-2" href="/">Home</Link>
                            <Link className="mr-2" href="/projects">Projects</Link>
                            <Link className="mr-2" href="/contact">Contact</Link>
                        </ul>
                    </div>

                </div>
            </nav>
        </header >)
}

export default Navigation