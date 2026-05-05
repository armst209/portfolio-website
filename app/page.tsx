
import Hero from './components/Hero'
import TechnicalSkills from './components/TechnicalSkills'

export default function Home() {
    return (
        <div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
            <Hero />
            <TechnicalSkills />
        </div>
    )
}
