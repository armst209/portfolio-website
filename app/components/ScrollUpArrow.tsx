

"use client"
import ScrollArrow from "@public/assets/scroll-up-arrow.svg"
import Image from "next/image"
import { useEffect, useState } from 'react'
import ScribbleSmallCircle from "@public/assets/icons/scribble-small-circle.svg"

const ScrollUpArrow = () => {
    const [isVisible, setIsVisible] = useState(false)


    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button className={`rounded-full m-4 bg-background fixed z-60 bottom-0 right-0 p-2 shadow-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`} aria-label="Scroll to top" onClick={scrollToTop}>
            <Image src={ScrollArrow} alt="scroll arrow " className="m-4 w-4 xs-w-8 md:w-9" />
            <Image src={ScribbleSmallCircle} fill={true} style={{ objectFit: "contain", objectPosition: "center" }} className="absolute inset-0 scribble-color-filter" alt="small scribbled circle" />
        </button>
    )
}

export default ScrollUpArrow

