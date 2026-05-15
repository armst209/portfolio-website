import { render } from '@testing-library/react'
import { axe } from 'vitest-axe'

vi.mock('next/image', () => ({ default: (props: any) => <img {...props} /> }))

import ProfessionalExperience from './ProfessionalExperience'

describe('ProfessionalExperience', () => {
    it('renders without throwing an error', () => {
        expect(() => render(<ProfessionalExperience />)).not.toThrow()
    })
    it('should have no accessibility violations', async () => {
        const { container } = render(<ProfessionalExperience />)
        const results = (await axe(container)).violations

        expect(results).toHaveLength(0)
    })
})
