import Image from 'next/image'
import React from 'react'

function ContactInformacion() {
  return (
    <div className='ml-3 mt-5'>
        <div className='flex items-center gap-2 mt-5'>
            <Image src={'/img/PlaceMarker.png'} width={300} height={300} className='w-[35px]' />
            <h3 className='text-white'><span className=' font-bold mr-1'>Ubicación: </span>  Santo Domingo, Republica Dominicana </h3>
        </div>

        <div className='flex items-center gap-2 mt-5'>
            <Image src={'/img/Calling.png'} width={300} height={300} className='w-[35px]' />
            <h3 className='text-white'><span className=' font-bold mr-1'> Contacto: </span>+829-363-2762 </h3>
        </div>

        <div className='flex items-center gap-2 mt-5'>
            <Image src={'/img/Envelope.png'} width={300} height={300} className='w-[35px]' />
            <h3 className='text-white'><span className=' font-bold mr-1'> Correo Electrónico: </span> sevicios@rdt.do</h3>
        </div>
    </div>
  )
}

export default ContactInformacion