import { render } from '@testing-library/react'

vi.mock('next/image', () => ({ default: (props: any) => <img {...props} /> }))

import ProfessionalExperience from './ProfessionalExperience'

describe('ProfessionalExperience', () => {
    it('renders without throwing an error', () => {
        expect(() => render(<ProfessionalExperience />)).not.toThrow()
    })
})
