import React from 'react'
import education from '../icons/education.png'
import experience from '../icons/experience.png'
import certificate from '../icons/certificate.png'

function About() {
  return (
    <>
     <div id="about" className='  text-white mt-25 '>
        <p className='text-gray-300 text-xl text-center'>Get to know more</p>
        <h1 className='pt-2 text-white text-6xl font-bold text-center'>About Me</h1>

        <div className='mt-20 flex gap-10 justify-center items-center '>

            <div className='w-[400px]  h-[230px] bg-white text-black flex flex-col  items-center rounded-xl p-8'>
              <img src={education} alt="" className='block w-[40px] ' />
              <h1 className='text-2xl font-bold mt-2 '>Education</h1>
              <h1 className='text-lg mt-2'>BCA (Bachelors of Computer Science)</h1>
              <h1 className='text-lg '>From Uttrakhand Open University</h1>
            </div>

            <div className='w-[400px] h-[230px] bg-white text-black flex flex-col  items-center rounded-xl p-8'>
              <img src={experience} alt="" className='block w-[40px]' />
              <h1 className='text-2xl font-bold mt-2'>Experience</h1>
              <h1 className='text-lg mt-2'>1+ years</h1>
              <h1 className='text-lg '>Full Stack Web Development</h1>
            </div>

             <div className='w-[400px] h-[230px] bg-white text-black flex flex-col  items-center rounded-xl p-8'>
              <img src={certificate} alt="" className='w-[40px] mb-2' />
              <h1 className='text-2xl font-bold '>Certificate</h1>
              <h1 className='text-lg font-medium mt-2'> Full-Stack Web Development </h1>
              <h1 className='text-lg mt-1'>from (Physics Wala) </h1>
              <h1 className='text-sm mb-10 mt-1'> 24/9/2024 - 4/5/2025 </h1>
            </div>
           

        </div>
        
        <div className='px-55 mt-15 text-[18px] tracking-widest  leading-8 '>
          <p>Hi! I’m <span className='text-2xl'>Mayur Rawat</span>, a passionate Full-Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). I have a strong foundation in both front-end and back-end development, enabling me to create modern, responsive, and highly interactive web applications from scratch. I enjoy turning ideas into functional and visually appealing web solutions, whether it’s building portfolio websites, e-commerce platforms, dynamic dashboards, or custom web applications tailored to client needs.</p>
          <p className='mt-4'>I am skilled in designing clean, maintainable, and scalable code and am constantly learning new technologies to stay up-to-date with the latest trends in web development. I am also familiar with version control systems like Git, deployment strategies, and working in collaborative environments. My approach focuses on solving real-world problems efficiently while providing seamless user experiences.</p>
          <p className='mt-4'>I am motivated by challenges, passionate about coding, and love collaborating with teams or clients to bring innovative ideas to life. Whether it’s building a project from scratch or improving an existing system, I am dedicated to delivering high-quality web solutions that meet requirements and exceed expectations.</p>
        </div>
     </div>
    
    </>
  )
}

export default About