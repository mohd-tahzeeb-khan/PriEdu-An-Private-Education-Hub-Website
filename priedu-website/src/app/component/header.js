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
        <div className='links flex '>
           <div className='hover:scale-110 hover:duration-200'><Link className='mx-5 uppercase text-[15px] font-semibold ' href="">Home</Link></div>
           <div className='hover:scale-110 hover:duration-200'><Link className='mx-5 uppercase text-[15px] font-semibold ' href="">About</Link></div>
           <div className='hover:scale-110 hover:duration-200'><Link className='mx-5 uppercase text-[15px] font-semibold ' href="">Students Info</Link></div>
           <div className='hover:scale-110 hover:duration-200'><Link className='mx-5 uppercase text-[15px] font-semibold ' href="">Support</Link></div>
           <div className='hover:scale-110 hover:duration-200'><Link className='mx-5 uppercase text-[15px] font-semibold ' href="">Admission</Link></div>
        </div>
        <div className='signup-button border-black border-2 rounded-full p-2 px-6 hover:scale-110 hover:text-white hover:duration-150 hover:bg-black'>
            <Link className='font-bold  hover:text-white' href="" prefetch={true}>Sign Up</Link>
        </div>
    </div>
    
    </>
  )
}

export default header