'use client';

import { useMediaQuery } from 'react-responsive';
import {Link as ScrollLink} from 'react-scroll'

const Links = [
    {name: 'home', target:'home', offset:'-100'},
    {name: 'about', target:'about', offset:'-80'},
    {name: 'classes', target:'classes', offset:'-80'},
    {name: 'prices', target:'prices', offset:'-40'},
    {name: 'testimonials', target:'testimonials', offset:'0'},
    {name: 'contact', target:'contact', offset:'0'},
]


const MobileNav = ({containerStyle}:{containerStyle:string}) => {
  const isMobile = useMediaQuery({
    query:'(max-width: 640px)',
  })
  return (
    <nav className={`${containerStyle}`}>
         {Links.map((link, index)=>{
            return <ScrollLink 
            offset={-100}
            to={link.target} 
            smooth
            spy
            activeClass={`${!isMobile && 'active'}`}
            className=' gap-x-[30px] cursor-pointer hover:text-blue-800 transition-all flex flex-col'
            key={index}
            >{link.name}</ScrollLink>
        })}
    </nav>
  )
}

export default MobileNav