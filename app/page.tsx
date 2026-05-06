
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Hero from './components/Hero'
import TechnicalSkills from './components/TechnicalSkills'
import { Toaster } from 'react-hot-toast'

export default function Home() {
    return (
        <div className='flex flex-col flex-1 items-center justify-center dark:bg-black'>
            <Hero />
            <TechnicalSkills />
            <ContactMe />
            <Footer />
            <Toaster />
        </div>
    )
}
