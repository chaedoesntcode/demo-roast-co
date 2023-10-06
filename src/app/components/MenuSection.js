import React from 'react'
import Image from 'next/image'
import DrinksImg from '../../../public/images/drinks.jpg'
import PastryImg from '../../../public/images/pastries.jpg'
import Link from 'next/link'

const MenuSection = () => {
  return (
    <section className='section py-5'>
      <div className='w-[85vw] py-5 h-full mx-auto flex flex-col justify-center items-center text-center gap-y-10'>
        <div className='flex-1'>
          <h2 className='h2'>Explore Our Offerings</h2>
          <p className='text-[#6D737A]'>Something for Everyone: Vegan and Gluten-Free Selections Now Available!</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-center'>
          <Link href='/' className='flex flex-col hover:scale-105 transition'>
            <Image className='rounded-[30px] drop-shadow-md' src={DrinksImg} width={500} height={300} alt="People holding different types of coffee drinks"  />
            <p className='font-semibold mt-4'>Drinks</p>
          </Link>
          <Link href='/' className='flex flex-col hover:scale-105 transition'>
            <Image className='rounded-[30px] drop-shadow-md' src={PastryImg} width={500} height={300} alt="Pastries on plates and a cup of coffee"  />
            <p className='font-semibold mt-4'>Pastries</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MenuSection