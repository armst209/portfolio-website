import SendIcon from '@public/assets/icons/send.svg'
import LoadingIcon from '@public/assets/icons/loading.svg'
import Image from 'next/image'

const SendEmailButton = ({ isSending = false }: { isSending: boolean }) => {
    return (
        <div id="send-email-button" className="w-full flex justify-end">
            <button
                type="submit"
                className="p-2 text-white rounded-md w-30 font-bold flex flex-row items-center justify-center cursor-pointer border-2 bg-black-custom dark:bg-orange-custom dark:border-0 dark:text-black-custom"
            >
                <p className="mr-2">Send</p>
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
    )
}

export default SendEmailButton
