
import HeroTitleSection from "./HeroTitleSection"
import HeroImage from "./HeroImage";

const Hero = () => {
    return (
        <section className="relative flex justify-center items-center min-h-[calc(100vh-80px)] mx-auto p-6 overflow-hidden">
            <div className="flex flex-row justify-center items-center w-full xl:w-[80%]">
                <HeroTitleSection />
                <HeroImage />
            </div>
        </section >
    )
}

export default Hero;