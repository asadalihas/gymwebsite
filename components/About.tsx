'use client'
import { FaUser } from "react-icons/fa"
import { IoIosPricetag } from "react-icons/io"
import { FaDumbbell } from "react-icons/fa"

import {motion} from 'framer-motion'
import {fadeIn} from '@/lib/variants'

import Achievements from "./Achievements"



function About() {
  const featured = [
    {
      icon:<FaUser />,
      title: 'award winning trainers',
      subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum expedita labore nisi hjhjhjhj sdagfdagsdhfasdg'
    },
    {
      icon:<IoIosPricetag />,
      title: 'Excelent Pricing',
      subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum expedita labore nisi hjhjhjhj sdagfdagsdhfasdg'
    },
    {
      icon:<FaDumbbell />,
      title: 'Modern Equpment',
      subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum expedita labore nisi hjhjhjhj sdagfdagsdhfasdg'
    },
  ]

  return (
    
    <section className=' pt-8 pb-14 lg:pt-16 lg:pb-28' id='about'>
      <div className="container mx-auto">
        <div className=" flex flex-col items-center gap-2 mb-8">
          <motion.h2
           variants={fadeIn('up',0.4,)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false, amount:0.2}}
           className="h2  text-center ">About us</motion.h2>
          <motion.p
          variants={fadeIn('up',0.4,)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.2}}
          className="  mx-auto text-center">
             Reiciendis sed saepe quibusdam, consectetur velit obcaecati animi! Cupiditate, commodi aperiam et quaerat recusandae aut. Dicta, magni.
          </motion.p>
        </div>
        <motion.div
        variants={fadeIn('up',0.8,)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.2}}
        className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16">
          {featured.map((feature, index)=>{
            return(
              <div  className=" flex flex-col justify-center items-center gap-4 border p-10" key={index}>
                <div className=" text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className=" flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-red-700">{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* {achievment} */}
        <motion.div
        variants={fadeIn('up',1,)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.2}}
        >
        <Achievements />
        </motion.div>
      </div>
    </section>
  )
}

export default About