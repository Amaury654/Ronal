import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ButtonScrollDown from '../components/ButtonScrollDown'
import NavBar from '../components/NavBar'
import SocialMedia from '../components/SocialMedia'
import PageAnimation from './PageAnimation'

function homeproductos() {
  return (
    <div>
        <Image src={'/img/Homeproductos.png'} alt='Productos' layout='fill' className=' -z-10 object-cover' />
        <NavBar />

        <PageAnimation>
    <div className='flex w-full'>


            <div className='w-[10%] flex flex-col items-center mt-24'>
                <p className='text-white'>03</p>
                <Image src={'/img/frame3.png'}  width={300} height={100} className='w-2 h-[500px]' />
                <p className='text-white'>05</p>
            </div>


            <div className=' w-[90%] mt-10'>
                <div className=''>
                  <h1 className='text-white text-5xl font-bold mb-3'>Productos</h1>
                  <p className='text-white'> Descubre cómo nuestra empresa ha cambiado el juego para nuestros clientes.</p>
                 </div>

                    <div className='w-full flex flex-col justify-center mt-5'>
                        <div className='flex justify-around w-[90%] gap-3'>
                               

                                <div className='flex justify-center items-center  flex-col w-[50%] lg:w-[40%] rounded-xl bg-gray-600 bg-opacity-70'>
                                    <Image src={'/img/LaptopSettings.png'} width={100} height={100} className='w-[60px] mt-5' />
                                    <h3 className='text-white font-bold my-5'>Paginas Web</h3>
                                    <button className='mb-10 bg-transparent border-2 border-white rounded-lg text-white
                                    px-7 lg:px-16  py-1 hover:opacity-80'>Ver Ahora!</button>
                                </div>

                                <div className='flex justify-center items-center  flex-col w-[50%] lg:w-[40%] rounded-xl bg-gray-600 bg-opacity-70'>
                                    <Image src={'/img/DeveloperMode.png'} width={100} height={100} className='w-[60px] mt-5' />
                                    <h3 className='text-white font-bold my-5'>Aplicaciones móviles </h3>
                                    <button className='mb-10 bg-transparent border-2 border-white rounded-lg text-white
                                    px-7 lg:px-16  py-1 hover:opacity-80'>Ver Ahora!</button>
                                </div>      

                        </div>

                        <div className='flex justify-around w-[90%] mt-5 gap-5'>
                               

                                <div className='flex justify-center items-center  flex-col  w-[50%] lg:w-[40%]  rounded-xl bg-gray-600 bg-opacity-70'>
                                    <Image src={'/img/LaptopSettings.png'} width={100} height={100} className='w-[60px] mt-5' />
                                    <h3 className='text-white font-bold my-5'>Sistemas informáticos  </h3>
                                    <button className='mb-10 bg-transparent border-2 border-white rounded-lg text-white
                                    px-7 lg:px-16  py-1 hover:opacity-80'>Ver Ahora!</button>
                                </div>

                                <div className='flex justify-center items-center  flex-col w-[50%] lg:w-[40%] rounded-xl bg-gray-600 bg-opacity-70'>
                                    <Image src={'/img/Protect.png'} width={100} height={100} className='w-[60px] mt-5' />
                                    <h3 className='text-white font-bold my-5'>Ver todos</h3>
                                    <button className='mb-10 bg-transparent border-2 border-white rounded-lg text-white
                                     px-7 lg:px-16 py-1 hover:opacity-80'>Ver Ahora!</button>
                                </div>
      

                       </div>

                    </div>

               </div>
            </div>

      </PageAnimation>
            <div className=' absolute bottom-5 w-full flex justify-around items-center'>
        <div></div>

       <Link href={'/homecontactanos'}><ButtonScrollDown /> </Link>
        
        <SocialMedia />
        
      </div>
    </div>
  )
}

export default homeproductos