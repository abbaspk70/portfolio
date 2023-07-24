'use client'

import {BsArrowRight} from 'react-icons/bs'

import React from 'react'

export default function page() {
  return (
    <div className='w-full h-screen px-10'>
      <div className='container h-full flex flex-col justify-center items-center mx-auto gap-y-8 py-32'>
        <div className='text-3xl'>Lets <span className='text-semantic'>Connect.</span></div>
        <div className=' w-full max-w-[700px]'>
          <form className='flex flex-col gap-y-5 mx-auto' action="/send-data-here" method="post">
            <div className='flex gap-x-6'>
              <input className='w-full bg-secondary/5 shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:border-semantic border-secondary' type="text" id="first" name="name" placeholder='Name' />
              <input className='w-full bg-secondary/5 shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:border-semantic border-secondary' type="email" id="email" name="email" placeholder='Email' />
            </div>
            <input className='bg-secondary/5 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-semantic border-secondary' type="text" id="subject" name="subject" placeholder='Subject' />
            <textarea className='textarea bg-secondary/5 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-semantic border-secondary' id="message" name="message" rows={5} placeholder='Message'></textarea>
            <button className='flex justify-center items-center max-w-[170px] overflow-hidden hover:border-semantic group bg-secondary/5 shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 border-secondary' type="submit">
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Lets' Talk</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
            </button>
          </form></div>
      </div>
    </div>
  )
}
