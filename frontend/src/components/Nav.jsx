import React from 'react'

function Nav() {
  return (
    <>
     <nav className='flex justify-between  px-40 items-center sticky top-0 w-full'>
        <h1 className=' py-5 font-bold text-3xl text-blue-500'>My Portfolio </h1>
        <ul className='flex gap-12  py-3 text-xl '>
          <a href='' className=' px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-400 hover:scale-105 transition-all duration-300  '>Home</a> 
          <a href='' className=' px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-400 hover:scale-105 transition-all duration-300'>About</a>
          <a href='' className=' px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-400 hover:scale-105 transition-all duration-300'>Skills</a>
          <a href='' className=' px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-400 hover:scale-105 transition-all duration-300'>Project</a>
          <a href='' className=' px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-400 hover:scale-105 transition-all duration-300'>Contact</a>
        </ul>
     </nav>
    
    </>
  )
}

export default Nav