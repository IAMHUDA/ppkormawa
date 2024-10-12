import React from 'react'
import { FaCircle } from "react-icons/fa";
import Marquee from 'react-fast-marquee';

function Slider() {
  return (
    <div className='bg-orange-500 py-2' id='container-slider'>
      <Marquee direction="right"> {/* Arah slider dibalik ke kanan */}
        <div className='flex items-center mx-4 text-white'>
          <FaCircle className='text-2xl mr-4' />
          <h2 className='text-2xl font-semibold'>PPKO ORMAWA</h2>
        </div>
        <div className='flex items-center mx-4 text-white'>
          <FaCircle className='text-2xl mr-4' />
          <h2 className='text-2xl font-semibold'>PPKO ORMAWA</h2>
        </div>
        <div className='flex items-center mx-4 text-white'>
          <FaCircle className='text-2xl mr-4' />
          <h2 className='text-2xl font-semibold'>PPKO ORMAWA</h2>
        </div>
        <div className='flex items-center mx-4 text-white'>
          <FaCircle className='text-2xl mr-4' />
          <h2 className='text-2xl font-semibold'>PPKO ORMAWA</h2>
        </div>
        <div className='flex items-center mx-4 text-white'>
          <FaCircle className='text-2xl mr-4' />
          <h2 className='text-2xl font-semibold'>PPKO ORMAWA</h2>
        </div>
        <div className='flex items-center mx-4 text-white'>
          <FaCircle className='text-2xl mr-4' />
          <h2 className='text-2xl font-semibold'>PPKO ORMAWA</h2>
        </div>
        <div className='flex items-center mx-4 text-white'>
          <FaCircle className='text-2xl mr-4' />
          <h2 className='text-2xl font-semibold'>PPKO ORMAWA</h2>
        </div>
        <div className='flex items-center mx-4 text-white'>
          <FaCircle className='text-2xl mr-4' />
          <h2 className='text-2xl font-semibold'>PPKO ORMAWA</h2>
        </div>
        <div className='flex items-center mx-4 text-white'>
          <FaCircle className='text-2xl mr-4' />
          <h2 className='text-2xl font-semibold'>PPKO ORMAWA</h2>
        </div>
      </Marquee>
    </div>
  )
}

export default Slider;
