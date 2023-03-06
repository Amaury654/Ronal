import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ButtonScrollDown from '../components/ButtonScrollDown'
import NavBar from '../components/NavBar'
import SocialMedia from '../components/SocialMedia'
import WebSitesCards from '../components/WebSitesCards'

function paginaswebs() {
  return (
    <div>
         <Image src={'/img/Paginaswebs.png'} alt='Productos' layout='fill' className=' -z-10 object-cover' />
        <NavBar />

        <div className='relative'>

        <div className='mt-20 w-full flex'>
            <div className='w-[15%] flex justify-end'>
            <Image src={'/img/Framerservicios.png'} width={650} height={600} className='w-5 mt-5 h-[550px] lg:h-[600px] mr-6' /> 
            </div>
            
            <div className='w-full flex justify-center mt-10 mb-44 lg:mt-20'>
                <WebSitesCards />

            </div>
        </div>


        <div className=' absolute bottom-5 w-full flex justify-around items-center'>
        <div></div>

       <Link href={'/homecontactanos'}><ButtonScrollDown /> </Link>
        
        <SocialMedia />
      </div>

        </div>

    </div>
  )
}

export default paginaswebs


