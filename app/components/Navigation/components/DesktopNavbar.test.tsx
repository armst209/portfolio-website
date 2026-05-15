import { render } from '@testing-library/react'
import { axe } from 'vitest-axe'

vi.mock('next/link', () => ({
    default: ({ children, href }: any) => <a href={href}>{children}</a>,
}))

import DesktopNavbar from './DesktopNavbar'

describe('DesktopNavbar', () => {
    it('renders without throwing an error', () => {
        expect(() => render(<DesktopNavbar />)).not.toThrow()
    })
    it('should have no accessibility violations', async () => {
        const { container } = render(<DesktopNavbar />)
        const results = (await axe(container)).violations
        expect(results).toHaveLength(0)
    })
})
