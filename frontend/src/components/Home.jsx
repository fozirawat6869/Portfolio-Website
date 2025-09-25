import React from 'react'
import img from '../images/mayur.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


function Home() {
  return (
    <>
     <div id="home" className='flex justify-center gap-20 pt-30'>
        <div className='w-120 h-120 rounded-full overflow-hidden  border-2 border-white hover:border-blue-500 hover:scale-105 transition-all duration-300'>
            <img src={img} alt="" className='h-full w-full object-cover  ' />
        </div>
        <div className=' flex-col gap-2  py-10'>
          <p className='text-3xl font-bold text-center text-gray-400 '>Hello, I'm</p>
          <h1 className='text-[80px] font-bold font-poppins  text-white'>Mayur Rawat</h1>
          <h1 className='text-[35px] font-bold mt-1 text-center text-gray-400'>Full-Stack Web Developer</h1>
          <h1 className='text-[20px] font-bold mt-8 text-center  hover:scale-105 transition-all duration-300  '><a href='#contact' className='bg-white px-3 py-2 rounded-xl cursor-pointer text-blue-500'>Contact me</a></h1>
           <div className='flex gap-5 justify-center mt-10 '>
             <a href="" className='text-4xl text-blue-500 bg-white'>
              <FaLinkedin/>
             </a>
              <a href="" className='text-4xl text-blue-500 bg-white'>
              <FaGithub/>
             </a>
           </div>
           <div>
          <h1 className='text-[22px] mt-1 text-center text-white mt-10'>hire me on</h1>
           
           </div>
        </div>
     </div>
    </>
  )
}

export default Home