'use client'
// import icons
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
 } from "react-icons/hi2";

 // next router
 import {usePathname} from "next/navigation";
 

 //Nav Data
 export const navData = [
    {name: 'home', path:'/', icon:<HiHome/>},
    {name: 'about', path:'/about', icon:<HiUser/>},
    {name: 'services', path:'/services', icon:<HiRectangleGroup/>},
    {name: 'work', path:'/work', icon:<HiViewColumns/>},
    {name: 'testimonials', path:'/testimonials', icon:<HiChatBubbleBottomCenterText/>},
    {name: 'contact', path:'/contact', icon:<HiEnvelope/>},
 ];

import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname();
    console.log(pathname);
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
        <div className="flex w-full items-center justify-between gap-y-10 bg-white/10 xl:flex-col px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 backdrop-blue-sm text-3xl xl:text-xl
        xl:rounded-full">
        {
            navData.map((link,index)=>{
               return <Link className={`${link.path === pathname && 'text-semantic'} relative flex items-center group hover:text-semantic tranition-all duration-300`} href={link.path} key={index}>
                <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                    <div className="bg-neutral relative flex items-center text-primary p-[6px] rounded-[3px]">
                        <div className="text-[12px] leading-none font-semibold capitalize">
                            {link.name}
                        </div>
                        {/* {triangle} */}
                        <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute
                         -right-2">

                        </div>
                    </div>
                </div>
                {/* {icon} */}
                <div>{link.icon}</div>
               </Link>
            })
        }
        </div>
        </nav>
  )
}
