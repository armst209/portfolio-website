import { render } from '@testing-library/react'
import { axe } from 'vitest-axe'

vi.mock('next/image', () => ({ default: (props: any) => <img {...props} /> }))
vi.mock('next/link', () => ({
    default: ({ children, href }: any) => <a href={href}>{children}</a>,
}))
vi.mock('next-themes', () => ({ useTheme: () => ({ resolvedTheme: 'light', setTheme: vi.fn() }) }))

import Navigation from './Navigation'

describe('Navigation', () => {
    it('renders without throwing an error', () => {
        expect(() => render(<Navigation />)).not.toThrow()
    })
    it('should have no accessibility violations', async () => {
        const { container } = render(<Navigation />)
        const results = (await axe(container)).violations
        expect(results).toHaveLength(0)
    })
})
