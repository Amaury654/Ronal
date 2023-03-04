import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import PageAnimation from '../pages/PageAnimation';

function NavBar() {

  const [showNavBar, setShowNavBar] = useState(false);


  if(showNavBar){
    return(
      <>
      <NavBar />
      <div className='w-full'>
       
        <nav className=' bg-gray-900 absolute h-screen w-[22%] top-0 right-10 rounded-tr-2xl opacity-95 z-20'>
            <ul className=' text-gray-500 flex flex-col gap-4 text-3xl'>
              <div className='w-full flex justify-end'>
              <div className=' text-8xl cursor-pointer mr-10 text-white mt-6' onClick={() => setShowNavBar(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-22">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              </div>
              </div>
              <div className='flex justify-end w-full mt-10'>
           <div className='w-[50%] flex flex-col mr-10 gap-4'>
          <Link href={'/'}><li className='hover:font-bold hover:text-white cursor-pointer duration-75 text-right'>Home</li></Link>
              <li className='hover:font-bold hover:text-white cursor-pointer duration-75 text-right'>Servicios</li>
              <li className='hover:font-bold hover:text-white cursor-pointer duration-75 text-right'>Productos</li>
              <li className='hover:font-bold hover:text-white cursor-pointer duration-75 text-right'>RDL</li>
              <li className='hover:font-bold hover:text-white cursor-pointer duration-75 text-right'>Contact</li>
           </div>
              </div>
            </ul>
        </nav>
      </div>
      </>
    )
  }

  return (
      <PageAnimation>
    <div className=' mt-10 w-full flex justify-center'>
        <nav className=' w-[85%] flex justify-between items-center'>
          <div>
        
         <Link href={'/'}>
          <Image
        src='/img/logo.png'
        alt='Home'
        width={200} height={200}
        className='cursor-pointer'
        /></Link>
          </div>
          <button onClick={() => setShowNavBar(true)} className=' cursor-pointer text-white
           hover:text-black hover:bg-gray-300 px-4 py-1 rounded-xl'>
            
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
          </button>
        </nav>
    </div>
          </PageAnimation>
  )
}

export default NavBar