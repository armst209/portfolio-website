import Image from 'next/image'
import ModernIcon from '@public/assets/icons/modern.svg'
import AccessibilityIcon from '@public/assets/icons/accessibility.svg'
import ScribbleSmallCircle from '@public/assets/icons/scribble-small-circle.svg'
import EyeIcon from '@public/assets/icons/visually-pleasing.svg'
import { bonaNova } from '@/app/utils/fonts'

const information = [
    {
        id: 1,
        title: 'Modern',
        content:
            'I build with modern frameworks and best practices to create fast, scalable and maintainable applications.',
        icon: ModernIcon,
    },
    {
        id: 2,
        title: 'Accessible',
        content:
            'Accessibility is at the core of what I do. I build inclusive experiences that work for everyone.',
        icon: AccessibilityIcon,
    },
    {
        id: 3,
        title: 'Visually Pleasing',
        content: 'Clean, thoughtful design and attention to detail.',
        icon: EyeIcon,
    },
]

const ValuesSection = () => {
    return (
        <section className="pl-4 pr-4 w-full flex justify-center ">
            <div className="bg-background-foreground-light border border-light-border dark:border-dark-border rounded-xl p-6 xl:h-80 dark:bg-transparent">
                <div className="bg-white w-full h-full flex flex-col items-center justify-center xl:flex-row border border-light-border rounded-xl dark:bg-transparent dark:border-0">
                    {information.map(({ title, content, icon, id }) => {
                        return (
                            <div
                                key={id}
                                className={`flex flex-col border-b border-b-light-border xl:border-b-0 dark:border-b-dark-border h-70 w-full p-4 xl:w-[33%] lg:h-50 sm:flex-row`}
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
                                            className="flex w-10 emerald-green-filter dark:hidden"
                                        />
                                    </div>
                                </div>
                                <div className="w-full h-full flex flex-col justify-center items-left pl-4">
                                    <h1
                                        className={`${bonaNova.className} pb-2 w-full text-2xl font-bold lg:text-4xl`}
                                    >
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
