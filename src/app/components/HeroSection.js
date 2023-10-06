'use client'
import React from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
      className="relative overflow-hidden h-screen">
      <div className="absolute inset-0 w-full h-full-[100px]"></div>
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
        <div className="flex flex-col gap-y-2 text-center items-center text-secondary">
          <p className="text-2xl uppercase">Elevating Coffee</p>
          <h1 className="h1 drop-shadow-md">Crafting Artisanal Coffee Excellence</h1>
          <button className='order-btn mt-4'>Order Online</button>
        </div>
      </div>
    </motion.section>
  )
}

export default HeroSection