import React from 'react'
import Image from 'next/image'
const contact = () => {
  return (
    <>
    <div className=' flex justify-center items-center gap-10 flex-col py-52 bg-white'>
        <div><h1 className='text-7xl font-bold'>Subscribe our newsletter</h1></div>
        <div><p className='capitalize'>Teaches tou how to communicate your unique comedy, skillfully, virtual comedy workshop, virtual stand up comedy virtual comedy class</p></div>
        <div className='flex justify-between'>
            <input placeholder='Enter your E-mail Address' className='bg-transparent text-2xl focus:border-none outline-none mx-10 mr-20'></input>
            <Image alt='img' src={'https://www.reshot.com/preview-assets/icons/YSCZ76U4B2/right-arrow-YSCZ76U4B2.svg'} width={60} height={60}></Image></div>
        <div className='border-t-4 w-[40vw] -m-10'></div>
    </div>
    </>
  )
}

export default contact