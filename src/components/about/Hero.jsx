import React from 'react'
import fullteam from '../../assets/image/fulltim.png';
import { section } from 'framer-motion/client';

function Hero() {
  return (
    <div className='mx-auto sm:px-20 mt-28 sm:mt-0 sm:h-screen flex items-center'>
      <img src={fullteam} className='bg-black sm:mt-24' alt="foto full team" />
    </div>
  )
}

export default Hero
