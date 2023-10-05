'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const SubscribeSection = () => {

  return (
    <section className='section py-10 bg-primary'>
      <div className='max-w-[85vw] text-white mx-auto flex flex-col justify-center items-center text-center gap-y-2'>
        <motion.h2 
         variants={fadeIn('up', 0.1)}
         initial="hidden"
         whileInView={"show"}
        className='h2'>Join Our Family</ motion.h2>
        <motion.p 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={"show"}
        className='w-full xl:w-1/2'>be the first to taste our latest brews, receive exclusive offers and discounts, gain access to behind-the-scenes insights</motion.p>
        <motion.div 
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView={"show"}
        className='mt-4 mb-4 w-full'>
          <input type='email' placeholder='Email address' className='text-gray-600 py-2 px-4 focus:outline-none focus:ring rounded-l-lg w-1/2 md:w-1/3'/>
          <button className='rounded-r-lg bg-accent py-2 px-6 text-white'>Subscribe</button>
        </motion.div>
      </div>
    </section>
  )
}

export default SubscribeSection