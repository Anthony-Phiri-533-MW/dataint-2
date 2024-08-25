import React from 'react'
import { MainCta } from '../Buttons/main/MainCta'

const MinContent = () => {
    return (
        <div className='flex justify-between'>
            <div>
                <p className='lg:text-2xl text-lg'>Let us turn your data into a powerful asset.<span>Contact us today for a free consultation!</span></p>
                
            </div>

            <MainCta text={"work with us"} />

        </div>
    )
}

export default MinContent