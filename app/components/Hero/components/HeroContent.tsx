import SocialLinksSection from '../../Sections/SocialLinksSection'
import ScribbledDashPartition from '../../Partitions/ScribbledDashPartition'
import HeroArrows from '../../Images/HeroArrows'
import HeroImage from '../../Images/HeroImage'

const HeroContent = () => {
    return (
        <section className="flex flex-col xxl:flex-row lg:items-center lg:justify-between">
            <div id="hero-section-headings">
                <div className="flex items-center justify-center">
                    <HeroArrows />
                </div>
                <ScribbledDashPartition />
                <div
                    id="hero-text-mobile"
                    className="flex-cold justify-center items-center text-center"
                >
                    <h1 className="hero-text-h1 font-display font-bold mb-1 coffee:text-coffee">
                        Hi! I&apos;m Aaron Armstrong
                    </h1>
                    <h2 className="hero-text-h2">
                        I&apos;m a frontend engineer who is passionate about building{' '}
                        <span className="font-bold text-highlight-light dark:text-highlight-dark coffee:text-highlight-coffee">
                            modern
                        </span>
                        ,{' '}
                        <span className="font-bold text-highlight-light dark:text-highlight-dark coffee:text-highlight-coffee">
                            accessible
                        </span>{' '}
                        and{' '}
                        <span className="font-bold text-highlight-light dark:text-highlight-dark coffee:text-highlight-coffee">
                            visually pleasing
                        </span>{' '}
                        user experiences.
                    </h2>
                </div>
                <div className="mt-6">
                    <SocialLinksSection />
                </div>
                <ScribbledDashPartition />
                <div className="flex items-center justify-center rotate-180">
                    <HeroArrows />
                </div>
            </div>
            <div id="hero-section-image" className="h-full flex justify-center items-center">
                <HeroImage />
            </div>
        </section>
    )
}

export default HeroContent
