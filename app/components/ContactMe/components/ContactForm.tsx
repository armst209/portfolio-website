'use client'

import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { useTransition } from 'react'
import SendEmailButton from './SendEmailButton'

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string)

const ContactForm = () => {
    const [isPending, startTransition] = useTransition()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data: Record<string, unknown>): void => {
        startTransition(async () => {
            try {
                const response = await emailjs.send(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                    data,
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
                )

                if (response.status === 200) {
                    toast.success('Message sent successfully!')
                    reset()
                }
            } catch (error) {
                toast.error('Email failed to send')
                console.error('Failed to send email:', error)
            }
        })
    }

    return (
        <form
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col h-full justify-center items-center w-full"
        >
            <label htmlFor="subject" className="font-bold w-full pb-2">
                Subject
            </label>
            <input
                type="text"
                {...register('subject')}
                className="w-full mb-2 h-10 rounded-md p-2 bg-transparent border border-light-border dark:border-dark-border dark:bg-black placeholder:text-grey-600"
                placeholder="Your Subject"
                required
            />
            {errors.title && <p role="alert">{errors.title.message as string}</p>}
            <label htmlFor="name" className="font-bold w-full pb-2">
                Name
            </label>
            <input
                type="text"
                {...register('name')}
                className="w-full mb-2 h-10 rounded-md p-2 bg-transparent border border-light-border dark:border-dark-border dark:bg-black placeholder:text-grey-600"
                placeholder="Your Name"
                required
            />
            {errors.name && <p role="alert">{errors.name.message as string}</p>}
            <label htmlFor="email" className="font-bold w-full pb-2">
                Email
            </label>
            <input
                type="email"
                {...register('email')}
                className="w-full mb-2 h-10 rounded-md p-2 bg-transparent border border-light-border dark:border-dark-border dark:bg-black placeholder:text-grey-600"
                placeholder="ex: contact@email.com"
                required
            />
            {errors.email && <p role="alert">{errors.email.message as string}</p>}
            <label htmlFor="message" className="font-bold w-full pb-2">
                Message
            </label>
            <textarea
                {...register('message')}
                maxLength={500}
                className=" min-h-50 w-full mb-2 h-10 rounded-md p-2 bg-transparent border border-light-border dark:border-dark-border dark:bg-black placeholder:text-grey-600"
                placeholder="Your message here..."
                required
            />
            {errors.message && <p role="alert">{errors.message.message as string}</p>}
            <SendEmailButton isSending={isPending} />
        </form>
    )
}

export default ContactForm
