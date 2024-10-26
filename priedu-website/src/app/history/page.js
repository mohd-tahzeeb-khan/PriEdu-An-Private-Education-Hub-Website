import React from 'react'
import Image from 'next/image'
import First from '../../../public/images/9.png'
import Link from 'next/link'
const history = () => {
  return (
    
    <>
    <div className=' bg-[#789DBC] flex justify-between pb-6 w-[100%] px-[10vw] py-[10vh] '>
            <div className='bg-yellow-100 rounded-full overflow-hidden pt-10 w-[500px] h-[600px]' ><Image src={First} height={500} width={300} alt='img' className='h-full w-[800px] object-cover' /></div>
            <div className='w-1/2 flex flex-col justify-center'><h3 className='capitalize bg-[#C9E9D2] rounded-full p-2 w-1/2 border-2 border-black text-center mb-4'>a tuition- free private school</h3> <p className='text-justify text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet tellus sapien. Aliquam in erat bibendum nisi sodales vulputate at facilisis lorem. Donec fringilla varius ligula, at aliquet arcu congue id. Donec aliquam gravida euismod. Vivamus ac viverra nisl. Curabitur sagittis volutpat arcu, dignissim varius dolor euismod tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut consequat lacinia aliquam. Vestibulum tempor semper magna, non condimentum est sollicitudin ut.

Proin hendrerit, turpis sit amet feugiat facilisis, lorem elit aliquet quam, sit amet elementum dui enim et libero. Donec semper, mauris quis tincidunt congue, quam ante.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae tempor neque. Integer sed sem sit amet sapien congue euismod. Maecenas laoreet id risus et pellentesque. Nunc libero sem, elementum quis sagittis et, aliquet id diam. In volutpat sed leo vitae bibendum. Ut felis dolor, blandit vel placerat vitae, sollicitudin.</p> 
<Link className='border-2 rounded-full w-56  border-black bg-black text-white hover:bg-white hover:text-black hover:scale-105 hover:duration-200 p-3 px-10 mt-5' href="">Contactus</Link>
</div>

       
        </div></>
  )
}

export default history