import React from 'react'
import Image from 'next/image'
import AboutImg from '../../../public/images/about.jpg'

const AboutSection = () => {
  return (
    <section className='section bg-secondary h-[500px]'>
      <div className='w-[90vw] h-full mx-auto flex items-center'>
        <div className='flex-1'>
          <Image className='rounded-[30px]' src={AboutImg} width='100%' height='100%' objectFit='cover' alt="The Demo Roast Co. Logo"  />
        </div>

        <div className='flex-1'>
          <h2 className='h2'>Learn Our Story</h2>
          <p className='mb-6 max-w-[90%]'>Demo Roast Co. began with a deep passion for crafting exceptional coffee experiences. Founded on the principles of quality, creativity, and community, we set out to create more than just a coffee destination; we aimed to establish a place where every cup tells a story. Our mission is simple: to share our love for coffee with the world, one carefully roasted bean at a time.</p>
          <button className='h-[50px] bg-accent hover:bg-[] px-8 py-2 rounded-lg hover:bg-[#921D1D] text-white transition'>Read More</button>
        </div>
      </div>
    </section>
  )
}

export default AboutSection