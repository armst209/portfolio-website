import { render } from '@testing-library/react'
import { axe } from 'vitest-axe'
vi.mock('next/image', () => ({ default: (props: any) => <img {...props} /> }))

import ScribbledDashPartition from './ScribbledDashPartition'

describe('ScribbledDashPartition', () => {
    it('renders without throwing an error', () => {
        expect(() => render(<ScribbledDashPartition />)).not.toThrow()
    })
    it('should have no accessibility violations', async () => {
        const { container } = render(<ScribbledDashPartition />)
        const results = (await axe(container)).violations
        expect(results).toHaveLength(0)
    })
})
