'use client'
import React from 'react'
import {RxCrop,RxPencil2,RxDesktop,RxRocket,RxArrowTopRight} from 'react-icons/rx'
import {Swiper, SwiperSlide} from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';


export const serviceData = [
    {icon: <RxCrop/>, title: 'Branding', description: 'Minim adipisicing veniam consectetur adipisicing.'},
    {icon: <RxPencil2/>, title: 'Design', description: 'Minim adipisicing veniam consectetur adipisicing.'},
    {icon: <RxDesktop/>, title: 'Development', description: 'Minim adipisicing veniam consectetur adipisicing.'},
    {icon: <RxRocket/>, title: 'SEO', description: 'Minim adipisicing veniam consectetur adipisicing.'},
    
];

export default function ServiceSlider() {
  return (
        <Swiper breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 15,
            },

        }}
        freeMode = {true}
        pagination = {{
            clickable: true
        }}
        modules={[FreeMode, Pagination]}
        className='h-[180px] sm:h-[340px]'
        >
            {serviceData.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className='bg-secondary/10 h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-secondary/50 transition-all duration-300'>
                            {/* icons */}
                            <div className='text-4xl text-semantic mb-4'>{item.icon}</div>
                             {/* title & desc */}
                             <div className='mb-8'>
                             <div className='text-lg font-bold mb-2'>{item.title}</div>
                             <p>{item.description}</p>
                             </div>
                              {/* desc */}
                              <div className='text-3xl'><RxArrowTopRight className='group-hover:rotate-45 group-hover:text-semantic transition-all duration-300'/></div>
                        </div>
                    </SwiperSlide>
                )
            })
            }
            </Swiper>
    
  )
}
