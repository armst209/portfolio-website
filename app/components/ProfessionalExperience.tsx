'use client'

import Image from 'next/image'
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion'
import PlusIcon from '@public/assets/icons/plus.svg'
import LocationIcon from '@public/assets/icons/marker.svg'
import GlobeIcon from '@public/assets/icons/globe.svg'
import MinusIcon from '@public/assets/icons/minus.svg'
import FordLogo from '@public/assets/ford-logo.svg'
import UWMLogo from '@public/assets/uwm-logo.webp'
import BNGLogo from '@public/assets/bng-logo.svg'
import { AccordionItemProps } from '@szhsin/react-accordion'
import { ReactNode } from 'react'

const ProfessionalExperience = () => {
    const AccordionItem = ({ header, ...rest }: AccordionItemProps) => (
        <Item
            {...rest}
            header={({ state: { isEnter } }) => (
                <div className="flex justify-between w-full h-full cursor-pointer">
                    <div className="font-bold text-lg lg:text-2xl">{header as ReactNode}</div>
                    {isEnter ? (
                        <Image
                            src={MinusIcon}
                            alt="minus icon"
                            className="ml-auto transition-transform duration-200 ease-out emerald-green-filter cursor-pointer"
                            width={30}
                        />
                    ) : (
                        <Image
                            src={PlusIcon}
                            alt="plus icon"
                            className="ml-auto transition-transform duration-200 ease-out emerald-green-filter cursor-pointer"
                            width={30}
                        />
                    )}
                </div>
            )}
            className="border-b border-[hsl(240,4,16)]"
            buttonProps={{
                className: ({ isEnter }) => `flex w-full p-4 text-left`,
            }}
            contentProps={{
                className: 'transition-height duration-200 ease-out',
            }}
            panelProps={{ className: 'p-4' }}
        />
    )

    return (
        <section className="p-4 pt-20">
            <div>
                <h1 className="text-2xl lg:text-4xl font-bold">Professional Experience</h1>
            </div>
            <div className="mx-2 my-4 border-t border-emerald-green-custom dark:border-orange-custom">
                <Accordion transition transitionTimeout={200}>
                    <AccordionItem
                        header={`Front End Software Engineer @ Ford Motor Company (2025 - 2026)`}
                    >
                        <div className="w-full h-full flex flex-col text-lg ">
                            <div className="flex flex-col justify-center items-center md:flex-row">
                                <Image
                                    src={FordLogo}
                                    alt="ford logo"
                                    width={150}
                                    className="mb-4 md:mr-4 md:mb-0"
                                />
                                <div className="flex flex-row items-center justify-center lg:mr-4">
                                    <Image
                                        src={LocationIcon}
                                        alt="location icon"
                                        width={20}
                                        className="orange-color-filter mr-2"
                                    />
                                    <p>Dearborn, Michigan</p>
                                </div>

                                <div className="flex flex-row items-center justify-center">
                                    <Image
                                        src={GlobeIcon}
                                        alt="globe icon"
                                        width={20}
                                        className="orange-color-filter mr-2"
                                    />
                                    <a
                                        href="https://www.ford.com/"
                                        rel="noopener noreferer"
                                        target="_blank"
                                    >
                                        https://www.ford.com/
                                    </a>
                                </div>
                            </div>
                            <ul className="list-disc mt-4 text-sm xs:text-lg ">
                                <li className="mb-2">
                                    Collaborated with senior software engineers to enhance Ford
                                    Motor Company's customer-facing web applications.
                                </li>
                                <li>
                                    Focused on developing and modernizing vehicle trade-in and
                                    purchase platforms.
                                </li>
                            </ul>
                            <div className="grid">
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 m-4 rounded-xl p-4 w-full">
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm mr-4 lg:text-xl ">
                                        <p>Next.js</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm mr-4 lg:text-xl ">
                                        <p>React</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm mr-4 lg:text-xl ">
                                        <p>Tailwind CSS</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm lg:text-xl ">
                                        <p>Playwright</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm mr-4 lg:text-xl ">
                                        <p>Zustand</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm lg:text-xl ">
                                        <p>Javascript</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm lg:text-xl ">
                                        <p>Web Components</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionItem>

                    <AccordionItem
                        header={`UI Developer II @ United Wholesale Mortgage (2021 - 2024)`}
                    >
                        <div className="w-full flex flex-col text-lg">
                            <div className="flex flex-col justify-center items-center md:flex-row">
                                <Image
                                    src={UWMLogo}
                                    alt="uwm logo"
                                    width={150}
                                    className="mb-4 md:mr-4 md:mb-0"
                                />
                                <div className="flex flex-row items-center justify-center lg:mr-4">
                                    <Image
                                        src={LocationIcon}
                                        alt="location icon"
                                        width={20}
                                        className="orange-color-filter mr-2"
                                    />
                                    <p>Pontiac, Michigan</p>
                                </div>

                                <div className="flex flex-row items-center justify-center">
                                    <Image
                                        src={GlobeIcon}
                                        alt="globe icon"
                                        width={20}
                                        className="orange-color-filter mr-2"
                                    />
                                    <a
                                        href="https://www.uwm.com/"
                                        rel="noopener noreferer"
                                        target="_blank"
                                    >
                                        https://www.uwm.com/
                                    </a>
                                </div>
                            </div>
                            <ul className="list-disc mt-4 text-sm xs:text-lg ">
                                <li className="mb-2">
                                    Supported, maintained, and refactored code base for United
                                    Wholesale Mortgage’s proprietary loan origination and marketing
                                    software suites (EASE, EDGE, BOLT & Brand360) – utilized Scrum &
                                    Agile methodologies
                                </li>
                                <li>
                                    Worked closely with UI Designers to implement and refactor UI
                                    components to meet ADA/WCAG standards as well as additional data
                                    reporting and SEO (BOLT & Brand360)
                                </li>
                            </ul>
                            <div className="grid">
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 m-4 rounded-xl p-4 w-full">
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm mr-4 lg:text-xl ">
                                        <p>Javascript</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm mr-4 lg:text-xl ">
                                        <p>React</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm mr-4 lg:text-xl ">
                                        <p>Vue</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm lg:text-xl ">
                                        <p>Next.js</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm mr-4 lg:text-xl ">
                                        <p>C#</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm lg:text-xl ">
                                        <p>.NET</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm lg:text-xl ">
                                        <p>Blazor</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm lg:text-xl ">
                                        <p>Razor</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm lg:text-xl ">
                                        <p>JQuery</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionItem>

                    <AccordionItem header={`Frontend Developer @ Biscuits n Groovy (2021 - 2022)`}>
                        <div className="w-full flex flex-col text-lg">
                            <div className="flex flex-col justify-center items-center md:flex-row">
                                <Image
                                    src={BNGLogo}
                                    alt="biscuits n groovy logo"
                                    width={200}
                                    className="mb-4 md:mr-4 md:mb-0"
                                />
                                <div className="flex flex-row items-center justify-center lg:mr-4">
                                    <Image
                                        src={LocationIcon}
                                        alt="location icon"
                                        width={20}
                                        className="orange-color-filter mr-2"
                                    />
                                    <p>Detroit, Michigan</p>
                                </div>

                                <div className="flex flex-row items-center justify-center">
                                    <Image
                                        src={GlobeIcon}
                                        alt="globe icon"
                                        width={20}
                                        className="orange-color-filter mr-2"
                                    />
                                    <a
                                        href="https://linktr.ee/bngroovy"
                                        rel="noopener noreferer"
                                        target="_blank"
                                    >
                                        https://linktr.ee/bngroovy
                                    </a>
                                </div>
                            </div>
                            <ul className="list-disc mt-4 text-sm xs:text-lg ">
                                <li className="mb-2">
                                    Planned and designed the frontend aspects of Biscuits n Groovy’s
                                    official website (Website is no longer being hosted), ensuring a
                                    seamless user experience.
                                </li>
                                <li>
                                    Implemented wire-framing and UI design, adhering to
                                    accessibility and ADA standards.
                                </li>
                            </ul>
                            <div className="grid">
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 m-4 rounded-xl p-4 w-full">
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm mr-4 lg:text-xl ">
                                        <p>Next.js</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm mr-4 lg:text-xl ">
                                        <p>React</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm mr-4 lg:text-xl ">
                                        <p>Tailwind CSS</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm lg:text-xl ">
                                        <p>Playwright</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm mr-4 lg:text-xl ">
                                        <p>Zustand</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm lg:text-xl ">
                                        <p>Javascript</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm lg:text-xl ">
                                        <p>Web Components</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}

export default ProfessionalExperience
