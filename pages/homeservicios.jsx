import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ButtonScrollDown from '../components/ButtonScrollDown'
import NavBar from '../components/NavBar'
import SocialMedia from '../components/SocialMedia'

function Servicios() {
  return (
    <div className='h-screen flex flex-col'>
       <Image src={'/img/HomeServicios.png'} alt='HomeServisios' layout='fill' className=' -z-10 object-cover bg-opacity-50' />
        <NavBar />

     <div className='w-[100%] flex mt-8'>

          <div className='w-[15%] flex flex-col items-center justify-center mt-12'>
          <p className=' text-white'>02</p>
            <img src={'/img/frame2.png'} width={100} height={100} className='w-2 h-96' />
            <p className=' text-white'>05</p>
          </div>

           <div className='w-[80%] md:w-[65%] flex flex-col' >
            <div className=''>
            <h1 className=' text-white text-3xl lg:text-6xl font-bold my-5'>Servicios</h1>
           <p className='text-white mb-4 text-sm lg:text-lg'>Cada vez más  la digitalización  de los negocios, es necesario contar con un equipo de expertos informáticos para ofrecer asistencia técnica, mantener los sistemas informáticos y garantizar el rendimiento óptimo de las herramientas digitales. </p>
           <p className='text-white mb-4 text-sm lg:text-lg'>La gestión y mantenimiento de sistemas informáticos hasta la implementación de nuevas tecnologías. Estos servicios se pueden dividir en dos categorías principales: servicios de mantenimiento y servicios de desarrollo. </p>
           <p className='text-white mb-4 text-sm lg:text-lg'>Los servicios de mantenimiento incluyen la monitorización, el mantenimiento y la actualización de sistemas informáticos. Los servicios de desarrollo se centran en la creación de soluciones informáticas.</p>
          
            </div>

          {/* cards */}
      <div className='text-white flex justify-around w-[100%] xl:mt-10'>

        <div className='flex flex-col justify-center items-center bg-opacity-50 bg-gray-600 w-[45%] rounded-2xl'> 
            <div className='flex justify-center mt-6  xl:mt-14 gap-4'>
          <Image src={'/img/LaptopSettings.png'} width={100} height={100} className='w-[40px] xl-[60px]' /> 
          <Image src={'/img/DeveloperMode.png'} width={100} height={100} className='w-[40px] xl-[60px]' /> 
            </div>
          <h2 className='text-sm text-center xl:text-3xl font-bold my-6'>Desarrollo web y móvil</h2>
          
         <Link href={'servicios'}> <button className='bg-transparent hover:opacity-50 border-2 border-white text-white px-5 xl:px-10 py-2 rounded-2xl mb-8 md:mb-20'>
          Ver servicios! 
          </button></Link>
          </div>

          <div className='flex flex-col justify-center items-center bg-opacity-50 bg-gray-600 w-[45%] rounded-2xl'> 
            <div className='flex justify-center mt-6 xl:mt-14 gap-4'>
          <Image src={'/img/Consultation.png'} width={100} height={100} className='w-[40px] xl:w-[60px]' /> 
            </div>
          <h2 className='text-sm text-center xl:text-3xl font-bold my-6'>Consultoria informatica</h2>
          
          <Link href={'servicios'}><button className='bg-transparent hover:opacity-50 border-2 border-white text-white px-5 md:px-10 py-2 rounded-2xl mb-8 md:mb-20'>
          Ver servicios! 
          </button></Link>
          </div>

        </div>
           </div> 

           <div className=' absolute bottom-5 w-full flex justify-around items-center'>
        <div></div>

       <Link href={'/homeproductos'}><ButtonScrollDown /> </Link>
        
        <SocialMedia />
        
      </div>
      
      </div>
    </div>
  )
}

export default Servicios