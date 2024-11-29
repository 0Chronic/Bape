"use client";

import React,{useState} from  'react'
import {BsChevronCompactLeft , BsChevronCompactRight} from 'react-icons/bs'

const Slider = () => {
    const slides = [
        {
            url: 'https://eu.bape.com/cdn/shop/files/New_Project_5.png?v=1730126876&width=1600'
        },
        {
          url: 'https://eu.bape.com/cdn/shop/files/2411_BAPE-X-ADIDAS_BANNER__2160x1080_9c000024-5ffb-4d89-b6d6-d4e5581ae030.jpg?v=1732528716&width=1600'
        },
        {
          url: 'https://eu.bape.com/cdn/shop/files/Bape_STA_ICON_M2_banner_2160x1080_db90c01e-5e86-4ec6-bc75-0753af6b57ec.jpg?v=1732881270&width=1600'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
     const isFirstSlide = currentIndex === 0;
     const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
     setCurrentIndex(newIndex)
      
    }
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length -1;
      const newIndex = isLastSlide ? 0 : currentIndex +1;
      setCurrentIndex(newIndex)


    }
  return (
    <div className='max-w-[1900px] h-[1000px] w-full m-auto py-16 px-4 relative group'>
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
        {/*Left Arrow*/}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-7 text-4xl rounded-full bg-black/40 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={40} />
        </div>

          {/*Right Arrow*/}

          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 right-7 transltae-y-[-50%] text-4xl rounded-full bg-black/40 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={40}/>
          </div>
    </div>
  )
}

export default Slider