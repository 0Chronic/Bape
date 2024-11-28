import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/assets/logo.png'
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div>
      <div className='flex items-center justify-between w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
        <>
          <Image src={logo}  alt='/'
              width='70'
              height='50'/>
        </>
        </Link>


        <div>
          <ul className='hidden md:flex'>
            <li className='ml-10 text-md uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-md uppercase hover:border-b'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-md uppercase hover:border-b'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-md uppercase hover:border-b'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-md uppercase hover:border-b'>
              <Link href='/resume'>Resume</Link>
            </li>
            <li className='ml-10 text-md uppercase hover:border-b'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>

            {/* Hamburger Icon */}
            <div
            
            className='md:hidden'
          >
            <AiOutlineMenu size={25}/>
          </div>
         

        </div>


      </div>
    
    </div>
  )
}

export default Navbar