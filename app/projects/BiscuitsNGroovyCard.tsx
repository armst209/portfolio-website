import Image from 'next/image'
import ProjectImage from '@public/assets/project-photos/biscuits-n-groovy/hero.webp'
import BiscuitsNGroovyLogo from '@public/assets/project-photos/biscuits-n-groovy/bng_logo_webp.webp'

const BiscuitsNGroovyCard = () => {
    return (
        <div className=" h-auto flex flex-col rounded-xl border border-light-border lg:h-180 max-w-200 dark:border-dark-border">
            <div className="z-10 ">
                <Image
                    src={ProjectImage}
                    alt="project hero image"
                    className="rounded-t-xl"
                    preload={true}
                    placeholder="blur"
                />
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row">
                <div className="flex flex-col justify-between z-10 border-t-[.5px] border-[hsl(240,4,16)] p-4 pb-4 lg:flex-row lg:mb-30">
                    <div>
                        <div className="pb-4">
                            <h2 className="text-2xl font-bold">
                                <Image
                                    src={BiscuitsNGroovyLogo}
                                    alt="Biscuits n Groovy logo"
                                    className="w-70 pb-2 bg-background-dark dark:bg-transparent"
                                />
                            </h2>
                            <h3>
                                A modern music streaming service built with React and Vite,
                                featuring artist collections, event management, and seamless payment
                                integration.
                            </h3>
                        </div>
                        <ul className="list-disc list-inside">
                            <li>
                                Built with{' '}
                                <span className="font-bold text-black-custom dark:text-orange-custom">
                                    React 18
                                </span>
                                ,{' '}
                                <span className="font-bold text-black-custom dark:text-orange-custom">
                                    Vite
                                </span>
                                ,{' '}
                                <span className="font-bold text-black-custom dark:text-orange-custom">
                                    Redux Toolkit
                                </span>
                                ,{' '}
                                <span className="font-bold text-black-custom dark:text-orange-custom">
                                    Sass/SCSS
                                </span>{' '}
                                and{' '}
                                <span className="font-bold text-black-custom dark:text-orange-custom">
                                    Material UI
                                </span>
                                .
                            </li>
                            <li>
                                Work in progress. Currenly updating npm packages and frameworks to
                                latest versions. Updating to{' '}
                                <span className="font-bold text-black-custom dark:text-orange-custom">
                                    Next.js
                                </span>
                                ,{' '}
                                <span className="font-bold text-black-custom dark:text-orange-custom">
                                    Tailwind CSS
                                </span>{' '}
                                and{' '}
                                <span className="font-bold text-black-custom dark:text-orange-custom">
                                    React 19
                                </span>
                                .
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BiscuitsNGroovyCard
