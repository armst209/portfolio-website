
"use client"

import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"
import { useForm } from "react-hook-form"
import SendIcon from "@public/assets/send.svg"
import Image from "next/image"

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string)

const ContactForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onSubmit = handleSubmit(async (data) => {
        try {
            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                data,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
            );

            if (response.status === 200) {
                toast.success("Message sent successfully!");
                reset();
            }
        } catch (error) {
            toast.error("Email failed to send")
            console.error("Failed to send email:", error);
        }
    });

    return (
        <form onSubmit={onSubmit} className='flex flex-col h-full justify-center items-center w-full'>
            <input type="text" {...register("title")} className="bg-black border-[.5px] border-[hsl(240,4,16)] w-full mb-2 h-10 rounded-md p-2" placeholder='Title' required />
            {errors.title && <p role="alert">{errors.title.message as string}</p>}
            <input type="text" {...register("name")} className="bg-black border-[.5px] border-[hsl(240,4,16)] w-full mb-2 h-10 rounded-md p-2" placeholder='Name' required />
            {errors.name && <p role="alert">{errors.name.message as string}</p>}
            <input type="email" {...register("email")} className="bg-black border-[.5px] border-[hsl(240,4,16)] w-full mb-2 h-10 rounded-md p-2" placeholder='Email' required />
            {errors.email && <p role="alert">{errors.email.message as string}</p>}
            <textarea {...register("message")} maxLength={500} className="bg-black border-[.5px] border-[hsl(240,4,16)] w-full mb-4 h-10 rounded-md min-h-50 p-2" placeholder='Message' required />
            {errors.message && <p role="alert">{errors.message.message as string}</p>}
            <button type="submit" className='border-2 border-white p-4 rounded-xl w-30 font-bold flex flex-row items-center justify-center cursor-pointer'><Image src={SendIcon} width={15} alt="send email icon" className="icon-emerald-filter mr-2" /><p>Send</p></button>
        </form>
    )
}

export default ContactForm