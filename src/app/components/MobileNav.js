'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { HiX } from 'react-icons/hi'
import { HiMenuAlt3 } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const MobileNav = () => {
   const [openMenu, setOpenMenu] = useState(false);

   const toggleMenu = () => {
    setOpenMenu(!openMenu);
   }

   const navItems = [
        {title: 'Home', href: '/'},
        {title: 'About', href: '/'},
        {title: 'Menu', href: '/'},
        {title: 'Visit', href: '/'},
        {title: 'Contact', href: '/'},
    ];

    const menuVars = {
        hidden: {
            x: '100%',
        },
        show: {
            x: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0], 
            },
        },
        exit: {
            x: '100%',
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1], 
            },
        }
    }

  return (
    <nav className='lg:hidden text-secondary'>
        <div onClick={toggleMenu} className={`text-4xl cursor-pointer ${openMenu ? 'hidden' : 'block'}`}>
            <HiMenuAlt3 />
        </div>
        <div onClick={toggleMenu} className={`text-4xl cursor-pointer ${openMenu ? 'block' : 'hidden'}`}>
            <HiX />
        </div>
        <AnimatePresence>
            {openMenu && (
                <motion.div variants={menuVars}
                initial='hidden'
                animate='show'
                exit='exit'
                className={` origin-top w-full bg-black top-[100px] absolute right-0 h-screen z-20`}>
                      <ul className='h-[75%] justify-center flex flex-col items-center gap-y-8 text-secondary font-primary font-bold text-5xl'>
                          {navItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href} onClick={() => setOpenMenu(false)}>{item.title}</Link>
                            </li>
                          ))}
                      </ul>
                </motion.div>
            )}
        </AnimatePresence>
        
    </nav>
  )
}

export default MobileNav