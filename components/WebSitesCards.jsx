import React from 'react'
import { WebSites } from './Arrays'

console.log(WebSites)
function WebSitesCards() {
  return (
    <div className='w-[95%] lg:flex flex-wrap justify-start gap-10'>
         
            {WebSites.length > 0 && WebSites.map(web => (
                <div className=' lg:w-[20%] bg-gray-800 bg-opacity-85 h-[410px] mb-5 lg:h-[420px] flex flex-col relative rounded-xl'>
                <img src={web.img} alt="hola" className=' rounded-b-2xl rounded-t-md w-full h-[180px]' />
                <h3 className='text-white text-center my-5 font-bold'>{web.title}</h3>
                <p className='text-white text-center mb-3 text-sm px-5'>{web.description}</p>
                <button className=' absolute bottom-2 w-full rounded-lg bg-white text-black font-bold py-2
                 hover:bg-gray-300'>Ver proyecto</button>
                </div>
                
                ))}

    </div>
  )
}

export default WebSitesCards