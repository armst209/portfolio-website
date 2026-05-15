import ContactMe from './components/ContactMe/ContactMe'
import DownSwirlArrowPartition from './components/Partitions/DownSwirlArrowPartition'
import Hero from './components/Hero/Hero'
import ProfessionalExperience from './components/ProfessionalExperience/ProfessionalExperience'
import ScribbledDashPartition from './components/Partitions/ScribbledDashPartition'
import SkillSetSection from './components/Sections/SkillSetSection'
import TechnologiesIUseSection from './components/Sections/TechnologiesIUseSection'
import UIUXSection from './components/Sections/UIUXSection'
import ValuesSection from './components/Sections/ValuesSection'

export default function Home() {
    return (
        <>
            <Hero />
            <ProfessionalExperience />
            <DownSwirlArrowPartition className="mt-10 mb-10" />
            <SkillSetSection />
            <ScribbledDashPartition className="mt-10 mb-10" />
            <TechnologiesIUseSection />
            <DownSwirlArrowPartition className="mt-10 mb-10" />
            <UIUXSection />
            <ScribbledDashPartition className="mt-10 mb-10" />
            <ValuesSection />
            <DownSwirlArrowPartition className="mt-10 mb-10" />
            <ContactMe />
        </>
    )
}
