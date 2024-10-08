"use client"

import { SearchManufacturerProps } from '@/types'
import React, { useState, Fragment } from 'react'
import { manufacturers } from '@/constants'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'

const SearchManuFacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {

    const [query, setQuery] = useState("")

    const filteredManufactures = query === "" ? manufacturers : manufacturers.filter((item) => {

        return item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
    })



    return (
        <div className='search-manufacturer'>
            <Combobox
                value={manufacturer}
                onChange={setManufacturer}


            >
                <div className='relative w-full'>
                    <Combobox.Button className="absolute top-[14px] ">
                        <Image
                            src="/car-logo.svg"
                            width={20}
                            height={20}
                            className="ml-4"
                            alt="car logo"
                        />
                    </Combobox.Button>
                    <Combobox.Input className="search-manufacturer__input"
                        placeholder="Suzuki "
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    >

                    </Combobox.Input>

                    <Transition as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveTo='opacity-0'
                        leaveFrom='opacity-100'
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options >
                            {

                                filteredManufactures.map((item) => (
                                    <Combobox.Option
                                        key={item}
                                        className={({ active }) => `relative search-manufacturer__option ${active ? "bg-primary-blue text-white" : "text-gray-900"}`}
                                        value={item}
                                    >
                                        {({ selected, active }) => (
                                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                {item}
                                            </span>
                                        )}
                                    </Combobox.Option>
                                ))
                            }
                        </Combobox.Options>

                    </Transition>
                </div>

            </Combobox>

        </div>
    )
}

export default SearchManuFacturer
