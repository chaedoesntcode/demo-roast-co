import React from 'react'

const SubscribeSection = () => {
  return (
    <section className='section py-10 bg-primary'>
      <div className='w-[85vw] text-white mx-auto flex flex-col justify-center items-center text-center gap-y-2'>
        <h2 className='h2'>Join Our Family</h2>
        <p className='w-1/2'>be the first to taste our latest brews, receive exclusive offers and discounts, gain access to behind-the-scenes insights</p>
        <div className='mt-4 mb-4 w-full'>
          <input type='email' placeholder='Email address' className='py-2 px-4 rounded-l-lg w-1/3'/>
          <button className='rounded-r-lg bg-accent py-2 px-6 text-white'>Subscribe</button>
        </div>
      </div>
    </section>
  )
}

export default SubscribeSection