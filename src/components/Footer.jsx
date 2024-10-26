import React from "react";
import Logo from '../assets/image/ppko.png'
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { Link } from "react-router-dom";


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
              <li><Link to="/Home" className="hover:text-orange-500 transition">Beranda</Link></li>
              <li><Link to="/Program" className="hover:text-orange-500 transition">Program</Link></li>
              <li><Link to="/Berita" className="hover:text-orange-500 transition">Berita</Link></li>
              <li><Link to="/About" className="hover:text-orange-500 transition">Tentang Kami</Link></li>
              <li><Link to="/Lokasi" className="hover:text-orange-500 transition">Lokasi Kami</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ppkormawa.himfa/" className="text-2xl hover:text-orange-500 transition" title="Instagram">
                <FaInstagramSquare />
              </a>
              <a href="https://www.tiktok.com/@ppkormawa.himfa" className="text-2xl hover:text-orange-500 transition" title="TikTok">
                <AiFillTikTok />
              </a>
              <a href="https://www.youtube.com/@himfaumy5962" className="text-2xl hover:text-orange-500 transition" title="YouTube">
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
