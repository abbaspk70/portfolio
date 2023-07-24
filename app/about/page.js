'use client'
import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma, FaShopify } from 'react-icons/fa'
import { SiNextdotjs, SiAdobephotoshop } from 'react-icons/si';
export const aboutData = [
  {
    title: 'skills', descrption: [
      { desc_title: 'web development', desc: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaReact />, <SiNextdotjs />, <FaWordpress />, <FaShopify />] },
      { desc_title: 'UI/UX Design', desc: [<FaFigma />, <SiAdobephotoshop />] },
    ]
  },
  {
    title: 'Experience', descrption: [
      { desc_title: 'UX/UI Designer - XYZ Company', desc: ['2017-2023'] },
      { desc_title: 'Web Developer - ABC Agency', desc: ['2012-2017'] },
      { desc_title: 'Intern - DEF Corporation', desc: ['2010-2012'] },
    ]
  },
  {
    title: 'Credentials', descrption: [
      { desc_title: 'Web Development - City Univeristy Peshawar', desc: ['2010'] },
      { desc_title: 'Computer Science Diploma - AA Technical Institute', desc: ['2008'] },
      { desc_title: 'Certified Graphic Designer - Inter Institute Stockholm', desc: ['2007'] },

    ]
  },
];

import { useState } from "react";

export default function About() {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-screen bg-primary py-32 text-center xl:text-left">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 xl:px-10">
        {/* col1 */}
        <div className="flex-1 flex flex-col justify-center xl:pl-50">
          <h1 className="text-3xl xl:text-5xl my-3">
            Captivating <span className="text-semantic">stories </span>birth magnificent designs.
          </h1>
          <p className="mx-auto xl:max-0 mb-4 xl:mb-12">10 years ago, I began freelancing as a developer. Since then, I've done remote work for agencies, consulted for startups, and all collaborated on digital products for business and consumer use.</p>
          <div className="hidden md:flex gap-x-10 items-center justify-center xl:justify-start mb-4">
            <div className="max-w-[100px]">
              <div className="text-semantic text-3xl font-bold">10+</div>
              <div>Years of Experience</div>
            </div>
            <div className="max-w-[100px]">
              <div className="text-semantic text-3xl font-bold">150+</div>
              <div>Satified Clients</div>
            </div>
            <div className="max-w-[100px]">
              <div className="text-semantic text-3xl font-bold">100+</div>
              <div>Finsihed Projects</div>
            </div>
          </div>
        </div>
        {/* col2 */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[50%]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {/* about data  title */}
            {aboutData.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className={`${itemIndex === index && 'text-semantic after:w-[100%] after:bg-semantic/90 after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} onClick={() => setIndex(itemIndex)}>
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className="about-description py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start overflow-auto hover:overflow-scroll h-[100%]">
            {/* about data description */}
            {aboutData[index].descrption.map((item, itemIndex) => {
              return (<div className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center capitalize text-md text-slate-300" key={itemIndex}>
                <div className="">{item.desc_title}</div>
                <div className="md:flex">-</div>
                <div className="flex gap-x-4">
                  {item.desc.map((desc, itemIndex) => {
                    return (<div key={itemIndex}>
                      <div>{desc}</div>
                    </div>)
                  })}
                </div>

              </div>

              )
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
