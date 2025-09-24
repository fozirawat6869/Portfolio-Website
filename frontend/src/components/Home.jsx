import React from 'react'
import img from '../images/mayur.jpg'

function Home() {
  return (
    <>
     <div id="home" className='flex justify-center gap-20 pt-30'>
        <div className='w-120 h-120 rounded-full overflow-hidden'>
            <img src={img} alt="" className='h-full w-full object-cover ' />
        </div>
        <div className=' flex-col gap-2'>
          <p className='text-3xl font-bold text-center text-gray-400'>Hello, I'm</p>
          <h1 className='text-[80px] font-bold font-poppins  text-white'>Mayur Rawat</h1>
          <h1 className='text-[35px] font-bold text-center text-gray-400'>Full-Stack Web Developer</h1>
        </div>
     </div>
    </>
  )
}

export default Home