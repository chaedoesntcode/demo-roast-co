'use client'
import React, { useState }  from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Logo from '../../../public/images/logo.png'

const Header = () => {

  const [menuIcon, setMenuIcon] = useState(false);  

  const handleMobileNav = () => {
    setMenuIcon( !menuIcon );
  }

  return (
    <header className='bg-primary text-white w-full fixed top-0 left-0 z-10'>
        <nav className='max-w-[1300px] mx-auto h-[100px] px-[30px] lg:px-[80px] flex justify-between items-center'>
            {/* start: nav logo */}
            <Link href='/'>
                <Image src={Logo}  width={300} height={200} alt="The Demo Roast Co. Logo" />
            </Link>
            {/* end: nav logo */}
            {/* start: nav links */}
            <ul className='flex flex-row text-1xl items-center gap-x-8'>
                <li>
                    <Link href='/' onClick={() => handleMobileNav(false)} >Home</Link>
                </li>
                <li>
                    <Link href='/' onClick={() => handleMobileNav(false)} >About</Link>
                </li>
                <li>
                    <Link href='/' onClick={() => handleMobileNav(false)} >Menu</Link>
                </li>
                <li>
                    <Link href='/' onClick={() => handleMobileNav(false)} >Visit</Link>
                </li>
                <li>
                    <Link href='/' onClick={() => handleMobileNav(false)} >Contact</Link>
                </li>
            </ul>
            {/* end: nav links */}
            {/* start: nav button */}
            <button className='h-[50px] bg-accent hover:bg-[] px-8 py-2 rounded-lg hover:bg-[#921D1D] transition'>Order Online</button>
            {/* end: nav button */}
        </nav>


    </header>
  )
}

export default Header