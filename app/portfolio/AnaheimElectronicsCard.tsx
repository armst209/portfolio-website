import Image from 'next/image'
import ProjectImage from '@public/assets/project-photos/anahiem-electronics/hero.webp'
import LiveDemoIcon from '@public/assets/icons/live-demo.svg'
import GithubIcon from '../components/Images/icons/GithubIcon'
import ScribbleSmallCircleImage from '../components/Images/ScribbleSmallCircle'
import PortfolioCard from '../components/PortfolioCard/PortfolioCard'

const AnaheimElectronicsCard = () => {
    return (
        <PortfolioCard
            name="Anaheim Electronics"
            eyebrow="Featured · Live"
            description=" A responsive, mobile-first product website built with HTML, CSS & Vanilla Javascript only. I wanted to test my knowledge of basic frontend development without frameworks, css processors and additional libraries. (Company is from a fictional universe)"
            images={[ProjectImage]}
            tech={['HTML', 'CSS', 'Vanilla Javascript']}
            visitUrl="https://armst209.github.io/"
            githubUrl="https://github.com/armst209/armst209.github.io.git"
            preload
        />
    )
}

export default AnaheimElectronicsCard
