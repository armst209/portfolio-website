import { valuesContent } from '@/app/utils/content'
import ScribbleSmallCircleImage from '../Images/ScribbleSmallCircle'
import ValuesSectionIcon from '../Images/icons/ValuesSectionIcon'

const ValuesSection = () => {
    return (
        <section id="values-section" className="pl-4 pr-4 w-full flex justify-center ">
            <div className="bg-transparent w-full h-full flex flex-col items-center justify-evenly xl:flex-row border border-light-border rounded-xl p-6 xl:h-80 dark:bg-transparent">
                {valuesContent.map(({ title, content, icon, id }) => {
                    return (
                        <div
                            key={id}
                            className={`flex flex-col border-b ${id === 3 ? 'border-b-0' : 'border-b-light-border'} xl:border-b-0 dark:${id !== 3 && 'border-b-dark-border'} h-70 w-full p-4 xl:w-[33%] lg:h-40 sm:flex-row`}
                        >
                            <div className="flex justify-center items-center pb-4 sm:pb-0 lg:items-center xl:items-start xl:">
                                <div className="relative w-20 h-20 flex justify-center items-center">
                                    <ScribbleSmallCircleImage />
                                    <ValuesSectionIcon title={title} icon={icon} />
                                </div>
                            </div>
                            <div className="w-full h-full flex flex-col justify-center xl:justify-start items-left pl-4">
                                <h1 className="font-display pb-2 w-full text-2xl font-bold lg:text-3xl 2xl:text-4xl">
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
        </section>
    )
}

export default ValuesSection
