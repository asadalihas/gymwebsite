'use client'
import MembershipSlider from './MembershipSlider'
import {motion} from 'framer-motion'
import {fadeIn} from  '@/lib/variants'

const Membership = () => {
  return (
    <motion.section
    variants={fadeIn('up', 0.2)}
    initial="hidden"
    whileInView={'show'}
    viewport={{once:false , amount :0.2}}
    className='py-8 xl:py-0 lg:h-[95vh] bg-membership bg-cover bg-center relative
     before:w-full before:h-full before:bg-black/50 before:absolute before:top-0 before:z-10
    ' id='prices'>
      <div className='container mx-auto px-0 text-white h-full flex flex-col xl:pt-18 relative z-20'>
        <motion.h2
         variants={fadeIn('up', 0.4)}
         initial="hidden"
         whileInView={'show'}
         viewport={{once:false , amount :0.2}}
        className='h2'>membership</motion.h2>
        <div>
          <MembershipSlider />
        </div>
      </div>
    </motion.section>
  )
}

export default Membership