import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'

vi.mock('next/image', () => ({
    default: ({
        src,
        alt,
        className,
    }: {
        src: { src: string }
        alt: string
        className?: string
    }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src.src} alt={alt} className={className} />
    ),
}))

import PortfolioCard from './PortfolioCard'

const image = { src: '/hero.webp', height: 100, width: 100, blurDataURL: '' }

const props = {
    name: 'Test Project',
    eyebrow: 'Live',
    description: 'A test project description.',
    tech: ['React', 'TypeScript'],
    images: [image],
    visitUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
}

describe('PortfolioCard', () => {
    it('renders without throwing an error', () => {
        expect(() => render(<PortfolioCard {...props} />)).not.toThrow()
    })
    it('should have no accessibility violations', async () => {
        const { container } = render(<PortfolioCard {...props} />)
        const results = (await axe(container)).violations
        expect(results).toHaveLength(0)
    })
    it('toggles the details panel', async () => {
        const user = userEvent.setup()
        render(<PortfolioCard {...props} />)

        const toggle = screen.getByRole('button', { name: 'Show Test Project details' })
        expect(toggle).toHaveAttribute('aria-expanded', 'false')

        await user.click(toggle)
        expect(toggle).toHaveAttribute('aria-expanded', 'true')
        expect(toggle).toHaveAccessibleName('Hide Test Project details')

        await user.keyboard('{Escape}')
        expect(toggle).toHaveAttribute('aria-expanded', 'false')
    })
})
