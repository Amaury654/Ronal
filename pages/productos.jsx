import Image from 'next/image'
import React from 'react'
import CardsProductos from '../components/CardsProductos'
import NavBar from '../components/NavBar'
import SocialMediaRow from '../components/SocialMediaRow'

function productos() {
  return (
    <div>
            <Image src={'/img/Productos.png'} alt='Productos' layout='fill' className=' -z-10 object-cover' />
            <NavBar />


            <div className='w-full min-h-[910px] md:min-h-[1120px] lg:min-h-[990px] xl:min-h-[810px] flex mt-10 relative'>


                <div className='w-[10%] flex justify-end'>
                <Image src={'/img/Framerservicios.png'} width={650} height={600} className='w-5 mt-5 h-[550px] lg:h-[600px]' /> 
                </div>

                <div className='w-[90%] flex justify-center'>
             
                        <CardsProductos />

                </div>

                
                <div className=' absolute bottom-0 w-full flex justify-around items-center py-10 px-5 gap-3 bg-black lg:bg-transparent'>
              <div></div>

                <div></div>
        
                <SocialMediaRow />
            </div>
                </div>

            
 

    </div>
  )
}

export default productos