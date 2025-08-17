import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_866c0hb', 'template_wr3vcfb', e.target, 'cO6j8Sp77Q_lEdMSX');
        form.current.reset();
    }
    
  return (
    <div className='border-b border-neutral-800 pb-24 pt-7' id='contact'>
      <h1 className="mt-20 text-center text-4xl">Contact</h1>
      <p className='text-gray-400 text-center mt-4'>I'd love to hear from you-reach out for any opportunities or questions!</p>
      <p className='text-gray-400 text-center mb-20'>Email: harshi.r.jain2005@gmail.com</p>
      
      <div className="flex justify-center items-center ">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 max-w-md w-full">
            <h3 className='text-xl text-center'>Connect with me</h3>

            <form ref={form} onSubmit={sendEmail} className='mt-5 flex flex-col space-y-4'>
                <input type="email" name="user_email" placeholder='Your Email' required  
                className='w-full p-3 rounded-md text-white border-2 border-neutral-800'
                />
                <input type="text" name="user_name" placeholder='Your Name' required  
                className='w-full p-3 rounded-md text-white border-2 border-neutral-800'
                />
                <input type="text" name="subject" placeholder='Subject' required  
                className='w-full p-3 rounded-md text-white border-2 border-neutral-800'
                />
                <textarea name="message" placeholder="Message" rows={4} className='w-full p-3 rounded-md text-white border-2 border-neutral-800' ></textarea>

                <button type="submit" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 w-full p-3 rounded-md text-xl ">Send</button>
            </form>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
