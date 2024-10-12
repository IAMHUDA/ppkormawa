import React from 'react'
import Hero from '../components/about/Hero'
import Slider from '../components/about/Slider'
import Slider2 from '../components/about/Slider2'
import Desc from '../components/about/Desc'
import Division from '../components/about/Division'

function About() {
  return (
    <div className="mx-w-full overflow-hidden">
      <Hero />
      <Slider/>
      <Slider2/>
      <Desc/>
      <Division/>
    </div>
  )
}

export default About
