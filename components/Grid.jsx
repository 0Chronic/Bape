import React from 'react'
import img from '../public/assets/bape1.jpg'
import imx from '../public/assets/bape2.jpg'
import ape from '../public/assets/ape.webp'
import apx from "../public/assets/apx.webp"
import kid from "../public/assets/kid.webp"
import Image from 'next/image'

const Grid = () => {
  return (
    <div className='mt-9 p-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Image src={img} width={800} height={500} />

        <Image src={imx} width={800} height={500} />

        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 mt-5 gap-4'>
            <Image src={ape} className="rounded-lg object-cover w-full h-auto"  />

            <Image src={apx} className="rounded-lg object-cover w-full h-auto"  />

            <Image src={kid} className="rounded-lg object-cover w-full h-auto"  />

        </div>

        <div className="my-10 border-b-2 border-black pb-2 mb-5">
     
     </div>
    </div>
  )
}

export default Grid