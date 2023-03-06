import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CardsServicios() {
  return (
    <div className=' w-[95%] flex justify-center '>
           <Image src={'/img/solicitudServicio.png'} alt='Productos' layout='fill' className=' -z-10 object-cover' />
          
        <div className='flex flex-col lg:justify-center lg:items-center relative'>
            <div className='text-left absolute top-0 left-3  text-white'>
        <h2 className='font-bold text-4xl lg:text-6xl'>Servicios</h2>
        <p>Ofrecemos servicios y soluciones a la medida.</p>
            </div>
            <div className='lg:flex w-[100%] lg:w-[70%] lg:gap-8 mt-28 lg:mt-0'>
                <div className=' flex flex-col items-center px-5 pb-5 text-center text-white justify-center w-[100%] bg-gray-800 bg-opacity-90 rounded-2xl'>
                <Image src={'/img/LaptopSettings.png'} width={350} height={400} className='w-[40px] mt-2 lg:mt-5 h-[40px] lg:h-[50px]' /> 
                <h2 className='font-bold mb-2 lg:mb-8 text-lg'>Paginas web</h2>
                <p className='text-sm'>Las páginas web son una herramienta indispensable para el éxito de cualquier empresa o negocio. Estas pueden ayudar a  promover los productos y servicios, aumentar las ventas </p>
               <Link href={'/solicitud-servicios'}><button className=' border-2 border-white px-5 py-1 mt-3 lg:mt-7 rounded-lg text-sm'>Solicitar Ahora!</button></Link>
                </div>

                <div className='mt-3 mb-3 lg:mb-0 lg:mt-0 flex flex-col items-center px-5 pb-5 text-center text-white justify-center w-[100%] bg-gray-800 bg-opacity-90 rounded-2xl'>
                <Image src={'/img/DeveloperMode.png'} width={350} height={400} className='w-[40px] mt-2 lg:mt-5 h-[40px] lg:h-[50px]' /> 
                <h2 className='font-bold mb-2 lg:mb-8  text-lg'>Aplicaciones móviles </h2>
                <p className='text-sm'>Una aplicación móvil ofrece una forma conveniente de conectar con los usuarios de una manera más directa. Esto permite a las empresas ofrecer contenido específico, actualizaciones y anuncios relevantes a sus usuarios.</p>
                <Link href={'/solicitud-servicios'}><button className=' border-2 border-white px-5 py-1 mt-3 lg:mt-7 rounded-lg text-sm'>Solicitar Ahora!</button></Link>
                </div>
            </div>

            <div className='lg:flex w-[100%] lg:w-[70%] lg:gap-8 lg:mt-10'>
                <div className=' flex flex-col items-center px-5 pb-5 text-center text-white justify-center w-[100%] bg-gray-800 bg-opacity-90 rounded-2xl'>
                <Image src={'/img/LaptopSettings.png'} width={350} height={400} className='w-[40px] mt-2 lg:mt-5 h-[40px] lg:h-[50px]' /> 
                <h2 className='font-bold mb-2  lg:mb-8  text-lg'>Sistemas informáticos  </h2>
                <p className='text-sm'>Los sistemas informáticos permiten a las empresas y organizaciones  ahorrar tiempo, recursos y dinero al facilitar el acceso a la información necesaria para realizar sus tareas. </p>
                <Link href={'/solicitud-servicios'}><button className=' border-2 border-white px-5 py-1 mt-3 lg:mt-7 rounded-lg text-sm'>Solicitar Ahora!</button></Link>
                </div>

                <div className='mt-3 lg:mt-0 flex flex-col items-center px-5 pb-5 text-center text-white justify-center w-[100%] bg-gray-800 bg-opacity-90 rounded-2xl'>
                <Image src={'/img/Consultation.png'} width={350} height={400} className='w-[40px] mt-2 lg:mt-5 h-[40px] lg:h-[50px]' /> 
                <h2 className='font-bold mb-2 lg:mb-8  text-lg'>Consultoria informatica </h2>
                <p className='text-sm'>La consultoría informática se refiere al asesoramiento profesional y la asistencia en el diseño, desarrollo, implementación, gestión y mantenimiento de sistemas informáticos en una empresa o organización. </p>
                <Link href={'/solicitud-servicios'}><button className=' border-2 border-white px-5 py-1 mt-3 lg:mt-7 rounded-lg text-sm'>Solicitar Ahora!</button></Link>
                </div>
            </div>


           
        </div>
    </div>
  )
}

export default CardsServicios