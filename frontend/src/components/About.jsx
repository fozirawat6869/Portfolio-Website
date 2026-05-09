import React from 'react'
import education from '../icons/education.png'
import experience from '../icons/experience.png'
import certificate from '../icons/certificate.png'

function About() {
  return (
    <>
     <div id="about" className='  text-white mt-5 pt-5'>
        <p className='text-gray-300 text-xl text-center'>Get to know more</p>
        <h1 className='pt-2 text-white text-3xl lg:text-6xl font-bold text-center'>About Me</h1>

 


<div className='mt-8 lg:mt-18 flex flex-wrap justify-center gap-6 px-10 lg:px-10 '>

  {/* Education Card */}
  <div className='flex flex-col items-center justify-center bg-white text-black rounded-xl p-6 sm:p-8 w-full  md:w-[380px]   lg:w-[400px] h-[250px] hover:scale-105 transition-all duration-300'>
    <img src={education} alt="" className='w-10 sm:w-12 mb-2' />
    <h1 className='text-xl sm:text-2xl font-bold mt-2 text-center'>Education</h1>
    <h1 className='text-sm sm:text-lg mt-2 text-center'>BCA (Bachelors of Computer Science)</h1>
    <h1 className='text-sm sm:text-lg text-center'>From Uttrakhand Open University</h1>
  </div>

  {/* Experience Card */}
  <div className='flex flex-col items-center justify-center bg-white text-black rounded-xl p-6 sm:p-8 w-full   md:w-[380px]  lg:w-[400px] h-[250px] hover:scale-105 transition-all duration-300'>
    <img src={experience} alt="" className='w-10 sm:w-12 mb-2' />
    <h1 className='text-xl sm:text-2xl font-bold mt-2 text-center'>Experience</h1>
    <h1 className='text-sm sm:text-lg mt-2 text-center'>1+ years</h1>
    <h1 className='text-sm sm:text-lg text-center'>Full Stack Web Development</h1>
  </div>

  {/* Certificate Card */}
  <div className='flex flex-col justify-center items-center bg-white text-black rounded-xl p-6 sm:p-8 w-full  md:w-[380px]  lg:w-[400px] h-[250px] hover:scale-105 transition-all duration-300'>
    <img src={certificate} alt="" className='w-10 sm:w-12 mb-2' />
    <h1 className='text-xl sm:text-2xl font-bold text-center'>Certificate</h1>
    <h1 className='text-sm sm:text-lg font-medium mt-2 text-center'>Full-Stack Web Development</h1>
    <h1 className='text-sm sm:text-lg mt-1 text-center'>from (Physics Wala)</h1>
    <h1 className='text-xs sm:text-sm mt-1 text-center'>24/9/2024 - 4/5/2025</h1>
  </div>

</div>




        
        <div className=' px-8 lg:px-55 sm:px-10 mt-15 text-[18px] tracking-widest  leading-8 pb-10 '>
          <p>Hi! I’m <span className='text-2xl font-bold'>Mayur Rawat</span>, a passionate Full-Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). I have a strong foundation in both front-end and back-end development, enabling me to create modern, responsive, and highly interactive web applications from scratch. I enjoy turning ideas into functional and visually appealing web solutions, whether it’s building portfolio websites, e-commerce platforms, dynamic dashboards, or custom web applications tailored to client needs.</p>
          <p className='mt-4'>I am skilled in designing clean, maintainable, and scalable code and am constantly learning new technologies to stay up-to-date with the latest trends in web development. I am also familiar with version control systems like Git, deployment strategies, and working in collaborative environments. My approach focuses on solving real-world problems efficiently while providing seamless user experiences.</p>
          <p className='mt-4'>I am motivated by challenges, passionate about coding, and love collaborating with teams or clients to bring innovative ideas to life. Whether it’s building a project from scratch or improving an existing system, I am dedicated to delivering high-quality web solutions that meet requirements and exceed expectations.</p>
        </div>
     </div>

     <h1 className='text-3xl font-bold mt-6 text-center text-white'>Hosting & Deployment Experience</h1>

<div className=' px-8 lg:px-55 sm:px-10 mt-15 text-[18px] tracking-widest  leading-8 pb-10 text-white '>
   <p className=' '>
  I have also deployed and managed full-stack projects online using cloud platforms and free hosting services. For example, I hosted an e-commerce web application with the frontend deployed on <span className='font-bold'>Vercel</span>, the backend hosted on <span className='font-bold'>Render</span>, and the database managed using <span className='font-bold'>Aiven</span>. This experience helped me understand deployment, environment variables, API integration, database hosting, and real-world production workflows.
</p>

 <p className='mt-4'><span className='font-bold  text-xl'>Live Demo : </span>  <a href="https://ecommerce-website-two-rose.vercel.app" target="_blank" rel="noopener noreferrer" className='font-bold  text-yellow-300 ml-1'>
    Click me to see the live demo of the e-commerce web application.
  </a></p>

  <div className='mt-5'>
    <h2 className='text-xl font-bold'>👤 User Features</h2>

    <ul className='list-disc ml-8 mt-2'>
      <li>User Signup & Login</li>
      <li>Authentication System</li>
      <li>View Products</li>
      <li>Filter Products (Price, Category, Color, etc.)</li>
      <li>Add to Cart</li>
      <li>View Profile</li>
      <li>Responsive Design (Mobile, Tablet, Desktop)</li>
      <li>Pagination for Better Performance</li>
      <li>Lazy Loading & Caching</li>
    </ul>
  </div>

  <div className='mt-5'>
    <h2 className='text-xl font-bold'>🛠️ Admin Features</h2>

    <ul className='list-disc ml-8 mt-2'>
      <li>Admin Login Panel</li>
      <li>View All Users</li>
      <li>View All Products</li>
      <li>Add New Products</li>
      <li>Delete Products</li>
      <li>Manage Platform Data</li>
    </ul>
  </div>

  <div className='mt-5'>
    <h2 className='text-xl font-bold'>⚡ Performance Features</h2>

    <ul className='list-disc ml-8 mt-2'>
      <li>Lazy Loading</li>
      <li>Caching</li>
      <li>Optimized API Calls</li>
      <li>Clean Project Structure</li>
    </ul>
  </div>
</div>

     {/* <h1 className=' text-3xl font-bold mt-8 text-center text-gray-300'>Hosting & Deployment Experience</h1>

     <p className='  px-8 lg:px-55 sm:px-10 mt-12 text-[18px] tracking-widest  leading-8 pb-10 text-white'>
  I have also deployed and managed full-stack projects online using cloud platforms and free hosting services. For example, I hosted an e-commerce web application with the frontend deployed on <span className='font-bold'>Vercel</span>, the backend hosted on <span className='font-bold'>Render</span>, and the database managed using <span className='font-bold'>Aiven</span>. This experience helped me understand deployment, environment variables, API integration, database hosting, and real-world production workflows.
</p>
     */}
    </>
  )
}

export default About

