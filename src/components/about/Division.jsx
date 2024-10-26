import React from "react";
import { motion } from 'framer-motion';
import Acara from "../../assets/image/acaratim.png";
import Logistik from "../../assets/image/logistiktim.png";
import Media from "../../assets/image/mediatim.png";
import Ph from "../../assets/image/phtim.png";

function Division() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold text-white mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            OUR DIVISION
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Logistik", image: Logistik },
            { name: "Ph", image: Ph },
            { name: "Media", image: Media },
            { name: "Acara", image: Acara }
          ].map((division, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={division.image}
                  alt={`${division.name} Team`}
                  className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-white">{division.name} Team</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Division;
