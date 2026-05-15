import { render } from '@testing-library/react'
import { axe } from 'vitest-axe'

vi.mock('next/image', () => ({ default: (props: any) => <img {...props} /> }))
vi.mock('next/link', () => ({
    default: ({ children, href }: any) => <a href={href}>{children}</a>,
}))

import Footer from './Footer'

describe('Footer', () => {
    it('renders without throwing an error', () => {
        expect(() => render(<Footer />)).not.toThrow()
    })
    it('should have no accessibility violations', async () => {
        const { container } = render(<Footer />)
        const results = (await axe(container)).violations
        expect(results).toHaveLength(0)
    })
})
