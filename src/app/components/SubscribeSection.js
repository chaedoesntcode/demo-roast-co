import React from 'react'

const SubscribeSection = () => {

  return (
    <section className='section py-10 bg-[#282828]'>
      <div className='max-w-[85vw] text-secondary mx-auto flex flex-col justify-center items-center text-center gap-y-2'>
        <h2 className='h2'>Join Our Family</h2>
        <p  className='w-full xl:w-1/2'>be the first to taste our latest brews, receive exclusive offers and discounts, gain access to behind-the-scenes insights</p>
        <div className='mt-4 mb-4 w-full'>
          <input type='email' placeholder='Email address' className='text-gray-600 py-2 px-4 focus:outline-none focus:ring rounded-l-full w-1/2 md:w-1/3'/>
          <button className='rounded-r-full bg-accent hover:bg-[#921D1D] transition py-2 px-6 text-white'>Subscribe</button>
        </div>
      </div>
    </section>
  )
}

export default SubscribeSection