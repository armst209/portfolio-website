import Image from 'next/image'

import Projects from '@public/assets/icons/projects.svg'

const ProjectsIcon = () => {
    return (
        <>
            <Image
                src={Projects}
                className="hidden orange-color-filter mr-5.5 w-6 lg:w-9 dark:flex"
                alt="projects icon"
            />
            <Image
                src={Projects}
                className="flex black-color-filter mr-5 w-5.5 lg:w-9 dark:hidden coffee:hidden"
                alt="projects icon"
            />
            <Image
                src={Projects}
                className="hidden coffee-color-filter mr-5 w-5.5 lg:w-9 coffee:flex dark:hidden"
                alt="projects icon"
            />
        </>
    )
}

export default ProjectsIcon
