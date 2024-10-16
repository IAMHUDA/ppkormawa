import React from 'react'
import { Link } from 'react-router-dom';
import kegiatan from '../../assets/image/program.jpg';
import { motion } from "framer-motion";

function Program() {
  return (
    <section className='bg-black'>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src={kegiatan}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <motion.div className="relative flex items-center bg-orange-500"
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, y: 0 }}>
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-orange-500"
        ></span>

        <div className="p-8 text-white sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
            PROGRAM KAMI : TERAPI OKUPASI ORANG DENGAN GANGGUAN JIWA
          </h2>

          <p className="mt-4 text-white">
          Terapi Okupasi untuk Orang Dengan Gangguan Jiwa (ODGJ) merupakan salah satu program unggulan kami yang dirancang secara khusus untuk mendukung proses pemulihan ODGJ melalui berbagai kegiatan yang berbasis lingkungan dan berfokus pada aspek sosial. Program ini tidak hanya membantu ODGJ dalam memperbaiki kemampuan berinteraksi dengan lingkungan sekitar, tetapi juga memberdayakan mereka dengan keterampilan praktis yang dapat digunakan dalam kehidupan sehari-hari. Melalui inisiatif Bank Sampah, kami tidak hanya mengatasi masalah lingkungan tetapi juga mengoptimalkan keterlibatan aktif masyarakat dalam menciptakan lingkungan yang lebih bersih, sehat, dan berkelanjutan. Dengan demikian, program ini memberikan dampak positif ganda, yakni membantu pemulihan ODGJ sekaligus mendorong kesadaran lingkungan dan gotong-royong di masyarakat.
          </p>

          <Link
            to="/Luaran"
            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            More info
          </Link>
        </div>
      </motion.div>
    </div>
  </div>
</section>
  )
}

export default Program
