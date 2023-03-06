import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ButtonScrollDown from '../components/ButtonScrollDown'
import NavBar from '../components/NavBar'
import SocialMedia from '../components/SocialMedia'
import PageAnimation from './PageAnimation'

function index() {
  return (
    <div>
      
      <Image src='/img/Home.png' alt='Home' layout='fill' className=' -z-10 object-cover' />

         <NavBar />
       
        <div className='absolute top-96 left-14 md:left-24 flex flex-col justify-center items-center overflow-hidden'>
          <p className=' text-white'>01</p>
          <Image src={'/img/Frame1.png'} width={650} height={600} className='w-2 h-[200px] lg:h-[600px] mr-6' /> 
          <p className=' text-white'>05</p>
        </div>
        <PageAnimation>
        <div className='w-[100%] p-10 xl:p-0 xl:w-[65%] xl:mt-16 flex justify-center'>
          <div className=''>
        <h1 className='text-xl lg:text-5xl xl:text-6xl xl:leading-[4rem] font-bold text-white'>Déjenos ayudarle a mejorar la <br /> experiencia de sus clientes</h1>
        <p className='mt-3 xl:mt-4 text-2xl text-gray-200'>Obtenga los mejores servicios informáticos de RDL TECHNOLOGIES</p>
          </div>
        </div>


     <Link href={'/solicitud-servicios'}> <div className='w-[100%] xl:w-[25%] xl:mt-10  flex justify-center xl:justify-end'>
        <button className=' bg-transparent hover:opacity-70 border-2 border-white text-white px-10 py-2 rounded-2xl'>
        Solicitar Servicio 
        </button>
      </div></Link>
      </PageAnimation>


      <div className=' absolute bottom-10 w-full flex justify-around items-center'>
        <div></div>

       <Link href={'/homeservicios'}><ButtonScrollDown /> </Link>
        
        <SocialMedia />
      </div>
       

    </div>
  )
}

export default index