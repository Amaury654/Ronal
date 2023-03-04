import Image from 'next/image'
import React from 'react'
import PageAnimation from '../pages/PageAnimation'

function SocialMediaRow() {
  
  return (
    <PageAnimation>
    <div className='flex items-center md:gap-1'>
    <a target='blank' href={'https://www.instagram.com/'}> <Image src='/img/instagramC.png' width={40} height={40} className=' w-[40px] md:w-[50px] cursor-pointer hover:opacity-70' /></a>
    <a target='blank' href={'https://twitter.com/'}>  <Image src='/img/TwitterC.png' width={40} height={40} className='w-[40px] md:w-[50px] cursor-pointer hover:opacity-70' /></a>
    <a target='blank' href={'https://www.facebook.com/'}>  <Image src='/img/facebookC.png' width={40} height={40} className='w-[40px] md:w-[50px] cursor-pointer hover:opacity-70' /></a>
    <a target='blank' href={'https://www.linkedin.com/'}>  <Image src='/img/LinkedInC.png' width={40} height={40} className='w-[40px] md:w-[50px] cursor-pointer hover:opacity-70' /></a>
   </div>
    </PageAnimation>
  )
}

export default SocialMediaRow