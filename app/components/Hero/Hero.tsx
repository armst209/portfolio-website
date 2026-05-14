import HeroContent from './components/HeroContent'

const Hero = () => {
    return (
        <section className="relative flex justify-center items-center min-h-[calc(100vh-80px)] mx-auto p-6 overflow-hidden hero-gradient-background">
            <div className="flex flex-row lg:flex-col-reverse xl:flex-row justify-center items-center w-full">
                <HeroContent />
            </div>
        </section>
    )
}

export default Hero
