'use client'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';
import {BsArrowRight} from 'react-icons/bs'
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const workSlider = 
    {
    slides:[
        {images:[{path: '/images/1.png'},{path: '/images/1.png'},{path: '/images/1.png'},{path: '/images/1.png'},]},
        {images:[{path: '/images/1.png'},{path: '/images/1.png'},{path: '/images/1.png'},{path: '/images/1.png'},]},
    ],  
};

export default function WorkSlider() {
  return (
    <Swiper 
    spaceBetween = {10}
    pagination = {{
        clickable: true
    }}
    modules={[Pagination, Navigation]}
    className='h-[280px] sm:h-[480px]'
    >
        {workSlider.slides.map((slide, index) => {
            return (
                <SwiperSlide key={index} className=''>
                    <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                        {slide.images.map((image, index)=>{
                            return (
                                <div key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group' >
                                    <div className='flex items-center justify-center relative overflow-hidden'>
                                        {/* images */}
                                        <Image className='' src={image.path} width={500} height={300} alt=''/>
                                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                                        group-hover:opacity-80 transition-all duration-700'></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </SwiperSlide>
            )
        })
        }
        </Swiper>
  )
}
