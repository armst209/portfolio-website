import { render, screen } from '@testing-library/react'
import ButtonLinkSection from './ButtonLinkSection'


vi.mock('next/image', () => ({
    default: ({ src, alt, ...props }: any) => (
        <img src={src} alt={alt} {...props} />
    ),
}))


vi.mock('next/link', () => ({
    default: ({ children, href }: any) => (
        <a href={href}>{children}</a>
    ),
}))



describe('ButtonLinkSection', () => {
    it('should render the component', () => {
        render(<ButtonLinkSection />)
        const container = document.querySelector('[class*="flex"][class*="flex-col"]')
        expect(container).toBeInTheDocument()
    })

    it('should render Resume button with correct link', () => {
        render(<ButtonLinkSection />)
        const resumeLink = screen.getAllByRole('link')[0]

        expect(resumeLink).toBeInTheDocument()
        expect(resumeLink).toHaveAttribute(
            'href',
            'https://www.linkedin.com/in/aaronlamararmstrong/overlay/1777396879101/single-media-viewer/?profileId=ACoAAAh1eh4BVMDLJsB0gxpMglGeh1kbmv42b9I'
        )
    })

    it('should render LinkedIn button with correct link', () => {
        render(<ButtonLinkSection />)
        const linkedinLink = screen.getAllByRole('link')[1]

        expect(linkedinLink).toBeInTheDocument()
        expect(linkedinLink).toHaveAttribute(
            'href',
            'https://www.linkedin.com/in/aaronlamararmstrong/'
        )
    })

    it('should have correct rel attributes for external links', () => {
        render(<ButtonLinkSection />)
        const links = screen.getAllByRole('link')

        // Filter for external links (not the next/link wrapped ViewProjects)
        const externalLinks = links.filter((link) =>
            link.getAttribute('href')?.startsWith('https://www.linkedin.com')
        )

        expect(externalLinks.length).toBe(2)
        externalLinks.forEach((link) => {
            expect(link).toHaveAttribute('rel', 'noopener noreferer')
        })
    })

    it('should have target="_blank" for external links', () => {
        render(<ButtonLinkSection />)
        const links = screen.getAllByRole('link')

        const externalLinks = links.filter((link) =>
            link.getAttribute('href')?.startsWith('https://www.linkedin.com')
        )

        expect(externalLinks.length).toBe(2)
        externalLinks.forEach((link) => {
            expect(link).toHaveAttribute('target', '_blank')
        })
    })

    it('should render icon images for buttons', () => {
        render(<ButtonLinkSection />)
        const icons = screen.getAllByAltText('resume icon')

        expect(icons).toHaveLength(2)
        icons.forEach((icon) => {
            expect(icon).toBeInTheDocument()
            expect(icon).toHaveAttribute('width', '20')
        })
    })


    it('should render all buttons with correct text', () => {
        render(<ButtonLinkSection />)

        expect(screen.getByText('Resume')).toBeInTheDocument()
        expect(screen.getByText('LinkedIn')).toBeInTheDocument()
        expect(screen.getByText('View Projects')).toBeInTheDocument()
    })

    it('should have correct styling classes on the main container', () => {
        render(<ButtonLinkSection />)
        const container = document.querySelector('[class*="flex-col"]')

        expect(container).toHaveClass('flex')
        expect(container).toHaveClass('flex-col')
        expect(container).toHaveClass('items-center')
        expect(container).toHaveClass('w-auto')
    })

    it('should render two external links and one next/link wrapper', () => {
        render(<ButtonLinkSection />)
        const links = screen.getAllByRole('link')

        expect(links).toHaveLength(3)
    })

    it('should render buttons within links', () => {
        render(<ButtonLinkSection />)
        const buttons = screen.getAllByRole('button')
        expect(buttons.length).toBeGreaterThanOrEqual(2)
    })
})
