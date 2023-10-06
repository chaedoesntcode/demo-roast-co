import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/images/logo.png'
import MobileNav from './MobileNav'

const Header = () => {
    const navItems = [
        {title: 'Home', href: '/'},
        {title: 'About', href: '/'},
        {title: 'Menu', href: '/'},
        {title: 'Visit', href: '/'},
        {title: 'Contact', href: '/'},
    ];

  return (
    <header className='bg-black text-secondary w-full fixed top-0 left-0 z-10'>
        <div className='max-w-[1300px] px-5 md:px-10 xl:px-0 mx-auto h-[100px] flex justify-between items-center'>
        {/* start: logo */}
         <Link href='/'>
                <Image priority={true}  src={Logo}  width={300} height={200} alt="The Demo Roast Co. Logo" />
        </Link>
        {/* end: logo */}

        {/* start: desktop nav*/}
        <nav className='hidden lg:flex'>
            <ul className='flex flex-row text-1xl items-center gap-x-8'>
            {navItems.map((item, index) => (
                <li  className='hover:text-bold w-10' key={index}>
                    <Link href={item.href}>{item.title}</Link>
                </li>
           ))}
                
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