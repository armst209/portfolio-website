import { render } from '@testing-library/react'
import { axe } from 'vitest-axe'

vi.mock('next/image', () => ({ default: (props: any) => <img {...props} /> }))

import SemiColonPeriodScribble from './SemiColonPeriodScribble'

describe('SemiColonPeriodScribble', () => {
    it('renders without throwing an error', () => {
        expect(() => render(<SemiColonPeriodScribble />)).not.toThrow()
    })

    it('should have no accessibility violations', async () => {
        const { container } = render(<SemiColonPeriodScribble />)
        const results = (await axe(container)).violations

        expect(results).toHaveLength(0)
    })
})
