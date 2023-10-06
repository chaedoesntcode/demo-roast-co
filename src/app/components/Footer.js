import React from 'react'
import Link from 'next/link'
import { BiLogoFacebook,BiLogoInstagram } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='section  bg-black text-secondary'>
      <div className='w-[85vw] py-[100px] mx-auto h-full flex flex-col gap-y-8 items-center md:items-start md:flex-row md:justify-between xl:justify-center gap-x-10'>
      
      <div className="min-h-full w-full md:w-2/3 lg:w-1/3 xl:w-1/4"> 
        <div className='flex flex-col'>
          <h2 className='h2 mb-0'>Demo Roast Co.</h2>
          <p className='text-xs md:text-sm'>Explore the aroma-rich journey that is Demo Roast Co. Our passion for crafting artisanal coffee excellence comes to life, reflecting our unwavering commitment to delivering the finest coffee experience. Every cup we brew embodies our dedication to perfection.</p>
       </div>
      </div>
      <div className="min-h-full w-full md:w-1/3 lg:w-1/4"> 
        <div className='lg:px-10 flex flex-col'>
          <p  className='mb-2 md:mb-4 font-bold'>Links</p>
          <ul>
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
       </div>
      </div>
      <div className="w-full min-h-full md:w-1/3 lg:w-1/4"> 
        <div className='flex flex-col'>
          <p  className='mb-2 md:mb-4 font-bold'>Get in touch</p>
          <span>123 Demo Avenue <br /> Demo, USA</span>
          <span className='mt-4'>123-456-7890 <br /> hi@demoroastco.com</span>
          <div className='flex gap-x-2 pt-4 text-xl'>
            <BiLogoFacebook className='cursor-pointer'/>
            <BiLogoInstagram className='cursor-pointer'/>
          </div>
       </div>
      </div>
      </div>
      <div className=' border-t-primary border-t py-2 text-center'><p>design & development by <Link href='https://www.chae.dev/'>www.chae.dev</Link></p></div>

    </footer>
  )
}

export default Footer