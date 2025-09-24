import React from 'react'
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

function Skills() {
  return (
   <>
     <div id="skills" className='pt-20 flex flex-col items-center pb-50  flex-wrap'>
       <p className='text-gray-300 text-xl text-center'>Explore my</p>
        <h1 className='pt-2 text-white text-6xl font-bold text-center pb-25'>Skills</h1>
         <div className='flex gap-10 '>
           <div className='z-0 flex flex-col gap-3 bg-white border-1 border-white p-10 rounded-[30px] w-60 hover:scale-110 transition-all duration-300'> 
              <div className='text-center font-bold text-[19px] pb-5 '>Frontend</div> 
               <div className='flex  gap-5'><span className='text-3xl'><IoLogoHtml5/></span> <span className='text-base'>HTML</span></div>
               <div className='flex gap-5'><span className='text-3xl'><IoLogoCss3/></span><span  className='text-base'>CSS</span></div>
               <div className='flex gap-5'><span className='text-3xl'><IoLogoJavascript/></span><span  className='text-base'>JavaScript</span></div>
               <div className='flex gap-5'><span className='text-3xl'><FaReact/></span><span  className='text-base'>React.js</span></div>
               <div className='flex gap-5'><span className='text-3xl'><SiRedux/></span><span  className='text-base'>Redux</span></div> 
            </div>
            <div className='flex flex-col gap-3 bg-white  border-1 w-60 border-white p-10 rounded-[30px] hover:scale-110 transition-all duration-300 '> 
              <div className='text-center font-bold text-[19px] pb-5'>Backend</div> 
               <div className='flex  gap-5'><span className='text-3xl'><FaNodeJs/></span> <span className='text-base'>Node.js</span></div>
              
            </div>
             <div className='flex flex-col gap-3 bg-white border-1 w-60 border-white p-10 rounded-[30px]  hover:scale-110 transition-all duration-300 cursor-pointer'> 
              <div className='text-center font-bold text-[19px] pb-5'>FrameWorks</div> 
               <div className='flex  gap-5'><span className='text-3xl'><SiExpress/></span> <span className='text-base'>Express.js</span></div>
               <div className='flex gap-5'><span className='text-3xl'><RiTailwindCssFill/></span><span  className='text-base'>TailwindCSS</span></div>
            </div>
             <div className='flex flex-col gap-3 bg-white  border-1 w-60 border-white p-10 rounded-[30px]  hover:scale-110 transition-all duration-300 cursor-pointer'> 
              <div className='text-center font-bold text-[19px] pb-5 w-40 '>Database</div> 
               <div className='flex  gap-5'><span className='text-3xl'><SiMysql/></span> <span className='text-base'>MySQL</span></div>
               <div className='flex gap-5'><span className='text-3xl'><SiMongodb/></span><span  className='text-base'>MongoDB</span></div>
            </div>
             <div className='flex flex-col gap-3 bg-white border-1 border-white p-10 rounded-[30px] w-60  hover:scale-110 transition-all duration-300 cursor-pointer'> 
              <div className='text-center font-bold text-[19px] pb-5 '>Hosting Platform</div> 
               <div className='flex  gap-5'><span className='text-3xl'><span/><FaGithub/></span> <span className='text-base'>Git Hub</span></div>
            </div>
         </div>
     </div>
   </>
  )
}

export default Skills