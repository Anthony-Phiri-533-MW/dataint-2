import React from 'react'

export const FeaturedContent = ({title, content}) => {
  return (
    <div className='w-full md:w-1/2' data-testid="featured-content">
        <h3 className='font-bold text-2xl pb-4 '>{title}</h3>
        <p className='text-md leading-normal tracking-wide text-lg'>{content}</p>
    </div>
  )
}