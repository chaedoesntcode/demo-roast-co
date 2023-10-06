import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden h-screen">
      <div className="absolute inset-0 w-full h-full-[100px]"></div>
      <div className='absolute bg-black inset-0 w-full h-full'>
        <video 
          className='object-cover h-full w-full'
          autoPlay
          muted
          loop
        >
          <source src='video/banner-video.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col gap-y-2 text-center items-center text-secondary">
          <p className="text-2xl uppercase">Artistry in Every Brew</p>
          <h1 className="h1 drop-shadow-md">Crafting Artisanal Coffee Excellence</h1>
          <button className='order-btn mt-4'>Order Online</button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection