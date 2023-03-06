import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CardsServicios from '../components/CardsServicios'
import NavBar from '../components/NavBar'
import SocialMediaRow from '../components/SocialMediaRow'

function Servicios() {
  return (
    <div>
            <Image src={'/img/solicitudServicio.png'} alt='Productos' layout='fill' className=' -z-10 object-cover' />
            <NavBar />


            <div className='w-full min-h-[1250px] md:min-h-[1120px] lg:min-h-[990px] xl:min-h-[810px] flex mt-10 relative'>


                <div className='w-[10%] flex justify-end'>
                <Image src={'/img/Framerservicios.png'} width={650} height={600} className='w-5 mt-5 h-[550px] lg:h-[600px]' /> 
                </div>

                <div className='w-[90%] flex justify-center'>
             
                        <CardsServicios />

                </div>

                
                <div className=' absolute bottom-0 w-full flex justify-around items-center py-3 px-5 gap-3 bg-black lg:bg-transparent bg-opacity-75'>
              <div></div>

                <div className='text-white text-sm  w-[70%]'>
                    <h2 className='font-bold lg:text-2xl'>¿CUAL ES EL COSTO?</h2>
                    <p className='lg:text-md'>Esto siempre va a depender del tipo de proyecto que usted requiera. Lo que sí le podemos asegurar es que le daremos la mejor oferta y forma de pago, incluso, hasta en cómodas cuotas mensuales.</p>
                </div>
        
                <SocialMediaRow />
            </div>
                </div>

            
 

    </div>
  )
}

export default Servicios