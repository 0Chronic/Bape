import React from 'react'
import Image from 'next/image'
import babeblack from '../public/assets/bapeblack.webp'
import black from '../public/assets/store.webp'
import bathing from '../public/assets/bathing.webp'
import apee from '../public/assets/apee.webp'
import bapy from '../public/assets/bapy.webp'
const Brand = () => {
  return (
    <div>
         <h1 className='text-center font-bold text-xl'>Brands</h1>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-5'>

     
      <Image src={bathing}
      
      width={800} // Ensure width is specified
      height={600} // Provide height or use layout
    />


    <Image src={black}  width={800}  height={600}  />

    <Image src={babeblack} width={800} height={600} />

    <Image  src={apee} width={800} height={600}/>

    <Image src={bapy} width={800} height={600} />

      </div>
    </div>
  )
}

export default Brand