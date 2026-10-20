import ProjectImage from '@public/assets/project-photos/biscuits-n-groovy/bng-new-hero.webp'
import BiscuitsNGroovyLogo from '@public/assets/project-photos/biscuits-n-groovy/bng_logo_webp.webp'
import PortfolioCard from '../components/PortfolioCard/PortfolioCard'

const BiscuitsNGroovyCard = () => {
    return (
        <PortfolioCard
            name="Biscuits n Groovy"
            eyebrow="Featured · Live (In Progress)"
            description="Biscuits n Groovy was a web application for streaming music. Formerly the main website for a now defunct company I worked freelance for, the application featured artist collections, event management, and payment integration through Stripe. It has been repurposed into a Spotify clone with the previous features of the old Biscuits n Groovy. Currently a work in progress, the application has been migrated to Next.js, Tailwind CSS and React 19 so far and reworks to the artist collection, authentication services and music playback functionality are coming soon."
            tech={['React 19', 'Next.js', 'Tailwind CSS', 'Zustand', 'Vitest']}
            images={[ProjectImage]}
            logo={BiscuitsNGroovyLogo}
            githubUrl="https://github.com/armst209/BiscuitsNGroovyNEW"
            visitUrl="https://bngroovy.armst209.dev/"
            preload
        />
    )
}

export default BiscuitsNGroovyCard
