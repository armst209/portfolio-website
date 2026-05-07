import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import TechnicalSkills from './TechnicalSkills'

// Mock Next.js Image component
vi.mock('next/image', () => ({
    default: ({ src, alt, ...props }: any) => (
        <img src={src} alt={alt} {...props} />
    ),
}))



describe('TechnicalSkills', () => {
    it('should render the component', () => {
        render(<TechnicalSkills />)
        const section = document.querySelector('section')
        expect(section).toBeInTheDocument()
    })

    it('should render main heading with Modern, Accessible, Visually Pleasing', () => {
        render(<TechnicalSkills />)

        expect(screen.getByText('Modern')).toBeInTheDocument()
        expect(screen.getByText('Accesible')).toBeInTheDocument()
        expect(screen.getByText('Visually Pleasing')).toBeInTheDocument()
    })

    it('should render section description', () => {
        render(<TechnicalSkills />)

        const description = screen.getByText(/Crafting user experiences that utilize modern systems/)
        expect(description).toBeInTheDocument()
    })

    it('should render Skillset section heading', () => {
        render(<TechnicalSkills />)

        const skillsetHeading = screen.getByText('Skillset:')
        expect(skillsetHeading).toBeInTheDocument()
    })

    it('should render Skillset section description', () => {
        render(<TechnicalSkills />)

        const skillsetDesc = screen.getByText(/With a focus on frontend development/)
        expect(skillsetDesc).toBeInTheDocument()
    })

    it('should render all items in Skillset list', () => {
        render(<TechnicalSkills />)

        expect(screen.getByText('Frontend Architecture')).toBeInTheDocument()
        expect(screen.getByText('Fullstack Web Development')).toBeInTheDocument()
        expect(screen.getByText('Web Accesiblity')).toBeInTheDocument()
        expect(screen.getByText('API Intergration')).toBeInTheDocument()
        expect(screen.getByText('UI/UX Design')).toBeInTheDocument()
    })

    it('should render Technologies section heading', () => {
        render(<TechnicalSkills />)

        const techHeading = screen.getByText('Technologies I Use:')
        expect(techHeading).toBeInTheDocument()
    })

    it('should render Technologies section description', () => {
        render(<TechnicalSkills />)

        const techDesc = screen.getByText(/I utilize a wide variety of tools/)
        expect(techDesc).toBeInTheDocument()
    })

    it('should render Frontend subsection', () => {
        render(<TechnicalSkills />)

        const frontendHeading = screen.getByText('Frontend')
        expect(frontendHeading).toBeInTheDocument()
    })

    it('should render Frontend technologies', () => {
        render(<TechnicalSkills />)

        expect(screen.getByText(/Frameworks: Next.js, Vite, Nuxt.js, Blazor/)).toBeInTheDocument()
        expect(screen.getByText(/Libraries: React, Vue, Tailwind CSS/)).toBeInTheDocument()
        expect(screen.getByText(/Testing: Jest, Vitest, Playwright/)).toBeInTheDocument()
        expect(screen.getByText(/State Management: Zustand, Redux/)).toBeInTheDocument()
    })

    it('should render Backend subsection', () => {
        render(<TechnicalSkills />)

        const backendHeading = screen.getByText('Backend')
        expect(backendHeading).toBeInTheDocument()
    })

    it('should render Backend technologies', () => {
        render(<TechnicalSkills />)

        expect(screen.getByText(/C#, .NET, Express.js, Node.js/)).toBeInTheDocument()
    })

    it('should render Design subsection', () => {
        render(<TechnicalSkills />)

        expect(screen.getByText('Design')).toBeInTheDocument()
    })

    it('should render Design technologies', () => {
        render(<TechnicalSkills />)

        expect(screen.getByText(/Figma, Davinci Resolve/)).toBeInTheDocument()
    })

    it('should render UI/UX Design section heading', () => {
        render(<TechnicalSkills />)

        const uxHeading = screen.getByText('UI/UX Design:')
        expect(uxHeading).toBeInTheDocument()
    })

    it('should render UI/UX Design section description', () => {
        render(<TechnicalSkills />)

        const uxDesc = screen.getByText(/I am a developer first, but I have experience in design/)
        expect(uxDesc).toBeInTheDocument()
    })

    it('should render all items in UI/UX Design list', () => {
        render(<TechnicalSkills />)

        expect(screen.getByText('Wireframing & Prototyping')).toBeInTheDocument()
        expect(screen.getByText('Typography/Font Selection')).toBeInTheDocument()
        expect(screen.getByText('Responsive & Modern Layouts')).toBeInTheDocument()
        expect(screen.getByText('Product Branding/Storytelling')).toBeInTheDocument()
        expect(screen.getByText('User Testing')).toBeInTheDocument()
        expect(screen.getByText('Color Selection/Accesiblility')).toBeInTheDocument()
    })

    it('should render ViewProjectsButton', () => {
        render(<TechnicalSkills />)

        const viewProjectsBtn = screen.getByText('View Projects')
        expect(viewProjectsBtn).toBeInTheDocument()
    })

    it('should render scribble period images', () => {
        render(<TechnicalSkills />)

        const scribblePeriods = screen.getAllByAltText('scribble blob period')
        expect(scribblePeriods.length).toBeGreaterThan(0)
    })

    it('should render background swirl images', () => {
        render(<TechnicalSkills />)

        const backgroundImages = screen.getAllByAltText('background image')
        expect(backgroundImages.length).toBe(3)
    })

    it('should render scribble circle images', () => {
        render(<TechnicalSkills />)

        const scribbleCircles = screen.getAllByAltText('scribble circle')
        expect(scribbleCircles.length).toBe(3)
    })

    it('should render skill icons', () => {
        render(<TechnicalSkills />)

        expect(screen.getByAltText('skillset icon')).toBeInTheDocument()
        expect(screen.getByAltText('technologies icon')).toBeInTheDocument()
        expect(screen.getByAltText('design icon')).toBeInTheDocument()
    })

    it('should have proper section structure', () => {
        render(<TechnicalSkills />)

        const section = document.querySelector('section')
        expect(section).toHaveClass('flex')
        expect(section).toHaveClass('flex-col')
        expect(section).toHaveClass('w-full')
        expect(section).toHaveClass('border-b-[.5px]')
    })

    it('should render skill cards with proper styling', () => {
        render(<TechnicalSkills />)

        const cards = document.querySelectorAll('[class*="border-[.5px]"][class*="rounded-xl"]')
        expect(cards.length).toBeGreaterThan(0)
    })

    it('should render lists as unordered lists', () => {
        render(<TechnicalSkills />)

        const lists = document.querySelectorAll('ul')
        expect(lists.length).toBeGreaterThan(0)

        lists.forEach((list) => {
            expect(list).toHaveClass('list-inside')
            expect(list).toHaveClass('list-disc')
        })
    })

    it('should render all headings with correct hierarchy', () => {
        render(<TechnicalSkills />)

        const h1s = document.querySelectorAll('h1')
        const h2s = document.querySelectorAll('h2')
        const h3s = document.querySelectorAll('h3')
        const h4s = document.querySelectorAll('h4')

        expect(h1s.length).toBeGreaterThan(0)
        expect(h2s.length).toBeGreaterThan(0)
        expect(h3s.length).toBeGreaterThan(0)
        expect(h4s.length).toBeGreaterThan(0)
    })

    it('should have emerald-green-highlight class on main headings', () => {
        render(<TechnicalSkills />)

        const emeraldHeadings = document.querySelectorAll('.emerald-green-highlight')
        expect(emeraldHeadings.length).toBeGreaterThan(0)
    })

    it('should have grey-secondary-text-color class on descriptions', () => {
        render(<TechnicalSkills />)

        const greyText = document.querySelectorAll('.grey-secondary-text-color')
        expect(greyText.length).toBeGreaterThan(0)
    })

    it('should have orange-text-color class on technology category headings', () => {
        render(<TechnicalSkills />)

        const orangeText = document.querySelectorAll('.orange-text-color')
        expect(orangeText.length).toBeGreaterThan(0)
    })

    it('should have relative positioning for skill card icons', () => {
        render(<TechnicalSkills />)

        const relativeElements = document.querySelectorAll('[class*="absolute"]')
        expect(relativeElements.length).toBeGreaterThan(0)
    })

    it('should render with proper flex layout classes', () => {
        render(<TechnicalSkills />)

        const section = document.querySelector('section')
        expect(section).toHaveClass('flex')
        expect(section).toHaveClass('flex-col')
        expect(section).toHaveClass('justify-center')
    })

    it('should render technology card with three subsections', () => {
        render(<TechnicalSkills />)

        // Check that we have Frontend, Backend, and Design sections
        const frontendSection = screen.getByText('Frontend').closest('div')
        const backendSection = screen.getByText('Backend').closest('div')
        const designSection = screen.getByText('Design').closest('div')

        expect(frontendSection).toBeInTheDocument()
        expect(backendSection).toBeInTheDocument()
        expect(designSection).toBeInTheDocument()
    })

    it('should render all card backgrounds with proper fill attribute', () => {
        render(<TechnicalSkills />)

        const backgroundImages = screen.getAllByAltText('background image')
        backgroundImages.forEach((img) => {
            expect(img).toHaveAttribute('src')
        })
    })
})
