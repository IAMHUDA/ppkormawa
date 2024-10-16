import React from 'react';
import Banner from '../components/homes/Banner';
import About from '../components/homes/About';
import Program from '../components/homes/Program';
import Berita from '../components/homes/Berita'


function Home() {
  return (
    <>
    <div>
      <div className="mx-w-full overflow-hidden bg-black">
        <Banner/>
        <About/>
        <Program/>
        <Berita/>
      </div>
    </div>
    </>
  )
}

export default Home
