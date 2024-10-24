import React from 'react'
import Link from 'next/link'
import {Roboto_Mono} from 'next/font/google'
const logofont=Roboto_Mono({
   subsets:['latin'],
   weight:'600',
   style:'italic'
})
const header = () => {
  return (
    <>
    <div className='header flex justify-between items-center  w-full bg-[#FFE3E3] text-black mx-auto px-9 py-7'>
        <div className='logo align-middle'>
            <h1 className={`${logofont.className} font-bold text-4xl`}>PriEdu</h1>
        </div>
        <div className='links '>
            <Link className='mx-5 uppercase text-[15px] font-semibold' href="">Home</Link>
            <Link className='mx-5 uppercase text-[15px] font-semibold' href="">About</Link>
            <Link className='mx-5 uppercase text-[15px] font-semibold' href="">Students Info</Link>
            <Link className='mx-5 uppercase text-[15px] font-semibold' href="">Support</Link>
            <Link className='mx-5 uppercase text-[15px] font-semibold' href="">Admission</Link>
        </div>
        <div className='signup-button border-black border-2 rounded-full p-2 px-6'>
            <Link className='font-bold' href="" prefetch={true}>Sign Up</Link>
        </div>
    </div>
    
    </>
  )
}

export default header