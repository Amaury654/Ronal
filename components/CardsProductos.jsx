import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CardsProductos() {
  return (
    <div className=' w-[95%] flex justify-center '>
          
        <div className='flex flex-col w-full lg:justify-center lg:items-center relative'>
            <div className='text-left absolute top-0 lg:top-8 left-0  text-white'>
        <h2 className='font-bold text-6xl'>Productos</h2>
        <p> Descubre cómo nuestra empresa ha cambiado el juego para nuestros clientes.</p>
            </div>
            <div className='lg:flex w-[100%] lg:w-[60%] lg:gap-3 mt-32 lg:mt-0'>
                <div className=' flex flex-col items-center px-5 pb-5 text-center text-white justify-center w-[100%] lg:py-10 bg-black bg-opacity-50 rounded-lg'>
                <Image src={'/img/LaptopSettings.png'} width={350} height={400} className='w-[40px] mt-2 lg:mt-5 h-[40px] lg:h-[50px]' /> 
                <h2 className='font-bold mb-2 text-lg'>Paginas web</h2>
                <button className=' border-2 border-white px-5 py-1 mt-3 rounded-lg text-sm'>Solicitar Ahora!</button>
                </div>

                <div className='mt-3 mb-3 lg:mb-0 lg:mt-0 flex flex-col items-center px-5 pb-5 text-center text-white justify-center w-[100%] lg:py-10 bg-black bg-opacity-50 rounded-lg'>
                <Image src={'/img/DeveloperMode.png'} width={350} height={400} className='w-[40px] mt-2 lg:mt-5 h-[40px] lg:h-[50px]' /> 
                <h2 className='font-bold mb-2 text-lg'>Aplicaciones móviles </h2>
                <button className=' border-2 border-white px-5 py-1 mt-3 rounded-lg text-sm'>Solicitar Ahora!</button>
                </div>
            </div>

            <div className='lg:flex w-[100%] lg:w-[60%] lg:gap-3 lg:mt-10'>
                <div className=' flex flex-col items-center px-5 pb-5 text-center text-white justify-center w-[100%] lg:py-10 bg-black bg-opacity-50 rounded-lg'>
                <Image src={'/img/LaptopSettings.png'} width={350} height={400} className='w-[40px] mt-2 lg:mt-5 h-[40px] lg:h-[50px]' /> 
                <h2 className='font-bold mb-2 text-lg'>Sistemas informáticos  </h2>
                <button className=' border-2 border-white px-5 py-1 mt-3 rounded-lg text-sm'>Solicitar Ahora!</button>
                </div>

                <div className='mt-3 lg:mt-0 flex flex-col items-center px-5 pb-5 text-center text-white justify-center w-[100%] lg:py-10 bg-black bg-opacity-50 rounded-lg'>
                <Image src={'/img/Protect.png'} width={350} height={400} className='w-[40px] mt-2 lg:mt-5 h-[40px] lg:h-[50px]' /> 
                <h2 className='font-bold mb-2 text-lg'>Ver todos</h2>
                <button className=' border-2 border-white px-5 py-1  mt-3 rounded-lg text-sm'>Solicitar Ahora!</button>
                </div>
            </div>


           
        </div>
    </div>
  )
}

export default CardsProductos