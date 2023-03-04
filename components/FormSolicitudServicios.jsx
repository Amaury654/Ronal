import React from 'react'

function FormSolicitudServicios() {
  return (
    <div className='flex justify-center w-[100%]'>
        <form className='w-[95%] lg:mt-5 flex flex-col'>
            <h2 className='text-white text-center text-4xl lg:text-left lg:text-5xl font-bold mb-8'>Solicitud de servicio</h2>
            <div className='flex gap-2 w-full justify-center'>

            <div className='w-[50%]'>
                <label className='text-white ml-4'>Nombre Completo</label>
            <input type="text" className='px-5 py-3 w-full rounded-xl outline-none text-gray-600' placeholder='Nombre Completo' />
            </div>

            <div className='w-[50%]'>
            <label className='text-white ml-4'>Nombre de la empresa </label>
            <input type="text" className='px-5 py-3 w-full rounded-xl outline-none text-gray-600' placeholder='Nombre de la empresa' />
            </div>

            </div>

            <div className='flex gap-2 w-full justify-center mt-5'>

            <div className='w-[50%]'>
            <label className='text-white ml-4'>Telefono</label>
            <input type="text" className='px-5 py-3 w-full rounded-xl outline-none text-gray-600' placeholder='Telefono'  />
            </div>

            <div className='w-[50%]'>
            <label className='text-white ml-4'>Correo electrónico </label>
            <input type="text" className='px-5 py-3 w-full rounded-xl outline-none text-gray-600' placeholder='Correo electrónico'  />
            </div>
            
            </div>

            <div className='w-[100%] mt-5  '>
            <label className='text-white ml-4'>Servicio que desea solicitar  </label>
                <select className='w-full h-12 outline-none text-gray-600 rounded-xl px-4'>
                    <option value="">Paginas Web</option>
                    <option value="">Aplicaciones móviles</option>
                    <option value="">Sistemas Informáticos</option>
                    <option value="">Consultoria Informatica</option>
                    <option value="">Otros</option>

                </select>

            </div>


            <div className='w-[100%] mt-5'>
            <label className='text-white ml-4'>Cual es el alcance del proyecto?  </label>
                <textarea className='w-full h-24 lg:h-32 rounded-xl resize-none outline-none text-gray-600 px-3 py-3
                ' placeholder='Detállenos un poco mas que desea lograr con este proyecto para su empresa?'></textarea>
            </div>

            <div className='ml-5 mt-1 lg:mt-3 flex flex-col'>
                <div className='flex gap-3'>
                    <input type="checkbox" className='w-5 h-5' />
                    <h3 className=' text-white'>No soy un robot</h3>
                </div>
                <p className='text-white text-sm'>Al hacer clic en el botón continuar acepta los Términos del acuerdo</p>
            </div>

            <div className='w-full mt-4 ml-5'>
                <button className='text-black bg-white px-10 py-2 rounded-xl font-bold hover:bg-opacity-80'>Enviar Solicitud!</button>
            </div>

        </form>
    </div>
  )
}

export default FormSolicitudServicios