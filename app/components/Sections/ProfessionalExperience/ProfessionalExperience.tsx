'use client'

import Image from 'next/image'
import { Accordion } from '@szhsin/react-accordion'
import CustomAccordionItem from './components/CustomAccordionItem'

import { professionalExpContent } from '@/app/utils/content'
import LocationIcon from '../../Images/LocationIcon'
import GlobeIcon from '../../Images/GlobeIcon'

const ProfessionalExperience = () => {
    return (
        <section className="p-4 pt-20 pb-0">
            <div>
                <h1 className="text-2xl lg:text-4xl font-bold font-display">
                    Professional Experience
                </h1>
            </div>
            {/* keep h2 element for accessibility - theres a nest h3 in the Accordion library that can't be changed */}
            <h2 className=" border-t border-black-custom dark:border-orange-custom">
                <Accordion transition transitionTimeout={200}>
                    {professionalExpContent.map(
                        ({ header, logo, location, website, contentItems, technologies, id }) => {
                            return (
                                <CustomAccordionItem key={`accordion-item-${id}`} header={header}>
                                    <div className="w-full h-full flex flex-col text-lg">
                                        <div className="flex flex-col justify-center items-center md:flex-row">
                                            <Image
                                                src={logo}
                                                alt="ford logo"
                                                width={150}
                                                className="mb-4 md:mr-4 md:mb-0"
                                            />
                                            <div className="flex flex-row items-center justify-center lg:mr-4">
                                                <LocationIcon />
                                                <p>{location}</p>
                                            </div>

                                            <div className="flex flex-row items-center justify-center">
                                                <GlobeIcon />
                                                <a
                                                    href={website}
                                                    rel="noopener noreferer"
                                                    target="_blank"
                                                >
                                                    {website}
                                                </a>
                                            </div>
                                        </div>
                                        <ul className="list-disc mt-4 text-sm xs:text-lg ">
                                            {contentItems.map((item, index) => {
                                                return (
                                                    <li
                                                        key={`content-list-item-${index}`}
                                                        className="mb-2"
                                                    >
                                                        {item}
                                                    </li>
                                                )
                                            })}
                                        </ul>

                                        <div className="grid grid-cols-[repeat(auto-fit,minmax(170,1fr))] gap-2 m-4 rounded-xl p-4 w-full">
                                            {technologies.map((technology, index) => {
                                                return (
                                                    <div
                                                        key={`technology-item-${index}`}
                                                        className="w-auto rounded-md font-bold flex flex-row items-center justify-center cursor-pointer mr-4 lg:text-xl"
                                                    >
                                                        <p>{technology}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </CustomAccordionItem>
                            )
                        }
                    )}
                </Accordion>
            </h2>
        </section>
    )
}

export default ProfessionalExperience
