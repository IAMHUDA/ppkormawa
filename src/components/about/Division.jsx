import React from "react";
import { motion } from 'framer-motion';
import Acara from "../../assets/image/acaratim.png";
import Logistik from "../../assets/image/logistiktim.png";
import Media from "../../assets/image/mediatim.png";
import Ph from "../../assets/image/phtim.png";

function Division() {
  return (
    <section className="bg-black">
      <span className="flex text-white items-center mb-10 sm:mb-20">
        <span className="h-px flex-1 bg-white"></span>
        <span className="shrink-0 px-4 sm:px-6 text-3xl sm:text-5xl font-bold font-Dancingscript">
          OUR DIVISION
        </span>
        <span className="h-px flex-1 bg-yellow-500"></span>
      </span>
      <div className="container mx-auto min-h-screen bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
          {/* Division Logistik */}
          <motion.a initial={{ opacity: 0, y: 50 }} transition={{ duration: 2 }} whileInView={{ opacity: 1, y: 0 }} href="#" className="block">
            <img
              alt="Logistik Team"
              src={Logistik}
              className="h-40 w-full sm:h-56 lg:h-72 object-contain bg-white rounded-bl-3xl rounded-tr-3xl"
            />
            <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4 text-center">
              <strong className="font-medium text-lg sm:text-xl text-white">Team</strong>
              <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
              <p className="mt-0.5 text-lg sm:mt-0 text-white">Logistik</p>
            </div>
          </motion.a>

          {/* Division Ph */}
          <motion.a initial={{ opacity: 0, y: 50 }} transition={{ duration: 2 }} whileInView={{ opacity: 1, y: 0 }} href="#" className="block">
            <img
              alt="Ph Team"
              src={Ph}
              className="h-40 w-full sm:h-56 lg:h-72 object-contain bg-white rounded-bl-3xl rounded-tr-3xl"
            />
            <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4 text-center">
              <strong className="font-medium text-lg sm:text-xl text-white">Team</strong>
              <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
              <p className="mt-0.5 text-lg sm:mt-0 text-white">Ph</p>
            </div>
          </motion.a>

          {/* Division Media */}
          <motion.a initial={{ opacity: 0, y: 50 }} transition={{ duration: 2 }} whileInView={{ opacity: 1, y: 0 }} href="#" className="block">
            <img
              alt="Media Team"
              src={Media}
              className="h-40 w-full sm:h-56 lg:h-72 object-contain bg-white rounded-bl-3xl rounded-tr-3xl"
            />
            <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4 text-center">
              <strong className="font-medium text-lg sm:text-xl text-white">Team</strong>
              <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
              <p className="mt-0.5 text-lg sm:mt-0 text-white">Media</p>
            </div>
          </motion.a>

          {/* Division Acara */}
          <motion.a initial={{ opacity: 0, y: 50 }} transition={{ duration: 2 }} whileInView={{ opacity: 1, y: 0 }} href="#" className="block">
            <img
              alt="Acara Team"
              src={Acara}
              className="h-40 w-full sm:h-56 lg:h-72 object-contain bg-white rounded-bl-3xl rounded-tr-3xl"
            />
            <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4 text-center">
              <strong className="font-medium text-lg sm:text-xl text-white">Team</strong>
              <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
              <p className="mt-0.5 text-lg sm:mt-0 text-white">Acara</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Division;
