import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function About() {
  return (
    
      <section>
  <div className="bg-black mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <motion.img
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, x: 0 }}
          alt=""
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHpxeTd1c3J0ZWd2aHdrN2k1ZDRwemRtMTBrOHFqYnNoYWpncTNmZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GZd8nPH3TcNSU/giphy.webp"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl text-white font-bold sm:text-4xl">Apa sih PPKO ormawa HIMFAUMY itu?</motion.h2>

        <motion.p 
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-4 text-white">
        PPKO Ormawa HIMFA UMY 2024 adalah singkatan dari Program Penguatan Kapasitas Organisasi Kemahasiswaan yang mengusung tema "TEROPONG JIWA: Terapi Okupasi Orang Dengan Gangguan Jiwa Berbasis Bank Sampah Melalui Optimalisasi Kader Kesehatan di Desa Hargorejo." Program ini berfokus pada kolaborasi lintas sektor, termasuk dengan masyarakat desa, tenaga kesehatan, dan mitra terkait, untuk menciptakan dampak sosial yang berkelanjutan. Dengan pendekatan berbasis komunitas, program ini diharapkan dapat membantu ODGJ untuk berinteraksi kembali dengan lingkungan mereka, sekaligus memberdayakan masyarakat melalui pengelolaan sampah yang baik dan terintegrasi. PPKO Ormawa HIMFA UMY 2024 juga melibatkan banyak mahasiswa sebagai agen perubahan, dengan harapan mereka bisa menerapkan ilmu yang didapat di dunia akademik untuk membantu masyarakat secara nyata.
        </motion.p>

        <Link
          to="/About"
          className="mt-8 inline-block rounded bg-orange-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          info lebih lanjut tentang kami
        </Link>
      </div>
    </div>
  </div>
</section>
    
  )
}

export default About
