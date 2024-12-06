"use client"
import React,{useState} from 'react'

import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/assets/logo.png'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {


  const [nav, setNav ] = useState (false)

  const handleNav = () => {
    setNav(!nav)
  }


  return (
    <div >
      <div className='flex items-center justify-between w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
        <>
          <Image src={logo}  alt='/'
              width={70}
              height={50} className='p-2'/>
        </>
        </Link>


        <div>
          <ul className='hidden md:flex'>
            <li className='ml-10 text-md uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-md uppercase hover:border-b'>
              <Link href='/#about'>Arrivals</Link>
            </li>
            <li className='ml-10 text-md uppercase hover:border-b'>
              <Link href='/#skills'>Skills</Link>
            </li>
            
           
            <li className='ml-10 text-md uppercase hover:border-b'>
              <Link href='/#contact'>Brands</Link>
            </li>
          </ul>

            {/* Hamburger Icon */}
            <div

            onClick={handleNav}
            
            className='md:hidden'
          >
            <AiOutlineMenu size={25}/>
          </div>

          {/*mobile view */}

            <div onClick={handleNav}  className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-50 ': ''} >
              <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-50' : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'}>
               

               <div>
              <div className='flex w-full items-center justify-between'>
                <Image src={logo}  width={70} height={30} />
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                  <AiOutlineClose />
                </div>
              </div>
               </div>


               <div className='py-5 flex flex-col'>
               <ul className=' md:flex'>
            <li className='py-4 text-md uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='py-4 text-md uppercase hover:border-b'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='py-4 text-md uppercase hover:border-b'>
              <Link href='/#skills'>Skills</Link>
            </li>
            
            <li className='py-4 text-md uppercase hover:border-b'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>


        
               </div>

             
           

       

              </div>
            </div>


      </div>
      </div>
    
    </div>
  )
}

export default Navbar