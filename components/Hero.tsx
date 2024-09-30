
"use client"
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {
    const handleSCroll = () => {

    }

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Find,Book or Rent a Car -- quickly and easily
                </h1>
                <p className='hero__subtitle'>
                    With our platform, you can find the perfect car for your needs and budget.

                </p>
                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleSCroll}
                />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image
                        src="/hero.png"
                        alt="hero"
                        fill
                        className='object-contain'
                    />
                    <div className='hero__image-overlay'>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
