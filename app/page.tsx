
import ContactMe from './components/ContactMe/ContactMe'
import DownSwirlArrowPartition from './components/DownSwirlArrowPartition'
import Hero from './components/Hero/Hero'
import TechnicalSkills from './components/TechnicalSkills/TechnicalSkills'
import UIUXSection from './components/UIUXSection'
import ValuesSection from './components/ValuesSection'



export default function Home() {

    return (
        <>
            <Hero />
            <ValuesSection />
            <DownSwirlArrowPartition />
            <TechnicalSkills />
            <DownSwirlArrowPartition />
            <UIUXSection />
            <DownSwirlArrowPartition />
            <ContactMe />
        </>
    )
}

