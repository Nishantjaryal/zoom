'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'  // Shadcn frontend ui library


// interfaces are just extendable types
interface Props {    
    className:string,
    img:string,
    title:string,
    description:string,
    handleClick: ()=>void
}

const HomeCard = ({className,img,title,description,handleClick}:Props) => {
    // const HomeCard = (params:Props) => {    // can be done like this 

  return (
    <div className= {cn('px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer',className)}
      onClick={handleClick}
      >

        <div className='flex-center glassmorphism size-12 rounded-[10px]'>
            <Image src={img}
            // <Image src={params.img}  // then destructuring would be happned like this
            alt="add-meeting-icon"
            width={27}
            height={27}
            />
        </div>

        <div className='flex flex-col gap-1'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className='font-thin text-sm'>{description}</p>
        </div>

      </div>
  )
}

export default HomeCard
