'use client'

import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import SendIcon from '@public/assets/icons/send.svg'
import LoadingIcon from '@public/assets/icons/loading.svg'
import Image from 'next/image'
import { useState } from 'react'

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string)

const ContactForm = () => {
    const [isSending, setIsSending] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = handleSubmit(async (data) => {
        setIsSending(true)
        try {
            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                data,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
            )

            if (response.status === 200) {
                toast.success('Message sent successfully!')
                setIsSending(false)
                reset()
            }
        } catch (error) {
            setIsSending(false)
            toast.error('Email failed to send')
            console.error('Failed to send email:', error)
        }
    })

    return (
        <form
            onSubmit={onSubmit}
            className="flex flex-col h-full justify-center items-center w-full"
        >
            <label htmlFor="subject" className="font-bold w-full pb-2">
                Subject
            </label>
            <input
                type="text"
                {...register('subject')}
                className="w-full mb-2 h-10 rounded-md p-2 border border-light-border dark:border-dark-border bg-white dark:bg-black"
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
                className="w-full mb-2 h-10 rounded-md p-2 border border-light-border dark:border-dark-border bg-white dark:bg-black"
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
                className="w-full mb-2 h-10 rounded-md p-2 border border-light-border dark:border-dark-border bg-white dark:bg-black"
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
                className=" min-h-50 w-full mb-2 h-10 rounded-md p-2 border border-light-border dark:border-dark-border bg-white dark:bg-black"
                placeholder="Your message here..."
                required
            />
            {errors.message && <p role="alert">{errors.message.message as string}</p>}
            <div className="w-full flex justify-end">
                <button
                    type="submit"
                    className="p-2 rounded-md w-30 font-bold flex flex-row items-center justify-center cursor-pointer bg-black-custom dark:bg-orange-custom"
                >
                    <p className="mr-2 text-white dark:text-black-custom">Send</p>
                    {isSending ? (
                        <>
                            <Image
                                src={LoadingIcon}
                                width={15}
                                alt="send email icon"
                                className="hidden black-color-filter animate-spin dark:flex"
                            />
                            <Image
                                src={LoadingIcon}
                                width={15}
                                alt="send email icon"
                                className="flex white-color-filter animate-spin dark:hidden"
                            />
                        </>
                    ) : (
                        <>
                            <Image
                                src={SendIcon}
                                width={15}
                                alt="send email icon"
                                className="hidden mr-2 black-color-filter dark:flex"
                            />
                            <Image
                                src={SendIcon}
                                width={15}
                                alt="send email icon"
                                className="flex mr-2 white-color-filter dark:hidden"
                            />
                        </>
                    )}
                </button>
            </div>
        </form>
    )
}

export default ContactForm
