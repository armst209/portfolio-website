import { render } from '@testing-library/react'
import { axe } from 'vitest-axe'

vi.mock('next/image', () => ({ default: (props: any) => <img {...props} /> }))
vi.mock('next-themes', () => ({ useTheme: () => ({ resolvedTheme: 'light', setTheme: vi.fn() }) }))

import ThemeToggle from './ThemeToggle'

describe('ThemeToggle', () => {
    it('renders without throwing an error', () => {
        expect(() => render(<ThemeToggle />)).not.toThrow()
    })
    it('should have no accessibility violations', async () => {
        const { container } = render(<ThemeToggle />)
        const results = (await axe(container)).violations
        expect(results).toHaveLength(0)
    })
})
