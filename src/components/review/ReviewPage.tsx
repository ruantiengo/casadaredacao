import React from 'react'
import Slider from './slider'

const ReviewPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center pt-24'>
        <h1 className='text-[48px] font-bold text-center  '>O que os clientes dizem</h1>
        <Slider/>
    </div>
  )
}

export default ReviewPage