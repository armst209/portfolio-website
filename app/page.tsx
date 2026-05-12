import ContactMe from './components/ContactMe/ContactMe'
import DownSwirlArrowPartition from './components/DownSwirlArrowPartition'
import Hero from './components/Hero/Hero'
import ProfessionalExperience from './components/ProfessionalExperience'
import ScribbledDashPartition from './components/ScribbledDashPartition'
import TechnicalSkills from './components/TechnicalSkills/TechnicalSkills'
import UIUXSection from './components/UIUXSection'
import ValuesSection from './components/ValuesSection'

export default function Home() {
    return (
        <>
            <Hero />
            <ProfessionalExperience />
            <DownSwirlArrowPartition />
            <TechnicalSkills />
            <DownSwirlArrowPartition />
            <UIUXSection />
            <ScribbledDashPartition />
            <ValuesSection />
            <DownSwirlArrowPartition />
            <ContactMe />
        </>
    )
}
