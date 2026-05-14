import ContactMe from './components/ContactMe/ContactMe'
import DownSwirlArrowPartition from './components/DownSwirlArrowPartition'
import Hero from './components/Hero/Hero'
import ProfessionalExperience from './components/ProfessionalExperience'
import ScribbledDashPartition from './components/ScribbledDashPartition'
import Skillset from './components/Skillset'
import TechnologiesIUse from './components/TechnologiesIUse'
import UIUXSection from './components/UIUXSection'
import ValuesSection from './components/ValuesSection'

export default function Home() {
    return (
        <>
            <Hero />
            <ProfessionalExperience />
            <DownSwirlArrowPartition className="mt-10 mb-10" />
            <Skillset />
            <ScribbledDashPartition className="mt-10 mb-10" />
            <TechnologiesIUse />
            <DownSwirlArrowPartition className="mt-10 mb-10" />
            <UIUXSection />
            <ScribbledDashPartition className="mt-10 mb-10" />
            <ValuesSection />
            <DownSwirlArrowPartition className="mt-10 mb-10" />
            <ContactMe />
        </>
    )
}
