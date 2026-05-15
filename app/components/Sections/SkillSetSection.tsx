import Image from 'next/image'
import CheckIcon from '@public/assets/icons/check.svg'
import SemiColonPeriodScribble from '../Utility/SemiColonPeriodScribble'
import { skillSetContent } from '@/app/utils/content'

const SkillSetSection = () => {
    return (
        <section
            id="skillset-section"
            className="flex flex-col items-center justify-center w-full pr-4 pl-4"
        >
            <div className="z-10 w-full flex flex-col lg:flex-row">
                <div className="flex flex-col justify-center lg:justify-center">
                    <h1 className="font-display font-bold flex items-center text-2xl lg:text-4xl">
                        <p>Skillset</p>
                        <SemiColonPeriodScribble />
                    </h1>
                    <h2 className="text-lg lg:text-2xl">
                        With a focus on frontend development I can take a project from design to
                        completion
                    </h2>
                </div>
            </div>
            <div className="w-full border rounded-xl mt-4 border-light-border bg-background-light-secondary dark:bg-transparent dark:border-dark-border">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250,1fr))] border m-6 rounded-xl pt-2 pb-2 w-auto bg-background-light border-light-border dark:border-0 dark:bg-transparent">
                    {skillSetContent.map((skill, index) => {
                        return (
                            <div
                                key={index}
                                className="w-auto rounded-md p-2 flex flex-row items-center justify-center cursor-pointer mr-4 text-lg xl:text-xl"
                            >
                                <Image
                                    src={CheckIcon}
                                    alt="check icon"
                                    width={20}
                                    className="hidden mr-4 emerald-green-filter dark:flex"
                                />
                                <Image
                                    src={CheckIcon}
                                    alt="check icon"
                                    width={20}
                                    className="flex mr-4 forest-green-filter dark:hidden"
                                />
                                <p>{skill}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default SkillSetSection
