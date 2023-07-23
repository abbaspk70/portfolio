'use client'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from 'next/image';

export default function TestSlide() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      pagination={{ clickable: true }}
      className='h-[280px] min-h-[480] testParent'>
      <SwiperSlide className=''>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 max-w-[300px]'>
          <div>
            <div
            ><Image src={`/images/1.png`} width={500} height={300} alt='' />
            </div>
          </div>
          <div>
            <div
            ><Image src={`/images/1.png`} width={500} height={300} alt='' />
            </div>
          </div>
          <div>
            <div
            ><Image src={`/images/1.png`} width={500} height={300} alt='' />
            </div>
          </div>
          <div>
            <div
            ><Image src={`/images/1.png`} width={500} height={300} alt='' />
            </div>
          </div>
        </div>
      </SwiperSlide>


      <SwiperSlide className=''>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 max-w-[300px]'>
          <div>
            <div
            ><Image src={`/images/1.png`} width={500} height={300} alt='' />
            </div>
          </div>
          <div>
            <div
            ><Image src={`/images/1.png`} width={500} height={300} alt='' />
            </div>
          </div>
          <div>
            <div
            ><Image src={`/images/1.png`} width={500} height={300} alt='' />
            </div>
          </div>
          <div>
            <div
            ><Image src={`/images/1.png`} width={500} height={300} alt='' />
            </div>
          </div>
        </div>
      </SwiperSlide>
      
      ...
    </Swiper>
  )
}
