import React from 'react'
import { motion } from "framer-motion";
import diary from '../../assets/image/diarys.png'
import { Link } from 'react-router-dom';

function Berita() {
  return (
    <section className='bg-black text-white'>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="max-w-3xl">
      <motion.h2 
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl font-bold sm:text-4xl">
      PPK Ormawa HIMFA UMY Hadirkan Web Diary's: Platform Konsultasi Kesehatan Mental
      </motion.h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <motion.img
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
          alt=""
          src={diary}
          className="absolute inset-0 h-full object-cover pt-8"
        />
      </div>

      <div className="lg:py-16">
        <motion.article 
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="space-y-4 ">
          <p>
          Salah satu inovasi terbaru dalam bidang kesehatan mental adalah pengembangan platform yang memungkinkan masyarakat untuk mengakses layanan konsultasi dengan mudah dan efektif. Platform ini dirancang untuk memberikan solusi yang lebih praktis bagi individu yang membutuhkan dukungan psikologis, tanpa harus menghadapi berbagai hambatan seperti jarak, waktu, atau stigma yang sering kali melekat pada upaya mencari bantuan kesehatan mental.
          </p>

          <p>
          Dengan fitur-fitur yang ramah pengguna dan terintegrasi, masyarakat dapat dengan cepat menghubungi tenaga profesional, seperti psikolog atau konselor, yang siap membantu mereka mengatasi berbagai permasalahan emosional, mental, maupun perilaku, sehingga tercipta sistem yang mendukung kesehatan mental secara lebih inklusif dan merata di berbagai lapisan masyarakat.
          </p>
        </motion.article>
        <Link
          to="https://kumparan.com/ppko-himfa-2024/ppk-ormawa-himfa-umy-hadirkan-web-diarys-platform-konsultasi-kesehatan-mental-23ZiQzRjtGZ/full"
          className="mt-8 inline-block rounded bg-orange-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Baca Berita Lengkap
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default Berita
