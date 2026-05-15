import { render } from '@testing-library/react'
import { axe } from 'vitest-axe'

vi.mock('next/image', () => ({ default: (props: any) => <img {...props} /> }))

import DownSwirlArrowPartition from './DownSwirlArrowPartition'

describe('DownSwirlArrowPartition', () => {
    it('renders without throwing an error', () => {
        expect(() => render(<DownSwirlArrowPartition />)).not.toThrow()
    })
    it('should have no accessibility violations', async () => {
        const { container } = render(<DownSwirlArrowPartition />)
        const results = (await axe(container)).violations

        expect(results).toHaveLength(0)
    })
})
