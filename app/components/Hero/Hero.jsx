import React from 'react'
import { MainCta } from "../Buttons/main/MainCta";
import Image from 'next/image';
import heroImage from "../../../public/bgremoved1 1.png";

const Hero = () => {
    return (
        <div className='lg:flex lg:justify-between lg:space-x-12 md:space-x-8 md:flex justify-center pb-12'>
            <section className='space-y-12'>
                <h1 className='lg:text-5xl text-4xl grid grid-cols-1 font-bold lg:tracking-wide'>Unlocking tomorrow's <span>solutions today</span></h1>
                <h3 className='lg:text-2xl text-xl grid grid-cols-1'>Experience Data-Driven Excellence
                    <span>Empowering Insights, </span>
                    <span>Transforming Businesses </span>
                    <span>and various fields</span>
                </h3>

                <div className=''>
                    <MainCta text={"work with us"} />
                </div>

            </section>

            <section>
                <Image src={heroImage} alt='hero image' width={400} height={300} />
            </section>
        </div>
    )
}

export default Hero