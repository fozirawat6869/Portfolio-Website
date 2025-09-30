import React from 'react'
import portfolioImg from '../images/portfolioImg.png'
import libraryImg from '../images/libraryImg.png'

function Project() {
  return (
    <>
     <div id="project" className='flex flex-col items-center pb-30 pt-5 px-10  '>
       <h1 className='text-white text-3xl lg:text-6xl font-bold pb-20'>My Projects</h1>
        <div className='flex flex-wrap gap-x-15 gap-y-25 justify-center  lg:px-30'>
           {/*    project one   */}
            <div className='flex flex-col justify-between  w-100 h-150 p-5 bg-white  border-white border-1 rounded-xl'>
              <div>
                 <img src={portfolioImg} alt="" className='w-full h-45 rounded-xl border-white border-1 hover:scale-105 transition-all duration-300'  />
                 <h1 className='text-center text-xl pt-5 pb-2 font-bold text-blue-500'>My-Portfolio-Website</h1>
                  <p className=' tracking-wider h-63 overflow-y-auto scrollbar-none p-1'><span className='text-lg font-bold'>Description :- </span> A modern portfolio website created with React and Tailwind CSS, highlighting my skills, projects, and professional experience. Features a responsive design and interactive UI elements for an engaging user experience. Showcases projects with detailed descriptions, links, and visual previews. Includes smooth navigation, animations, and visually appealing layouts to make the content easy to explore. Optimized for performance, accessibility, and cross-device compatibility, providing a professional online presence.</p>
              </div>
              <div className='flex gap-5 justify-center pt-3 flex-wrap '>
                <a href="https://github.com/fozirawat6869/Portfolio-Website.git">
                <button className='hover:bg-blue-500 bg-gray-600 hover:scale-105 duration-300 cursor-pointer  font-cold rounded-3xl text-white text-base px-4 py-2'>Source Code</button>
                </a>
                <a href="https://portfolio-website-mayur.vercel.app/">
                <button
                 className='hover:bg-blue-500 hover:scale-105 duration-300 cursor-pointer bg-gray-600 font-cold rounded-3xl text-white text-base px-4 py-2'>Live Demo</button>
                 </a>
              </div>
             </div>

              {/*    project two   */}
            <div className='flex flex-col justify-between w-100 h-150 p-5 bg-white  border-white border-1 rounded-xl'>
              <div>
                 <img src={libraryImg} alt="" className='w-full h-45 rounded-xl border-white border-1 hover:scale-105 transition-all duration-300'  />
                 <h1 className='text-center text-xl pt-5 pb-2 font-bold text-indigo-400'>Library-Management-System</h1>
                  <p className=' tracking-wider h-63 overflow-y-auto scrollbar-none p-1'><span className='text-lg font-bold'>Description :- </span>A web application that allows users to request books, which are then processed by the admin. Users can view available books and make requests, while the admin manages book issuance and keeps track of the library collection. Built with HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB, it provides a simple and organized interface for library management.</p>
              </div>
              <div className='flex gap-5 justify-center pt-3 '>
                <a href="https://github.com/fozirawat6869/Library-Management-System.git">
                <button className='hover:bg-indigo-400 bg-gray-600 hover:scale-105 duration-300 cursor-pointer  font-cold rounded-3xl text-white text-base px-4 py-2'>Source Code</button>
                </a>
                <a href="https://portfolio-website-mayur.vercel.app/">
                <button
                 className='hover:bg-indigo-400 hover:scale-105 duration-300 cursor-pointer bg-gray-600 font-cold rounded-3xl text-white text-base px-4 py-2'>Live Demo</button>
                 </a>
              </div>
             </div>
               

        </div>
     </div>
    </>
  )
}

export default Project