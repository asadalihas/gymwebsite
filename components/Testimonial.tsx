'use client'
import Image from "next/image"
import { FaQuoteLeft } from "react-icons/fa"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import 'swiper/css'
import 'swiper/css/pagination'

const testemonialsData =[
  {
    img:'/assets/img/testimonial/lucy.jpg',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro molestiae unde sapiente, doloremque eum voluptatum',
    name: 'lucy Alam'
  },
  {
    img:'/assets/img/testimonial/michael.jpg',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro molestiae unde sapiente, doloremque eum voluptatum',
    name: 'michael jerry'
  },
  {
    img:'/assets/img/testimonial/maria.jpg',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro molestiae unde sapiente, doloremque eum voluptatum',
    name: 'Jasikka jerry'
  },
  {
    img:'/assets/img/testimonial/michael.jpg',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro molestiae unde sapiente, doloremque eum voluptatum',
    name: 'michael jerry'
  },
  {
    img:'/assets/img/testimonial/maria.jpg',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro molestiae unde sapiente, doloremque eum voluptatum',
    name: 'Maria  marry'
  },
]

import {motion} from 'framer-motion'
import {fadeIn} from  '@/lib/variants'

const Testimonial = () => {
  return (
    <section className=' py-12 xl:py-28'id='testimonials'>
      <div className="container mx-auto">
        <motion.h2
         variants={fadeIn('up', 0.9)}
         initial="hidden"
         whileInView={'show'}
         viewport={{once:false , amount :0.2}}
        className="h2 text-center">Our Testimonials</motion.h2>
        <motion.div
         variants={fadeIn('up', 0.2)}
         initial="hidden"
         whileInView={'show'}
         viewport={{once:false , amount :0.2}}
        >
          <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination,Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768:{
              slidesPerView:2,
              spaceBetween:30,
            },
            1024:{
              slidesPerView:3,
              spaceBetween:30,
            }
          }}
          >
            {testemonialsData.map((person, index)=>{
              return<SwiperSlide className=" h-full" key={index}>
                <div className="flex flex-col justify-center items-center gap-6 text-center h-full">
                  <Image 
                  src={person.img}
                  width={90}
                  height={90}
                  alt=""
                  className=" rounded-full border-2 border-red-600"
                  >
                  </Image>
                  <div className=" flex flex-col justify-center items-center">
                    <FaQuoteLeft className=" text-2xl text-gray-300" />
                    <p className=" max-w-[380px] mb-4">{person.message}</p>
                    <span className=" text-2xl text-red-600">
                      {person.name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonial