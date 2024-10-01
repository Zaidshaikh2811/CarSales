"use client"

import { ShowMoreProps } from '@/types'
import React from 'react'
import CustomButton from './CustomButton'
import { updateSearchParams } from '@/utils'
import { useRouter } from 'next/navigation'

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    const router = useRouter();
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPatName = updateSearchParams("limit", `${newLimit}`)
        router.push(newPatName)

    }


    return (
        <div className='w-full flex-center gap-5 mt-10'>

            {
                !isNext && (

                    <CustomButton
                        title='show More'
                        containerStyles='bg-primary-blue rounded-full text-white'
                        handleClick={handleNavigation}
                        btnType='button'
                    />
                )
            }

        </div>
    )
}

export default ShowMore
