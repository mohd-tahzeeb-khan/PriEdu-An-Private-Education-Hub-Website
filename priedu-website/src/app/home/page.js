import React from 'react'
import Link from 'next/link'
import {font, myfont} from '../fonts/font'
import Image from 'next/image'
import First from '../../../public/images/third.png'
import Second from '../../../public/images/5.png'
import Third from '../../../public/images/seventh.png'
const home = () => {
  return (
    <>
    <div className='homepage h-[130vh] w-full bg-[#fff] relative'>
      <div className='large-text h-[70vh] bg-[#FFE3E3] flex flex-col gap-1 pt-16 items-center'>
        <h1 className={`${myfont.className} text-6xl`}>The Best Way to learn or <br /> Practice a language</h1>
        <p className={`${myfont.className} capitalize text-md`}>educating, inspiring & Transforming young youth. a free private education hub</p>
        <div className='flex justify-evenly gap-2 px-5 w-1/3 items-center py-10'>
          <Link className='border-2 rounded-full border-black bg-black text-white hover:bg-white hover:text-black hover:scale-105 hover:duration-200 p-3 px-10' href="">Contactus</Link>
          <Link className='border-2 rounded-full border-black bg-black text-white hover:bg-white hover:text-black hover:scale-105 hover:duration-200 p-3 px-10' href=""> Apply Now</Link>
        </div>
      </div>
        <div className='main-absolute-div absolute top-[40%] left-1/2 transform -translate-x-1/2 flex gap-10 '>
          <div  className='h-80 w-48 rounded-full bg-violet-500 overflow-hidden'>
            <Image src={First} width={350} height={450} alt='img' className='object-contain h-[380px]' />
          </div>
          <div  className='h-80 w-48 rounded-full bg-green-400 overflow-hidden'>
            <Image src={Second} width={350} height={450} alt='img' className='object-fill h-[380px] w-auto' />
          </div>
          <div  className='h-80 w-48 rounded-full bg-yellow-300 overflow-hidden'>
            <Image src={Third} width={350} height={450} alt='img' className='object-contain h-[380px]' />
          </div>
        </div>
    </div>
    </>
  )
}

export default home