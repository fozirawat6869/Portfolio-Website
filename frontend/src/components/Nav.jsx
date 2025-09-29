import React from 'react'

function Nav() {
  return (
    <>
     <nav className='flex sm:justify-center justify-center lg:justify-between px-5 lg:px-40 items-center  flex-wrap sticky top-0  w-full bg-black z-1 border-b-1 border-blue-500 '>
        <h1 className=' py-5 font-bold text-3xl  text-blue-500'>My Portfolio </h1>
        <ul className='lg:flex gap-12 flex-wrap justify-center hidden  py-3 text-xl   '>
          <a href='#home' className=' px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-500 hover:scale-105 transition-all duration-300  '>Home</a> 
          <a href='#about' className=' px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-500 hover:scale-105 transition-all duration-300'>About</a>
          <a href='#skills'  className=' px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-500 hover:scale-105 transition-all duration-300'>Skills</a>
          <a href='#project' className=' px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-500 hover:scale-105 transition-all duration-300'>Project</a>
          <a href='#contact' className=' px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-500 hover:scale-105 transition-all duration-300'>Contact</a>
        </ul>
     </nav>
    
    </>
  )
}

export default Nav