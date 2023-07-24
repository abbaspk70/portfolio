import React from 'react'
import ServiceSlider from '../components/ServiceSlider'

export default function page() {
  return (
    <div className='w-full h-screen'>
      <div className='h-full container mx-auto flex flex-col xl:flex-row justify-center items-center gap-y-2 md:gap-y-6 xl:gap-x-10 px-6 xl:px-16 py-32'>
        <div className='heading&paragraph text-center xl:text-left xl:min-h-[300px]'>
          <div className='text-3xl sm:text-5xl mb-4'>My Servcies <span className='text-semantic'>.</span></div>
          <div>Commodo occaecat deserunt cupidatat laborum ullamco commodo ex reprehenderit aute ut deserunt tempor. Consectetur mollit non aliqua quis fugiat laborum qui nostrud cillum officia pariatur nisi. Fugiat anim anim culpa sint ullamco.</div>
        </div>
        <div className='w-full xl:max-w-[65%]'>
          <div>
            <ServiceSlider/>
          </div>
        </div>
      </div>
    </div>
  )
}
