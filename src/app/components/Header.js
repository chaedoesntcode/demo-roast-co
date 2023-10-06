import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/images/logo.png'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='bg-black text-white w-full fixed top-0 left-0 z-10'>
        <div className='max-w-[1300px] px-5 md:px-10 xl:px-0 mx-auto h-[100px] flex justify-between items-center'>
        {/* start: logo */}
         <Link href='/'>
                <Image src={Logo}  width={300} height={200} alt="The Demo Roast Co. Logo" />
        </Link>
        {/* end: logo */}

        {/* start: desktop nav*/}
        <nav className='hidden lg:flex'>
            <ul className='flex flex-row text-1xl items-center gap-x-8'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/'>About</Link>
                </li>
                <li>
                    <Link href='/'>Menu</Link>
                </li>
                <li>
                    <Link href='/'>Visit</Link>
                </li>
                <li>
                    <Link href='/'>Contact</Link>
                </li>
            </ul>
        </nav>
        {/* end: desktop nav*/}

        {/* start: mobile nav*/}
        <MobileNav />
        {/* end: mobile nav*/}

        </div>
    </header>
  )
}

export default Header