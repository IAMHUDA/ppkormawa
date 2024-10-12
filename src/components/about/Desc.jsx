import React from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/image/ppko.png";

function Desc() {
  return (
    <section className="bg-black">
      <div className="container sm:h-screen mx-auto bg-black sm:w-full w-11/12 pt-20 p-6 sm:px-20 lg:px-40 flex flex-col items-center">
        <div className="flex flex-col-reverse sm:flex-row sm:mb-20 mb-0 items-center sm:space-x-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl lg:text-9xl font-bold font-Dancingscript mb-12 sm:mb-24 text-white text-center sm:text-left"
          >
            Tentang PPKO ORMAWA
          </motion.h2>
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            src={Logo}
            className="w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-72 mb-8 sm:mb-0 rounded-3xl"
            alt="Logo"
          />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white font-Montserrat text-center font-bold text-sm sm:text-lg lg:text-xl leading-relaxed"
        >
          <p className="text-orange-400">TEROPONG JIWA :</p> TERAPI OKUPASI ORANG DENGAN
          GANGGUAN JIWA BERBASIS BANK SAMPAH
          MELALUI OPTIMALISASI KADER KESEHATAN
          DESA HARGOREJO
        </motion.p>
      </div>
    </section>
  );
}

export default Desc;
