import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden h-screen bg-red-500">
      <div className="absolute inset-0 w-full h-full-[100px] bg-orange-500"></div>
      <div className='absolute inset-0 w-full h-full'>
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
        <div className="flex flex-col text-center text-secondary">
          <p className="text-2xl uppercase">Elevating Coffee</p>
          <h1 className="h1 drop-shadow-md">Crafting Artisanal Coffee Excellence</h1>
        </div>
      </div>
    </section>
  )
}

export default HeroSection