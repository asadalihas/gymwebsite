'use client'
import Image from "next/image"
import { MdClose } from "react-icons/md"
import { FaCheck } from "react-icons/fa"
import CustomButton from "./CustomButton"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
const MemberShipData =[
    {
        title:'Standard',
        price:'30',
        banefit:[
            {
                icon:FaCheck,
                text:'Include Membership'
            },
            {
                icon:FaCheck,
                text:'Access to all gym facilities'
            },
            {
                icon:MdClose,
                text:'Diet plan included'
            },
            {
                icon:FaCheck,
                text:'Health and fitness tips'
            },
            {
                icon:MdClose,
                text:'Monday-Friday gym access'
            },
            {
                icon:FaCheck,
                text:'Full access to everything'
            },
            {
                icon:MdClose,
                text:'No additional amenities'
            },
        ],   
    },
    {
        title:'Ultimate',
        price:'45',
        banefit:[
            {
                icon:FaCheck,
                text:'Include Membership'
            },
            {
                icon:FaCheck,
                text:'Access to all gym facilities'
            },
            {
                icon:FaCheck,
                text:'Diet plan included'
            },
            {
                icon:FaCheck,
                text:'Health and fitness tips'
            },
            {
                icon:FaCheck,
                text:'Monday-Friday gym access'
            },
            {
                icon:FaCheck,
                text:'Full access to everything'
            },
            {
                icon:MdClose,
                text:'No additional amenities'
            },
        ],   
    },
    {
        title:'Professional',
        price:'60',
        banefit:[
            {
                icon:FaCheck,
                text:'Include Membership'
            },
            {
                icon:FaCheck,
                text:'Access to all gym facilities'
            },
            {
                icon:FaCheck,
                text:'Diet plan included'
            },
            {
                icon:FaCheck,
                text:'Health and fitness tips'
            },
            {
                icon:FaCheck,
                text:'Monday-Friday gym access'
            },
            {
                icon:FaCheck,
                text:'Full access to everything'
            },
            {
                icon:FaCheck,
                text:'No additional amenities'
            },
        ],   
    },
]

const MembershipSlider = () => {
  return (
    <Swiper
    slidesPerView={1}
    modules={[Pagination]}
    pagination={{
        clickable:true,
    }}
    breakpoints={{
        768:{
            slidesPerView:2,
            spaceBetween:30
        },
        1024:{
            slidesPerView:3,
            spaceBetween:30
        },
    }}
    className=" min-h-[580px]"
    >
        {MemberShipData.map((item,index)=>{
            return<SwiperSlide className="" key={index}>
                <div className=" border border-red-600 hover:bg-primary-300/80 transition-all duration-300 
                 w-[100%] xl:max-w-none mx-auto:">
                    <div className="py-5 px-[60px] border-b border-red-600">
                        <h4 className="h4">{item.title}</h4>
                    </div>
                    <div className=" py-[30px] px-[60px]">
                        <ul className=" flex flex-col gap-5 mb-7">{item.banefit.map((item, index)=>{
                            return<li className="flex items-center " key={index}>
                                <item.icon className=" text-red-600 text-lg mr-2"/>
                                {item.text}</li>
                        })}
                        </ul>
                        <p className="text-red-600 mb-4 flex gap-1 items-center">
                            <sup className=" text-3xl" >$</sup>
                            <strong className=" text-4xl" >{item.price}</strong>
                            <em className=" self-end text-xl" >/Month</em>
                        </p>
                        <CustomButton containerStyles="w-[176px] h-[52px]" text="Buy Now" /> 
                    </div>
                </div>
            </SwiperSlide>
        })}
    </Swiper>
  )
}

export default MembershipSlider