import Image from 'next/image'
import React from 'react'
import NavBar from '../components/NavBar'
import SocialMediaRow from '../components/SocialMediaRow'

function rdl() {
  return (
    <div className='relative lg:min-h-screen flex flex-col'>
            <Image src={'/img/RDLnosotros.png'} alt='Productos' layout='fill' className=' -z-10 object-cover' />
            <NavBar />


            <div className='w-full min-h-[850px]  md:min-h-[1030px] lg:min-h-full flex mt-10 relative'>


                <div className='w-[10%] flex justify-end'>
                <Image src={'/img/Framerservicios.png'} width={650} height={600} className='w-5 mt-5 h-[350px] lg:h-[600px]' /> 
                </div>

                <div className='w-[90%] max-h-[400px]  lg:max-h-[700px] flex justify-center relative'>
             
                      <div className=' absolute bottom-1 w-[100%] lg:w-[80%]'>
                      <Image src={'/img/logo2.png'} width={1000} height={1000} className='w-[80%] lg:w-[40%] lg:mt-5' /> 
                            <p className='text-white px-5 lg:px-0 mt-5'>Somos una empresa técnologica enfocada en el desarrollo de software y diseño web. <br />
                            Nuestra visión es crear herramientas sencillas e intuitivas de usar para nuestros clientes, eliminando perdida de tiempo <br /> y dinero en sistemas complicados. <br />
                            Más fácil es mejor!!!</p>

                      </div>

                </div>

                
                </div>
                <div className=' absolute bottom-4 w-full flex justify-around items-center py-3 px-5 gap-3 bg-transparent '>
              <div></div>

                <div></div>
        
                <SocialMediaRow />
            </div>
            
 

    </div>
  )
}

export default rdl