import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ButtonScrollDown from '../components/ButtonScrollDown'
import NavBar from '../components/NavBar'
import SocialMedia from '../components/SocialMedia'

function footer() {
  return (
    <div>

            <Image src={'/img/footer.png'} alt='Productos' layout='fill' className=' -z-10 object-cover' />
            <NavBar />

                <div className='w-full flex mt-16 relative'>
                    <div className='w-[10%] flex justify-end'>
                    <Image src={'/img/frame5.png'} alt='Productos' width={300} height={300} className='w-4 h-[450px] lg:h-[450px]' /> 
                    </div>
                    <div className='w-[90%] min-h-[500px] lg:min-h-[600px] flex justify-center'>
                        <div className=' absolute bottom-5 '>
                        <Image src={'/img/logo3.png'} alt='Productos' width={450} height={300} className='w-[450px] h-[190px] ' /> 
                        <h3 className='text-white text-sm lg:text-2xl text-center font-semibold'>COPYRIGHT © 2022 RDL TECHNOLOGIES, inc | Todos los derechos reservados</h3>
                        </div>
                    </div>

                </div>



            <div className=' absolute bottom-5 w-full flex justify-around items-center'>
              <div></div>

             <Link href={'/'}> <button className='flex items-center p-7 rounded-full bg-transparent border-2 border-white text-white hover:opacity-70 rotate-180'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
             </button></Link>
        
                <SocialMedia />
            </div>
    </div>
  )
}

export default footer