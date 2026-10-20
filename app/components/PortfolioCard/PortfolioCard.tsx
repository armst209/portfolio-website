'use client'

import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type PortfolioCardProps = {
    name: string
    eyebrow: string
    description: string
    tech: string[]
    images: StaticImageData[]
    logo?: StaticImageData
    visitUrl?: string
    githubUrl?: string
    caseStudyUrl?: string
    preload?: boolean
}

const SLIDE_INTERVAL_MS = 3200

const ExternalLinkIcon = () => (
    <svg
        aria-hidden="true"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
)

const GithubMarkIcon = () => (
    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 .296c-6.627 0-12 5.372-12 12 0 5.302 3.438 9.8 8.206 11.387.6.111.82-.26.82-.577 0-.286-.011-1.231-.016-2.234-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.332-1.756-1.332-1.756-1.089-.745.082-.729.082-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.419-1.304.762-1.604-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.237-3.221-.125-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 6.099c1.02.005 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.769.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.814 1.103.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.216.694.824.576 4.766-1.589 8.2-6.085 8.2-11.385C24 5.669 18.627.296 12 .296z"
        />
    </svg>
)

const eyebrowClasses =
    'block text-[10px] font-bold uppercase tracking-[0.14em] opacity-90 text-(color:--accent)'

const actionButtonClasses =
    'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-white/15 bg-[#101018]/80 text-white backdrop-blur-md backdrop-saturate-150 transition-all duration-200 hover:scale-110 hover:border-(color:--accent) hover:bg-(color:--accent) hover:text-black-custom sm:h-11 sm:w-11'

const linkButtonClasses =
    'inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-bold transition-all duration-200 hover:-translate-y-px'

const PortfolioCard = ({
    name,
    eyebrow,
    description,
    tech,
    images,
    logo,
    visitUrl,
    githubUrl,
    caseStudyUrl,
    preload = false,
}: PortfolioCardProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeImage, setActiveImage] = useState(0)
    const toggleRef = useRef<HTMLButtonElement>(null)
    const panelId = useId()

    useEffect(() => {
        if (images.length <= 1) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        const interval = setInterval(
            () => setActiveImage((current) => (current + 1) % images.length),
            SLIDE_INTERVAL_MS
        )
        return () => clearInterval(interval)
    }, [images.length])

    const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Escape' && isOpen) {
            setIsOpen(false)
            toggleRef.current?.focus()
        }
    }

    return (
        <article
            className="relative h-[60vh] max-h-155 min-h-90 w-full overflow-hidden rounded-[20px] bg-[#0d0d12] text-white shadow-lg transition-shadow duration-300 hover:shadow-2xl [--accent:var(--color-orange-custom)] coffee:[--accent:var(--color-background-coffee)] sm:min-h-105"
            onMouseLeave={() => setIsOpen(false)}
            onKeyDown={handleKeyDown}
        >
            <div className="absolute inset-0">
                {images.map((image, index) => (
                    <Image
                        key={image.src}
                        src={image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        placeholder="blur"
                        preload={preload && index === 0}
                        className={`object-contain object-center transition-opacity max-[500px]:duration-1000 ease-in-out ${
                            index === activeImage ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
                <div className="absolute inset-0 bg-linear-to-b from-[#0a0a10]/10 via-[#0a0a10]/30 to-[#0a0a10]/90" />
            </div>

            <div
                aria-hidden={isOpen}
                className={`absolute right-20 bottom-0 left-0 z-5 px-4 pb-5 transition-all duration-300 max-[500px]:right-0 max-[500px]:pb-22 sm:px-6 sm:pb-6 ${
                    isOpen ? 'pointer-events-none translate-y-2 opacity-0' : 'opacity-100'
                }`}
            >
                <span className={`${eyebrowClasses} mb-1.5`}>{eyebrow}</span>
                <h2 className="text-[1.6rem] leading-[1.05] font-extrabold tracking-tight [text-shadow:0_2px_16px_rgb(0_0_0/0.5)] sm:text-[2rem] lg:text-[2.4rem]">
                    {logo ? <Image src={logo} alt={name} className="h-auto w-56 sm:w-70" /> : name}
                </h2>
            </div>

            {/* Expanded details panel*/}
            <div
                id={panelId}
                inert={!isOpen}
                className={`absolute inset-0 z-8 flex flex-col gap-3 overflow-y-auto rounded-[20px] bg-linear-[165deg] from-[#1e1e24] via-[#121216] to-[#08080a] py-5 pr-18 pl-4 transition-[clip-path] max-[500px]:pt-20 max-[500px]:pr-4 duration-550 ease-[cubic-bezier(0.4,0,0.2,1)] sm:py-8 sm:pr-24 sm:pl-7 ${
                    isOpen
                        ? '[clip-path:circle(160%_at_calc(100%_-_42px)_calc(100%_-_46px))]'
                        : '[clip-path:circle(0_at_calc(100%_-_42px)_calc(100%_-_46px))]'
                }`}
            >
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-[15%] -left-[10%] -z-10 h-1/2 w-[55%] rounded-full bg-(color:--accent) opacity-30 blur-[60px]"
                />
                <span className={eyebrowClasses}>{eyebrow}</span>
                <h2 className="m-0 text-2xl leading-tight font-extrabold">{name}</h2>
                <p className="m-0 text-sm leading-relaxed text-white/70">{description}</p>

                {images.length > 1 && (
                    <div className="hidden min-h-0 flex-1 gap-0.75 overflow-hidden rounded-lg bg-black lg:flex">
                        {images.map((image, index) => (
                            <Image
                                key={image.src}
                                src={image}
                                alt={`${name} screenshot ${index + 1}`}
                                sizes="20vw"
                                className="block h-full min-w-0 flex-1 object-cover"
                            />
                        ))}
                    </div>
                )}

                <ul className="flex flex-wrap gap-1.5" aria-label={`${name} technologies`}>
                    {tech.map((item) => (
                        <li
                            key={item}
                            className="rounded-full border border-(color:--accent)/30 bg-(color:--accent)/10 px-2.5 py-0.75 text-[10px] font-bold text-(color:--accent)"
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-0.5">
                    {visitUrl && (
                        <a
                            href={visitUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${linkButtonClasses} border-(color:--accent) bg-(color:--accent) text-black-custom hover:opacity-90`}
                        >
                            <ExternalLinkIcon /> Visit Site
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${linkButtonClasses} border-white/15 bg-white/10 text-white hover:border-white/30 hover:bg-white/15`}
                        >
                            <GithubMarkIcon /> GitHub
                        </a>
                    )}
                    {caseStudyUrl && (
                        <a
                            href={caseStudyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${linkButtonClasses} border-white/15 bg-white/10 text-white hover:border-white/30 hover:bg-white/15`}
                        >
                            <ExternalLinkIcon /> Case Study
                        </a>
                    )}
                </div>
            </div>

            <div
                className={`pointer-events-none absolute top-0 right-0 bottom-0 z-30 flex w-17 flex-col items-center gap-2 sm:w-21 [&>*]:pointer-events-auto ${
                    isOpen
                        ? 'justify-start pt-4.5'
                        : 'justify-end pb-4.5 max-[500px]:top-auto max-[500px]:left-0 max-[500px]:w-full max-[500px]:flex-row-reverse max-[500px]:justify-start max-[500px]:px-3'
                }`}
            >
                <button
                    ref={toggleRef}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    aria-label={isOpen ? `Hide ${name} details` : `Show ${name} details`}
                    onClick={() => setIsOpen((open) => !open)}
                    className={`flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 bg-[#0a0a0d] shadow-[0_8px_24px_rgb(0_0_0/0.7),inset_0_1px_0_rgb(255_255_255/0.06)] transition-all duration-200 hover:scale-105 hover:border-white/20 hover:text-(color:--accent) sm:h-16 sm:w-16 ${
                        isOpen
                            ? 'scale-105 border-white/20 text-(color:--accent)'
                            : 'border-white/10 text-white'
                    }`}
                >
                    <span aria-hidden="true" className="text-3xl leading-none font-extralight">
                        {isOpen ? '×' : '+'}
                    </span>
                </button>
                {!isOpen && visitUrl && (
                    <a
                        href={visitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${name} site`}
                        className={actionButtonClasses}
                    >
                        <ExternalLinkIcon />
                    </a>
                )}
                {!isOpen && githubUrl && (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${name} on GitHub`}
                        className={actionButtonClasses}
                    >
                        <GithubMarkIcon />
                    </a>
                )}
            </div>
        </article>
    )
}

export default PortfolioCard
