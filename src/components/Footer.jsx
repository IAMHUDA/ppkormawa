import React from "react";
import Logo from '../assets/image/ppko.png'
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";


function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img
              src={Logo}
              className="h-20 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 mb-4"
              alt="PPKO Logo"
            />
            <h3 className="text-xl font-bold mb-2">PPKO Ormawa HIMFA UMY</h3>
            <p className="text-sm text-gray-400 text-center md:text-left">
              Mengembangkan potensi mahasiswa melalui program-program inovatif.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 transition">Beranda</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Program</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Berita</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Tentang Kami</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-orange-500 transition" title="Instagram">
                <FaInstagramSquare />
              </a>
              <a href="#" className="text-2xl hover:text-orange-500 transition" title="TikTok">
                <AiFillTikTok />
              </a>
              <a href="#" className="text-2xl hover:text-orange-500 transition" title="YouTube">
                <IoLogoYoutube />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PPKO Ormawa HIMFA UMY. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
