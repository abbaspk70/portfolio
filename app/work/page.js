'use client'
import React from 'react'
import WorkSlider from '../components/WorkSlider'

export default function page() {
  return (
    <div className='w-full h-full'>
      <div className='h-full container mx-auto flex flex-col xl:flex-row justify-center items-center gap-y-3 xl:gap-x-10 px-6 xl:px-40'>
        <div className='heading&paragraph text-center xl:text-left xl:min-h-[300px] mt-10'>
          <div className='text-5xl mb-4'>My Work <span className='text-semantic'>.</span></div>
          <div>Commodo occaecat deserunt cupidatat laborum ullamco commodo ex reprehenderit aute ut deserunt tempor. Consectetur mollit non aliqua quis fugiat laborum qui nostrud cillum officia pariatur nisi. Fugiat anim anim culpa sint ullamco.</div>
        </div>
        <div className='w-full xl:max-w-[65%]'>
            <WorkSlider/>          
        </div>
      </div>
    </div>
  )
}
