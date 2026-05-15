import { render } from '@testing-library/react'
import { axe } from 'vitest-axe'

vi.mock('next/image', () => ({ default: (props: any) => <img {...props} /> }))

import TechnologiesIUseSection from './TechnologiesIUseSection'

describe('TechnologiesIUseSection', () => {
    it('renders without throwing an error', () => {
        expect(() => render(<TechnologiesIUseSection />)).not.toThrow()
    })
    it('should have no accessibility violations', async () => {
        const { container } = render(<TechnologiesIUseSection />)
        const results = (await axe(container)).violations

        expect(results).toHaveLength(0)
    })
})
