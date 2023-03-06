import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ButtonScrollDown from '../components/ButtonScrollDown'
import NavBar from '../components/NavBar'
import SocialMedia from '../components/SocialMedia'

function homecontactanos() {
  return (
    <div className='relative min-h-[955px] lg:min-h-screen flex flex-col'>
           <Image src={'/img/HomeContactos.png'} alt='Productos' layout='fill' className=' -z-10 object-cover' />
            <NavBar />

         <div className='flex w-full mt-16'>
                <div className='w-[15%] flex flex-col items-center justify-center mt-12'>
                    <p className='text-white'>04</p>
                    <Image src={'/img/frame4.png'} width={300} height={300} className='w-2 h-[350px] lg:h-[450px]' /> 
                    <p className='text-white'>05</p>
                </div>

                  <div className='w-[85%] max-h-[300px] px-2'>
                    <h1 className='text-white text-2xl lg:text-5xl font-bold'>Descubre cómo podemos ayudarte</h1>
                    <p className='text-white'>Te ofrecemos una gama de servicios para llevar tu negocio a su máximo potenciar</p>
                   <Link href={'/contactanos'}><button className='text-white font-bold bg-transparent border-2 border-white rounded-xl px-16 py-2
                    mt-16 hover:opacity-80'>Contactar Ahora!</button></Link>
                 </div>
         </div>

         <div className='w-[70%] lg:w-[30%] relative mx-auto'>
            <div className=' absolute right-1 bottom-5'>
        <div className='flex items-center gap-2 mt-2'>
            <Image src={'/img/PlaceMarker.png'} width={300} height={300} className='w-[35px]' />
            <h3 className='text-white text-sm lg:text-xl'><span className=' font-bold mr-1'>Ubicación: </span>  Santo Domingo, Republica Dominicana </h3>
        </div>

        <div className='flex items-center gap-2 mt-2'>
            <Image src={'/img/Calling.png'} width={300} height={300} className='w-[35px]' />
            <h3 className='text-white text-sm lg:text-xl'><span className=' font-bold mr-1'> Contacto: </span>+829-363-2762 </h3>
        </div>

        <div className='flex items-center gap-2 mt-2'>
            <Image src={'/img/Envelope.png'} width={300} height={300} className='w-[35px]' />
            <h3 className='text-white text-sm lg:text-xl'><span className=' font-bold mr-1'> Correo Electrónico: </span> sevicios@rdt.do</h3>
        </div>
        </div>
    </div>




            <div className=' absolute bottom-5 w-full flex justify-around items-center'>
              <div></div>

                <Link href={'/footer'}><ButtonScrollDown /> </Link>
        
                <SocialMedia />
            </div>
    </div>
  )
}

export default homecontactanos