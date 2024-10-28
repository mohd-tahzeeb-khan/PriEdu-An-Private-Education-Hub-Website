import React from 'react'
import Image from 'next/image'
import Eight from '../../../public/images/4.png'
import girlphoto from '../../../public/images/5.png'
import graduategirl from '../../../public/images/8.png'
import { font , myfont} from '../fonts/font'
const inpiration = () => {
  return (
    <>
    <div className='grid-rows-3'>
        <div className='bg-[#FEF9F2] flex justify-around'>
            <div className='w-[85vh]'><h1 className={`${font.className} text-6xl text-black`}>Educating, Inspiring, <br/> & Transforming</h1></div>
            <div className=' w-52 h-52 rounded-full border-2 overflow-hidden bg-[#789DBC]'><Image className='p-10 w-72'  width={800} height={400} alt='Image' src={Eight}></Image></div>
        </div>
        <div className='bg-[#FEF9F2] flex justify-between px-72'>
            <div className='bg-[#C9E9D2] rounded-full overflow-hidden pt-28 w-[300px] h-[400px] m-11'><Image className='h-full w-[800px] object-cover' src={girlphoto} width={500} height={500} alt='images'></Image></div>
            <div className='w-[50vw] flex flex-col justify-center items-start'>
              <h1 className={`${font.className} text-4xl`}>Our Mission</h1>
              <p className='text-justify'>lorem23There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from
              </p>
            </div>
        </div>
        <div className='bg-[#FEF9F2] flex justify-between px-72'>
          <div className='w-[50vw] flex flex-col justify-center items-start'>
              <h1 className={`${font.className} text-4xl`}>Our Mission</h1>
              <p className='text-justify'>lorem23There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from
              </p>
            </div>
            <div className='bg-[#C9E9D2] rounded-full overflow-hidden w-[600px] h-[250px] m-11'><Image className='w-full h-full object-cover' src={graduategirl} width={650} height={500} alt='images'></Image></div>
            
        </div>


    </div>
    </>
  )
}

export default inpiration