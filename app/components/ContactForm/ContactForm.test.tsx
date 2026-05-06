
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'


vi.mock('@emailjs/browser', () => ({
    default: {
        init: vi.fn(),
        send: vi.fn(),
    },
}))


vi.mock('react-hot-toast', () => ({
    default: {
        success: vi.fn(),
        error: vi.fn(),
    },
}))

vi.mock('next/image', () => ({
    default: ({ src, alt, ...props }: any) => (
        <img src={src} alt={alt} {...props} />
    ),
}))

import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

describe('ContactForm', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('should render the form with all input fields', () => {
        render(<ContactForm />)

        expect(screen.getByPlaceholderText('Title')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
    })

    it('should render the send button with icon', () => {
        render(<ContactForm />)

        const button = screen.getByRole('button', { name: /send/i })
        expect(button).toBeInTheDocument()

        const icon = screen.getByAltText('send email icon')
        expect(icon).toBeInTheDocument()
    })

    it('should have required attributes on all inputs', () => {
        render(<ContactForm />)

        const titleInput = screen.getByPlaceholderText('Title') as HTMLInputElement
        const nameInput = screen.getByPlaceholderText('Name') as HTMLInputElement
        const emailInput = screen.getByPlaceholderText('Email') as HTMLInputElement
        const messageInput = screen.getByPlaceholderText('Message') as HTMLTextAreaElement

        expect(titleInput.required).toBe(true)
        expect(nameInput.required).toBe(true)
        expect(emailInput.required).toBe(true)
        expect(messageInput.required).toBe(true)
    })

    it('should have email input type set to email', () => {
        render(<ContactForm />)

        const emailInput = screen.getByPlaceholderText('Email') as HTMLInputElement
        expect(emailInput.type).toBe('email')
    })

    it('should have correct maxLength on message textarea', () => {
        render(<ContactForm />)

        const messageInput = screen.getByPlaceholderText('Message') as HTMLTextAreaElement
        expect(messageInput.maxLength).toBe(500)
    })

    it('should submit form with valid data', async () => {
        const user = userEvent.setup()
        vi.mocked(emailjs.send).mockResolvedValue({ status: 200 } as any)

        render(<ContactForm />)

        const titleInput = screen.getByPlaceholderText('Title')
        const nameInput = screen.getByPlaceholderText('Name')
        const emailInput = screen.getByPlaceholderText('Email')
        const messageInput = screen.getByPlaceholderText('Message')
        const submitButton = screen.getByRole('button', { name: /send/i })

        await user.type(titleInput, 'Test Title')
        await user.type(nameInput, 'John Doe')
        await user.type(emailInput, 'john@example.com')
        await user.type(messageInput, 'This is a test message')
        await user.click(submitButton)

        await waitFor(() => {
            expect(emailjs.send).toHaveBeenCalled()
        })
    })

    it('should call emailjs.send with correct parameters', async () => {
        const user = userEvent.setup()
        vi.mocked(emailjs.send).mockResolvedValue({ status: 200 } as any)

        render(<ContactForm />)

        const titleInput = screen.getByPlaceholderText('Title')
        const nameInput = screen.getByPlaceholderText('Name')
        const emailInput = screen.getByPlaceholderText('Email')
        const messageInput = screen.getByPlaceholderText('Message')
        const submitButton = screen.getByRole('button', { name: /send/i })

        await user.type(titleInput, 'Test Title')
        await user.type(nameInput, 'John Doe')
        await user.type(emailInput, 'john@example.com')
        await user.type(messageInput, 'Test message')
        await user.click(submitButton)

        await waitFor(() => {
            expect(emailjs.send).toHaveBeenCalledWith(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    title: 'Test Title',
                    name: 'John Doe',
                    email: 'john@example.com',
                    message: 'Test message',
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
        })
    })

    it('should show success toast on successful submission', async () => {
        const user = userEvent.setup()
        vi.mocked(emailjs.send).mockResolvedValue({ status: 200 } as any)

        render(<ContactForm />)

        const titleInput = screen.getByPlaceholderText('Title')
        const nameInput = screen.getByPlaceholderText('Name')
        const emailInput = screen.getByPlaceholderText('Email')
        const messageInput = screen.getByPlaceholderText('Message')
        const submitButton = screen.getByRole('button', { name: /send/i })

        await user.type(titleInput, 'Test Title')
        await user.type(nameInput, 'John Doe')
        await user.type(emailInput, 'john@example.com')
        await user.type(messageInput, 'Test message')
        await user.click(submitButton)

        await waitFor(() => {
            expect(toast.success).toHaveBeenCalledWith('Message sent successfully!')
        })
    })

    it('should reset form after successful submission', async () => {
        const user = userEvent.setup()
        vi.mocked(emailjs.send).mockResolvedValue({ status: 200 } as any)

        render(<ContactForm />)

        const titleInput = screen.getByPlaceholderText('Title') as HTMLInputElement
        const nameInput = screen.getByPlaceholderText('Name') as HTMLInputElement
        const emailInput = screen.getByPlaceholderText('Email') as HTMLInputElement
        const messageInput = screen.getByPlaceholderText('Message') as HTMLTextAreaElement
        const submitButton = screen.getByRole('button', { name: /send/i })

        await user.type(titleInput, 'Test Title')
        await user.type(nameInput, 'John Doe')
        await user.type(emailInput, 'john@example.com')
        await user.type(messageInput, 'Test message')
        await user.click(submitButton)

        await waitFor(() => {
            expect(titleInput.value).toBe('')
            expect(nameInput.value).toBe('')
            expect(emailInput.value).toBe('')
            expect(messageInput.value).toBe('')
        })
    })

    it('should show error toast on submission failure', async () => {
        const user = userEvent.setup()
        const testError = new Error('Email service failed')
        vi.mocked(emailjs.send).mockRejectedValue(testError)

        render(<ContactForm />)

        const titleInput = screen.getByPlaceholderText('Title')
        const nameInput = screen.getByPlaceholderText('Name')
        const emailInput = screen.getByPlaceholderText('Email')
        const messageInput = screen.getByPlaceholderText('Message')
        const submitButton = screen.getByRole('button', { name: /send/i })

        await user.type(titleInput, 'Test Title')
        await user.type(nameInput, 'John Doe')
        await user.type(emailInput, 'john@example.com')
        await user.type(messageInput, 'Test message')
        await user.click(submitButton)

        await waitFor(() => {
            expect(toast.error).toHaveBeenCalledWith('Email failed to send')
        })
    })

    it('should not reset form on submission failure', async () => {
        const user = userEvent.setup()
        vi.mocked(emailjs.send).mockRejectedValue(new Error('Email failed'))

        render(<ContactForm />)

        const titleInput = screen.getByPlaceholderText('Title') as HTMLInputElement
        const nameInput = screen.getByPlaceholderText('Name') as HTMLInputElement
        const emailInput = screen.getByPlaceholderText('Email') as HTMLInputElement
        const messageInput = screen.getByPlaceholderText('Message') as HTMLTextAreaElement
        const submitButton = screen.getByRole('button', { name: /send/i })

        const testData = {
            title: 'Test Title',
            name: 'John Doe',
            email: 'john@example.com',
            message: 'Test message',
        }

        await user.type(titleInput, testData.title)
        await user.type(nameInput, testData.name)
        await user.type(emailInput, testData.email)
        await user.type(messageInput, testData.message)
        await user.click(submitButton)

        await waitFor(() => {
            expect(titleInput.value).toBe(testData.title)
            expect(nameInput.value).toBe(testData.name)
            expect(emailInput.value).toBe(testData.email)
            expect(messageInput.value).toBe(testData.message)
        })
    })

    it('should have correct CSS classes on form elements', () => {
        render(<ContactForm />)

        const titleInput = screen.getByPlaceholderText('Title')
        const messageInput = screen.getByPlaceholderText('Message')
        const submitButton = screen.getByRole('button', { name: /send/i })

        expect(titleInput).toHaveClass('bg-black')
        expect(titleInput).toHaveClass('rounded-md')
        expect(messageInput).toHaveClass('min-h-50')
        expect(submitButton).toHaveClass('border-2')
        expect(submitButton).toHaveClass('rounded-xl')
    })

    it('should be a client component with proper form structure', () => {
        render(<ContactForm />)

        const form = screen.getByPlaceholderText('Title').closest('form')
        expect(form).toBeInTheDocument()
        expect(form).toHaveClass('flex')
        expect(form).toHaveClass('flex-col')
    })

})
