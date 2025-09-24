import React from 'react'
import portfolioImg from '../images/portfolioImg.png'

function Project() {
  return (
    <>
     <div id="project" className='flex flex-col items-center pb-50 pt-5 '>
       <h1 className='text-white text-6xl font-bold pb-20'>My Projects</h1>
        <div className='flex flex-wrap gap-x-15 gap-y-25 justify-center px-30'>
           {/*    project one   */}
            <div className='flex flex-col justify-between w-100 h-150 p-5 bg-white  border-white border-1 rounded-xl'>
              <div>
                 <img src={portfolioImg} alt="" className='w-full h-30% rounded-xl border-white border-1 hover:scale-110 transition-all duration-300'  />
                 <h1 className='text-center text-xl pt-5 pb-2 font-bold'>Description</h1>
                  <p className=' tracking-wider h-61 overflow-y-auto scrollbar-none p-1'>A modern portfolio website created with React and Tailwind CSS, highlighting my skills, projects, and professional experience. Features a responsive design and interactive UI elements for an engaging user experience. Showcases projects with detailed descriptions, links, and visual previews. Includes smooth navigation, animations, and visually appealing layouts to make the content easy to explore. Optimized for performance, accessibility, and cross-device compatibility, providing a professional online presence.</p>
              </div>
              <div className='flex gap-5 justify-center pt-3 '>
                <button className='hover:bg-blue-500 bg-gray-600 hover:scale-105 duration-300 cursor-pointer  font-cold rounded-3xl text-white text-base px-4 py-2'>Source Code</button>
                <a href="https://portfolio-website-mayur.vercel.app/">
                <button
                 className='hover:bg-blue-500 hover:scale-105 duration-300 cursor-pointer bg-gray-600 font-cold rounded-3xl text-white text-base px-4 py-2'>Live Demo</button>
                 </a>
              </div>
             </div>
             {/* 2 nd project */}
              <div className='flex flex-col justify-between w-100 h-150 p-5 bg-white  border-white border-1 rounded-xl'>
              <div>
                 <img src={portfolioImg} alt="" className='w-full h-30% rounded-xl border-white border-1 hover:scale-110 transition-all duration-300'  />
                 <h1 className='text-center text-xl pt-5 pb-2 font-bold'>Description</h1>
                  <p className=' tracking-wider h-61 overflow-y-auto '>A modern portfolio website created with React and Tailwind CSS, highlighting my skills, projects, and professional experience. Features a responsive design and interactive UI elements for an engaging user experience. Showcases projects with detailed descriptions, links, and visual previews. Includes smooth navigation, animations, and visually appealing layouts to make the content easy to explore. </p>
              </div>
              <div className='flex gap-5 justify-center pt-3 '>
                <button className='hover:bg-blue-500 bg-gray-600 hover:scale-105 duration-300 cursor-pointer  font-cold rounded-3xl text-white text-base px-4 py-2'>Source Code</button>
                <button className='hover:bg-blue-500 hover:scale-105 duration-300 cursor-pointer bg-gray-600 font-cold rounded-3xl text-white text-base px-4 py-2'>Live Demo</button>
              </div>
             </div>
             {/*  thirdd project */}
              <div className='flex flex-col justify-between w-100 h-150 p-5 bg-white  border-white border-1 rounded-xl'>
              <div>
                 <img src={portfolioImg} alt="" className='w-full h-30% rounded-xl border-white border-1 hover:scale-110 transition-all duration-300'  />
                 <h1 className='text-center text-xl pt-5 pb-2 font-bold'>Description</h1>
                  <p className=' tracking-wider h-61 overflow-y-auto '>A modern portfolio website created with React and Tailwind CSS, highlighting my skills, projects, and professional experience. Features a responsive design and interactive UI elements for an engaging user experience. Showcases projects with detailed descriptions, links, and visual previews. Includes smooth navigation, animations, and visually appealing layouts to make the content easy to explore. Optimized for performance, accessibility, and cross-device compatibility, providing a professional online presence.</p>
              </div>
              <div className='flex gap-5 justify-center pt-3 '>
                <button className='hover:bg-blue-500 bg-gray-600 hover:scale-105 duration-300 cursor-pointer  font-cold rounded-3xl text-white text-base px-4 py-2'>Source Code</button>
                <button className='hover:bg-blue-500 hover:scale-105 duration-300 cursor-pointer bg-gray-600 font-cold rounded-3xl text-white text-base px-4 py-2'>Live Demo</button>
              </div>
             </div>
             {/* 4th */}
              <div className='flex flex-col justify-between w-100 h-150 p-5 bg-white  border-white border-1 rounded-xl'>
              <div>
                 <img src={portfolioImg} alt="" className='w-full h-30% rounded-xl border-white border-1 hover:scale-110 transition-all duration-300'  />
                 <h1 className='text-center text-xl pt-5 pb-2 font-bold'>Description</h1>
                  <p className=' tracking-wider h-61 overflow-y-auto '>A modern portfolio website created with React and Tailwind CSS, highlighting my skills, projects, and professional experience. Features a responsive design and interactive UI elements for an engaging user experience. Showcases projects with detailed descriptions, links, and visual previews. Includes smooth navigation, animations, and visually appealing layouts to make the content easy to explore. Optimized for performance, accessibility, and cross-device compatibility, providing a professional online presence.</p>
              </div>
              <div className='flex gap-5 justify-center pt-3 '>
                <button className='hover:bg-blue-500 bg-gray-600 hover:scale-105 duration-300 cursor-pointer  font-cold rounded-3xl text-white text-base px-4 py-2'>Source Code</button>
                <button className='hover:bg-blue-500 hover:scale-105 duration-300 cursor-pointer bg-gray-600 font-cold rounded-3xl text-white text-base px-4 py-2'>Live Demo</button>
              </div>
             </div>

             {/* 5th */}
              <div className='flex flex-col justify-between w-100 h-150 p-5 bg-white  border-white border-1 rounded-xl'>
              <div>
                 <img src={portfolioImg} alt="" className='w-full h-30% rounded-xl border-white border-1 hover:scale-110 transition-all duration-300'  />
                 <h1 className='text-center text-xl pt-5 pb-2 font-bold'>Description</h1>
                  <p className=' tracking-wider h-61 overflow-y-auto '>A modern portfolio website created with React and Tailwind CSS, highlighting my skills, projects, and professional experience. Features a responsive design and interactive UI elements for an engaging user experience. Showcases projects with detailed descriptions, links, and visual previews. Includes smooth navigation, animations, and visually appealing layouts to make the content easy to explore. Optimized for performance, accessibility, and cross-device compatibility, providing a professional online presence.</p>
              </div>
              <div className='flex gap-5 justify-center pt-3 '>
                <button className='hover:bg-blue-500 bg-gray-600 hover:scale-105 duration-300 cursor-pointer  font-cold rounded-3xl text-white text-base px-4 py-2'>Source Code</button>
                <button className='hover:bg-blue-500 hover:scale-105 duration-300 cursor-pointer bg-gray-600 font-cold rounded-3xl text-white text-base px-4 py-2'>Live Demo</button>
              </div>
             </div>
             {/* 6th */}
              <div className='flex flex-col justify-between w-100 h-150 p-5 bg-white  border-white border-1 rounded-xl'>
              <div>
                 <img src={portfolioImg} alt="" className='w-full h-30% rounded-xl border-white border-1 hover:scale-110 transition-all duration-300'  />
                 <h1 className='text-center text-xl pt-5 pb-2 font-bold'>Description</h1>
                  <p className=' tracking-wider h-61 overflow-y-auto '>A modern portfolio website created with React and Tailwind CSS, highlighting my skills, projects, and professional experience. Features a responsive design and interactive UI elements for an engaging user experience. Showcases projects with detailed descriptions, links, and visual previews. Includes smooth navigation, animations, and visually appealing layouts to make the content easy to explore. Optimized for performance, accessibility, and cross-device compatibility, providing a professional online presence.</p>
              </div>
              <div className='flex gap-5 justify-center pt-3 '>
                <button className='hover:bg-blue-500 bg-gray-600 hover:scale-105 duration-300 cursor-pointer  font-cold rounded-3xl text-white text-base px-4 py-2'>Source Code</button>
                <button className='hover:bg-blue-500 hover:scale-105 duration-300 cursor-pointer bg-gray-600 font-cold rounded-3xl text-white text-base px-4 py-2'>Live Demo</button>
              </div>
             </div>

        </div>
     </div>
    </>
  )
}

export default Project