import HeroTitleSection from './components/HeroTitleSection'
import DesktopHeroImage from './components/DesktopHeroImage'

const Hero = () => {
    return (
        <section className="relative flex justify-center items-center min-h-[calc(100vh-80px)] mx-auto p-6 overflow-hidden">
            <div className="flex flex-row lg:flex-col-reverse xl:flex-row justify-center items-center w-full">
                <HeroTitleSection />
                <DesktopHeroImage />
            </div>
        </section>
    )
}

export default Hero
