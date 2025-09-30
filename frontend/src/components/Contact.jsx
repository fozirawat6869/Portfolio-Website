import React from 'react'
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <>
     <div id="contact" className='flex flex-col items-center pt-0 lg:pt-10 mb-25 '>
        <p className='text-gray-300 text-xl text-center'>Get in touch </p>
        <h1 className='pt-2 text-white text-4xl lg:text-6xl font-bold text-center'>Contact Me</h1>
          {/* Contact Info */}
        <div className='flex flex-col md:flex-row gap-10 mt-15 text-white text-xl items-center'>
          <a href="https://mail.google.com/mail/?view=cm&to=fozirawat6869@gmail.com" className='flex items-center gap-3 hover:text-blue-500 font-bold rounded-xl transition-colors px-3 py-2 hover:bg-white '>
            <FaEnvelope /> Mail me
          </a>
          <a href='tel:+918755306869' className='flex items-center gap-2 font-bold rounded-xl hover:bg-white px-3 py-2  hover:text-blue-500 transition-colors'>
            <FaPhone /> +91 8755306869
          </a>
          <a href='https://www.linkedin.com/in/mayur-rawat-967831361' target='_blank' rel='noopener noreferrer' className='flex items-center gap-2  font-bold rounded-xl hover:bg-white px-3 py-2  hover:text-blue-500 transition-colors'>
            <FaLinkedin /> LinkedIn
          </a>
          <a href='https://github.com/fozirawat6869' target='_blank' rel='noopener noreferrer' className='flex items-center gap-2  font-bold rounded-xl hover:bg-white px-3 py-2  hover:text-blue-500 transition-colors'>
            <FaGithub /> GitHub
          </a>
        </div>

        {/* Optional Contact Form */}
        <form action="https://formspree.io/f/yourformid" method="POST" className='flex flex-col gap-4 mt-20 w-60 lg:w-full max-w-md'>
        <h1 className='text-center text-3xl font-bold text-white'>Form</h1>
          <input type="text" name="name" placeholder="Your Name" className='p-3 rounded-lg bg-gray-800 text-white' required />
          <input type="email" name="email" placeholder="Your Email" className='p-3 rounded-lg bg-gray-800 text-white' required />
          <textarea name="message" placeholder="Your Message" className='p-3 rounded-lg bg-gray-800 text-white' rows="5" required></textarea>
          <button type="submit" className='bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-colors'>Send Message</button>
        </form>
     </div>
    </>
  )
}

export default Contact