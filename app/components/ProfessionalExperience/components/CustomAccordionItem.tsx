'use client'

import { AccordionItemProps } from '@szhsin/react-accordion'
import { ReactNode } from 'react'
import MinusIcon from '@public/assets/icons/minus.svg'
import PlusIcon from '@public/assets/icons/plus.svg'
import Image from 'next/image'
import { AccordionItem as Item } from '@szhsin/react-accordion'

const CustomAccordionItem = ({ header, ...rest }: AccordionItemProps) => {
    return (
        <Item
            {...rest}
            header={({ state: { isEnter } }) => (
                <div className="flex justify-between w-full h-full cursor-pointer">
                    <div className="text-lg lg:text-2xl">{header as ReactNode}</div>
                    {isEnter ? (
                        <>
                            <Image
                                src={MinusIcon}
                                alt="minus icon"
                                className="hidden ml-auto transition-transform duration-200 ease-out emerald-green-filter cursor-pointer w-8 h-8 dark:flex coffee:hidden"
                            />
                            <Image
                                src={MinusIcon}
                                alt="minus icon"
                                className="flex ml-auto transition-transform duration-200 ease-out black-color-filter cursor-pointer w-8 h-8 dark:hidden coffee:hidden"
                            />
                            <Image
                                src={MinusIcon}
                                alt="minus icon"
                                className="hidden ml-auto transition-transform duration-200 ease-out coffee-color-filter cursor-pointer w-8 h-8 dark:hidden coffee:flex"
                            />
                        </>
                    ) : (
                        <>
                            <Image
                                src={PlusIcon}
                                alt="plus icon"
                                className="hidden ml-auto transition-transform duration-200 ease-out emerald-green-filter cursor-pointer w-8 h-8 dark:flex coffee:hidden"
                            />
                            <Image
                                src={PlusIcon}
                                alt="plus icon"
                                className="flex ml-auto transition-transform duration-200 ease-out black-color-filter cursor-pointer w-8 h-8 dark:hidden coffee:hidden"
                            />
                            <Image
                                src={PlusIcon}
                                alt="plus icon"
                                className="hidden ml-auto transition-transform duration-200 ease-out coffee-color-filter cursor-pointer w-8 h-8 dark:hidden coffee:flex"
                            />
                        </>
                    )}
                </div>
            )}
            className="border-b border-[hsl(240,4,16)]"
            buttonProps={{
                className: ({ isEnter }) => `flex w-full p-4 text-left`,
            }}
            contentProps={{
                className: 'transition-height duration-200 ease-out',
            }}
            panelProps={{ className: 'p-4' }}
        />
    )
}

export default CustomAccordionItem
