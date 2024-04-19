'use client'
import MobileNav from "./MobileNav"
import Nav from "./Nav"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { MdMenu } from "react-icons/md"


function Header() {
  const [HeaderActive, SetHeaderActive]= useState(false);
  const [openNav, setOpenNav]= useState(false)

  useEffect(()=>{
    //detect scroll
    const handleScroll=()=>{
      SetHeaderActive(window.scrollY>50)
    };
    //add scroll event
    window.addEventListener('scroll',handleScroll)
    //clearscroll event
    return()=>{
      window.removeEventListener('scroll',handleScroll)
    };
  },[])

  return (
    <header className={`${HeaderActive ? 'h-[100px]':'h-[124px]'}
    fixed max-w-[1920] top-0 left-0 right-0 w-full bg-primary-200 h-[100px] transition-all z-50`}>
      <div className='container mx-auto h-full flex items-center justify-between'>
        <Link href=''>
          <Image src={'/assets/img/logo.png'} width={117} height={56} alt=""/>
        </Link>
        {/* {moble hidden or lrge device} */}
        <MobileNav containerStyle=
        {`${HeaderActive? 'top-[90px]':'top-[124px]'}
        ${openNav 
          ? 'max-h-max pt-8 pb-10 border-t border-white/10'
          : 'max-h-8 pt-8 pb-0 overflow-hidden border-white/8'}
        
        flex flex-col
         text-center  fixed bg-primary-200 rounded-b-lg w-full left-0 transition-all
        top-[124px]  text-base uppercase font-medium  text-white xl:hidden`} />
        <Nav containerStyle="flex text-white gap-4 hidden xl:flex  text-base uppercase font-medium" />
        {/* {hide/open menu button} */}
        <div className=" text-white flex items-center gap-4">
          <button className="hover:text-red-600 transition-all text-base uppercase font-medium">login</button>
          <button className="hover:text-red-600 transition-all text-base uppercase font-medium">register</button>
        </div>
          <button onClick={()=>setOpenNav(!openNav)} className=" text-white xl:hidden">
            <MdMenu className=" text-4xl "/>
          </button> 
      </div>
    </header>
  );
};

export default Header