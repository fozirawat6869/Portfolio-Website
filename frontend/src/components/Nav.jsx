import React from 'react'

function Nav() {
  return (
    <>
     <nav className='flex justify-between bg-red-300 px-40 items-center fixed top-0 left-0 w-full'>
        <h1 className='bg-green-400 px-20 py-5 font-bold text-2xl text-white'>My Portfolio </h1>
        <ul className='flex gap-12  py-3 text-xl '>
          <a href='' className=' px-6 py-3 rounded-xl cursor-pointer text-white hover:bg-blue-400 hover:scale-105 transition-all duration-300  '>Home</a> 
          <a href='' className=' px-6 py-3 rounded-xl cursor-pointer text-white hover:bg-blue-400 hover:scale-105 transition-all duration-300'>About</a>
          <a href='' className=' px-6 py-3 rounded-xl cursor-pointer text-white hover:bg-blue-400 hover:scale-105 transition-all duration-300'>Skills</a>
          <a href='' className=' px-6 py-3 rounded-xl cursor-pointer text-white hover:bg-blue-400 hover:scale-105 transition-all duration-300'>Project</a>
          <a href='' className=' px-6 py-3 rounded-xl cursor-pointer text-white hover:bg-blue-400 hover:scale-105 transition-all duration-300'>Contact</a>
        </ul>
     </nav>
    
    </>
  )
}

export default Nav