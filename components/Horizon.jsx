"use client";
import React from 'react'
import { data } from '@/app/mockData'
import {MdChevronLeft , MdChevronRight} from 'react-icons/md'



const Horizon = () => {

const sliderLeft = () => {
  var slider = document.getElementById ('slider')
  slider.scrollLeft = slider.scrollLeft -500
}

const slideright = () => {
  var slider = document.getElementById('slider')
  slider.scrollLeft = slider.scrollLeft +500
}

 
  return (
    <div className='my-5 mb-5'>
        <h1 className='text-center text-2xl font-bold underline'> New Arrivals</h1>
        <div  className='ralative flex items-center'>
            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={sliderLeft}   size={40} />
       <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
       {data.map((item)=>(
            <img className='w-[400px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={item.img} alt='/' />
         ))}
       </div>
       <MdChevronRight  className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideright}  size={40} />
       
        </div>
        <div className="border-b-2 border-black pb-2 my-5">
     
    </div>
    </div>
  )
}

export default Horizon