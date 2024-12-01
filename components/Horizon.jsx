"use client";
import React from 'react'
import { data } from '@/app/mockData'
import {MdChevronLeft , MdChevronRight} from 'react-icons/md'
import { document, fromJSON } from 'postcss'

const Horizon = () => {

 
  return (
    <>
        <h1></h1>
        <div className='ralative flex items-center'>
            <MdChevronLeft   size={40} />
       <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
       {data.map((item)=>(
            <img className='w-[400px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={item.img} alt='/' />
         ))}
       </div>
       <MdChevronRight  size={40} />
        </div>
    </>
  )
}

export default Horizon