import React from 'react'
import Link from 'next/link'
import { Roboto_Mono } from 'next/font/google'
import Image from 'next/image'
import Facebook from '../../../public/svg/line_facebook-square.svg'
import Linkedin from '../../../public/svg/line_linkedin.svg'
import Instagram from '../../../public/svg/line_instagram.svg'
import Twitter from '../../../public/svg/line_twitter-square.svg'
import Youtube from '../../../public/svg/line_youtube.svg'
const font=Roboto_Mono({
    subsets:['latin'],
    weight:'600',
    style:'normal'
})
const footer = () => {
  return (
    <>
    <div className='footer w-full h-1/5 flex flex-col bg-[#FFE3E3] py-10 px-10' >
        <div className='upper flex justify-between px-10 h-[80%] items-center   pb-10'>
            <h1 className={`${font.className} text-3xl tracking-tighter`}>Follow us no filter.</h1>
            <div className='socail-media flex gap-6'>
                <Link className='hover:scale-105' href=''>
                    <Image src={Facebook} width={35} height={35} alt='facebook logo' />
                </Link>
                <Link className='hover:scale-105 hover:duration-150' href=''>
                    <Image src={Linkedin} width={35} height={35} alt='facebook logo' />
                </Link>
                <Link className='hover:scale-105 hover:duration-150' href=''>
                    <Image src={Instagram} width={35} height={35} alt='facebook logo' />
                </Link>
                <Link className='hover:scale-105 hover:duration-150' href=''>
                    <Image src={Twitter} width={35} height={35} alt='facebook logo' />
                </Link>
                <Link className='hover:scale-105 hover:duration-150' href=''>
                    <Image src={Youtube} width={35} height={35} alt='facebook logo' />
                </Link>
            </div>
        </div>
        <div className='h-[2px] w-[96%] bg-slate-500 mx-auto'></div>
        <div className='lower pt-10 flex justify-between px-10'>
            <div className='flex gap-10'>
                <h1 >@2024 PriEdu Ltd.</h1>
                <Link className='hover:scale-105 hover:duration-200 hover:font-semibold' href="">Terms & Conditions</Link>
                <Link className='hover:scale-105 hover:duration-200 hover:font-semibold' href="">Privacy & Policy</Link>
            </div>
            <div className='hover:scale-105 hover:duration-200 hover:underline hover:underline-offset-4'>
                <Link href="">Develped by Mohammad Tahzeeb Khan</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default footer