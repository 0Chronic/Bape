import React from 'react'
import { data } from '@/app/mockData'

const Horizon = () => {
  return (
    <>
        <h1></h1>
        <div className='ralative flex items-center'>
       <div id='slider' className='w-full h-full overflow-x-scroll scroll'>
       {data.map((item)=>(
            <img className='w-[400px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={item.img} alt='/' />
         ))}
       </div>
        </div>
    </>
  )
}

export default Horizon