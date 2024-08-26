import React from 'react'
import { MainCta } from '../Buttons/main/MainCta'

const MinContent = () => {
    return (
        <div className='lg:flex lg:justify-between pb-10'>
            <div>
                <p className='lg:text-2xl text-lg pb-4'>Let us turn your data into a powerful asset.<span>Contact us today for a free consultation!</span></p>
                
            </div>

            <MainCta text={"work with us"} className='pb-4'/>

        </div>
    )
}

export default MinContent