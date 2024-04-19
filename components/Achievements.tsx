'use client'

import CountUp from 'react-countup';

import { FaBriefcase, FaClock , FaTrophy } from "react-icons/fa"
import { ImUser } from "react-icons/im"

import {motion , useInView} from 'framer-motion'
import { useRef } from "react"

const stats = [
    {
        number:19,
        icon: FaBriefcase,
        text:'training course'
    },
    {
        number:879,
        icon: FaClock,
        text:'Working hours'
    },
    {
        number:19,
        icon: ImUser,
        text:'Happy Customer'
    },
    {
        number:9,
        icon: FaTrophy,
        text:'International Awards'
    },
]


const statsContainerVariants = {
    hidden:{opacity:0},
    show:{
        opacity:1,
        transition:{
            staggerChildren:0.4,
            duration:0.5,
            ease:'linear',
        }
    }
}

const ststsItem = {
    hidden : {y:20, opacity:0},
    show:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            ease:[0.25,0.6,0.3,0.8],
        }
    }
}

const Achievements = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
  return (
    <div className='container mx-auto'>
        <motion.div
        variants={statsContainerVariants}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='grid grid-cols-2 md:grid-cols-4 gap-16'>
            {stats.map((item ,index)=>{
                return(
                    <motion.div
                    variants={ststsItem}
                     className='flex flex-col justify-center items-center' key={index}>
                        <div className="border border-red-700/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6">
                            <div ref={ref} className=" bordr border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full">
                                {isInView && (
                                   <CountUp start={0}  end={item.number} duration={3.5} /> 
                                )}
                                
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center text-center'>
                            <item.icon className='text-3xl mb-2' />
                            <h4 className='h4'>{item.text}</h4>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    </div>
  )
}

export default Achievements