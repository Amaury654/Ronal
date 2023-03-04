import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ContactInformacion from '../components/ContactInformacion'
import FormSolicitudServicios from '../components/FormSolicitudServicios'
import NavBarServicios from '../components/NavBarServicios'
import SocialMediaRow from '../components/SocialMediaRow'
import PageAnimation from './PageAnimation'

function solicitudServicios() {
  return (
    <div>

    <Image src={'/img/solicitudServicio.png'} width={0} height={0}  layout='fill' className='object-cover -z-10 
    bg-opacity-10 h-screen' />
    <NavBarServicios />
    <PageAnimation>
  <div className='lg:flex mt-10 w-full'>

     <div className='flex w-[100%] lg:w-[50%]'> 
       <div className='justify-end w-[20%] hidden lg:flex'>
            <Image src={'/img/Framerservicios.png'} width={300} height={100} className='w-6 h-[500px] mt-48'  />
        </div>

        <div className=' w-[100%] lg:w-[80%] flex flex-col '>
                <div className='flex justify-center lg:justify-end'>
           <Link href={'/'}> <Image src={'/img/logo2.png'} width={500} height={300} className='w-400 lg:w-[600px] h-150 lg:h-[220px]' /></Link>
                </div>
            <div className='hidden lg:flex'>
                <ContactInformacion />
            </div>
        
        </div>
      </div>

        <div className='flex w-[100%] lg:w-[50%]'>
        <FormSolicitudServicios />
        </div>

        </div>

        <div className=' absolute bottom-4 right-28'>
            <SocialMediaRow />
        </div>
        </PageAnimation>
    </div>
  )
}

export default solicitudServicios