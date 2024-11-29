import React from 'react'

const Slider = () => {
    const slides = [
        {
            url: 'https://eu.bape.com/collections/bape-sta'
        },
        {
          url: 'https://eu.bape.com/cdn/shop/files/2411_BAPE-X-ADIDAS_BANNER__2160x1080_9c000024-5ffb-4d89-b6d6-d4e5581ae030.jpg?v=1732528716&width=1600'
        }
    ];
  return (
    <div className='max-w-[1900px] h-[1000px] w-full m-auto py-16 px-4 relative'>
        <div style={{backgroundImage: `url(${slides[1].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
    </div>
  )
}

export default Slider