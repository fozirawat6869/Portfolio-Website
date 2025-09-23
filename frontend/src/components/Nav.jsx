import React from 'react'

function Nav() {
  return (
    <>
     <nav className='flex justify-between  px-40 items-center sticky top-0 w-full bg-black'>
        <h1 className=' py-5 font-bold text-3xl text-blue-500'>My Portfolio </h1>
        <ul className='flex gap-12  py-3 text-xl '>
          <a className=' px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-500 hover:scale-105 transition-all duration-300  '>Home</a> 
          <a href='#about' className=' px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-500 hover:scale-105 transition-all duration-300'>About</a>
          <a  className=' px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-500 hover:scale-105 transition-all duration-300'>Skills</a>
          <a  className=' px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-500 hover:scale-105 transition-all duration-300'>Project</a>
          <a  className=' px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-500 hover:scale-105 transition-all duration-300'>Contact</a>
        </ul>
     </nav>
    
    </>
  )
}

export default Nav