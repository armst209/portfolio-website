import Image from 'next/image'
import ScribbleSmallCircle from '@public/assets/icons/scribble-small-circle.svg'
import { valuesContent } from '@/app/utils/content'

const ValuesSection = () => {
    return (
        <section id="values-section" className="pl-4 pr-4 w-full flex justify-center ">
            <div className="bg-background-light-secondary border border-light-border dark:border-dark-border rounded-xl p-6 xl:h-80 dark:bg-transparent">
                <div className="bg-background-light w-full h-full flex flex-col items-center justify-center xl:flex-row border border-light-border rounded-xl dark:bg-transparent dark:border-0">
                    {valuesContent.map(({ title, content, icon, id }) => {
                        return (
                            <div
                                key={id}
                                className={`flex flex-col border-b ${id === 3 ? 'border-b-0' : 'border-b-light-border'} xl:border-b-0 dark:${id !== 3 && 'border-b-dark-border'} h-70 w-full p-4 xl:w-[33%] lg:h-50 sm:flex-row`}
                            >
                                <div className="flex justify-center items-center pb-4 sm:pb-0 lg:items-center">
                                    <div className="relative w-20 h-20 flex justify-center items-center">
                                        <Image
                                            src={ScribbleSmallCircle}
                                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                                            className="hidden absolute inset-0 orange-color-filter dark:flex"
                                            alt="small scribbled circle"
                                        />
                                        <Image
                                            src={ScribbleSmallCircle}
                                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                                            className="flex absolute inset-0 black-color-filter dark:hidden"
                                            alt="small scribbled circle"
                                        />
                                        <Image
                                            src={icon}
                                            alt="modern icon"
                                            className="hidden w-10 orange-color-filter dark:flex"
                                        />
                                        <Image
                                            src={icon}
                                            alt="modern icon"
                                            className="flex w-10 black-color-filter dark:hidden"
                                        />
                                    </div>
                                </div>
                                <div className="w-full h-full flex flex-col justify-center items-left pl-4">
                                    <h1 className="font-display pb-2 w-full text-2xl font-bold lg:text-4xl">
                                        {title}
                                    </h1>
                                    <p className="flex justify-left text-md lg:text-xl text-left">
                                        {content}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ValuesSection
