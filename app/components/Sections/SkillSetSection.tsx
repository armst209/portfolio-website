import CheckIcon from '../Images/CheckIcon'
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
            <div className="flex flex-col sm:grid sm:grid-cols-[repeat(auto-fit,minmax(250,1fr))] p-4 w-full rounded-xl mt-4 border border-light-border bg-transparent dark:border-dark-border">
                {skillSetContent.map((skill, index) => {
                    return (
                        <div
                            key={index}
                            className="w-full text-2xl xs:w-auto rounded-md p-2 flex flex-row items-center justify-left mr-4 sm:text-lg xl:text-xl"
                        >
                            <CheckIcon />
                            <p>{skill}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default SkillSetSection
