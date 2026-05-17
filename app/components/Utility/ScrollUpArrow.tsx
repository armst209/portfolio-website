'use client'
import ScrollArrow from '@public/assets/icons/up-arrow.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ScribbleSmallCircle from '@public/assets/icons/scribble-small-circle.svg'

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
            behavior: 'smooth',
        })
    }

    return (
        <button
            className={`cursor-pointer rounded-full m-4 bg-background-light fixed z-60 bottom-0 right-0 p-2 shadow-lg transition-opacity duration-300 dark:bg-background-dark coffee:bg-background-coffee ${
                isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll to top"
            onClick={scrollToTop}
        >
            <Image
                src={ScrollArrow}
                alt="scroll arrow"
                className="hidden m-2 w-4 xs-w-8 md:w-9 orange-color-filter font-bold dark:flex coffee:hidden"
            />
            <Image
                src={ScrollArrow}
                alt="scroll arrow"
                className="flex m-2 w-4 xs-w-8 md:w-9 black-color-filter font-bold dark:hidden coffee:hidden"
            />
            <Image
                src={ScrollArrow}
                alt="scroll arrow"
                className="hidden m-2 w-4 xs-w-8 md:w-9 coffee-color-filter font-bold dark:hidden coffee:flex"
            />
            <Image
                src={ScribbleSmallCircle}
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="hidden absolute inset-0 orange-color-filter dark:flex"
                alt="small scribbled circle"
            />
            <Image
                src={ScribbleSmallCircle}
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="flex absolute inset-0 black-color-filter dark:hidden"
                alt="small scribbled circle"
            />
            <Image
                src={ScribbleSmallCircle}
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="hidden absolute inset-0 coffee-color-filter dark:hidden coffee:flex"
                alt="small scribbled circle"
            />
        </button>
    )
}

export default ScrollUpArrow
