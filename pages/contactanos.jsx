import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ContactInformacion from '../components/ContactInformacion'
import FormSolicitudServicios from '../components/FormSolicitudServicios'
import NavBar from '../components/NavBar'
import SocialMediaRow from '../components/SocialMediaRow'
import PageAnimation from './PageAnimation'

function contactanos() {
  return (
    <div className='relative min-h-[950px] lg:min-h-screen flex flex-col'>

    <Image src={'/img/Contacto.png'} width={0} height={0}  layout='fill' className='object-cover -z-10 
    bg-opacity-10 h-screen' />
    <NavBar />
    <PageAnimation>
  <div className='lg:flex mt-10 w-full'>

     <div className='flex w-[100%] lg:w-[50%]'> 
       <div className='justify-end w-[20%] hidden lg:flex'>
            <Image src={'/img/Framerservicios.png'} width={300} height={100} className='w-6 h-[500px] mt-48'  />
        </div>

        <div className=' w-[100%] lg:w-[80%] flex relative '>
                
            <div className='hidden lg:flex absolute bottom-0 ml-10'>
                <ContactInformacion />
            </div>
        
        </div>
      </div>

        <div className='flex w-[100%] justify-center lg:justify-start lg:w-[80%]'>
        <FormSolicitudServicios />
        </div>

        </div>

        <div className=' absolute bottom-20 lg:bottom-4 right-28'>
            <SocialMediaRow />
        </div>
        </PageAnimation>
    </div>
  )
}

export default contactanos