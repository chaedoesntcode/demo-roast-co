import React from 'react'
import Image from 'next/image'
import AboutImg from '../../../public/images/about.jpg'

const AboutSection = () => {
  return (
    <section className='section bg-secondary py-10 md:py-20'>
      <div className='max-w-[85vw] h-full mx-auto flex flex-col gap-y-4 lg:flex-row xl:max-w-[1300px] gap-x-10'>
        <div className='hidden md:flex flex-1'>
          <Image className='rounded-[30px]' width={'100%'} height={'50%'} src={AboutImg} alt="The Demo Roast Co. cafe staff attending to a customer"  />
        </div>

        <div className='flex-1'>
          <h2 className='h2'>Learn Our Story</h2>
          <p className='mb-6 lg:max-w-[85%]'>Demo Roast Co. began with a deep passion for crafting exceptional coffee experiences. Founded on the principles of quality, creativity, and community, we set out to create more than just a coffee destination; we aimed to establish a place where every cup tells a story. Our mission is simple: to share our love for coffee with the world, one carefully roasted bean at a time.</p>
          <button className='btn'>Read More</button>
        </div>
      </div>
    </section>
  )
}

export default AboutSection