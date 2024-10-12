import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import Logo from '../assets/image/ppko.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation(); // Hook untuk mendapatkan lokasi URL saat ini

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderNavLinks = () => (
    <ul className="flex flex-col font-medium  md:flex-row gap-4 md:gap-8">
      <li>
        <Link
          to="/"
          
          className={`text-white hover:text-orange-500 hover:bg-black hover:rounded-3xl ${location.pathname === "/" ? "bg-orange-500	 text-white px-6 py-3 rounded-3xl" : ""}`}>
          home
        </Link>
      </li>
      <li>
        <Link
          to="/Berita"
          
          className={`text-white hover:text-orange-500 hover:bg-black hover:rounded-3xl ${location.pathname === "/Berita" ? "bg-orange-500	 text-white px-6 py-3 rounded-3xl" : ""}`}>
          Berita
        </Link>
      </li>
      <li>
        <Link
          to="/About"
          
          className={`text-white hover:text-orange-500 hover:bg-black hover:rounded-3xl ${location.pathname === "/About" ? "bg-orange-500	 text-white px-6 py-3 rounded-3xl" : ""}`}>
          About
        </Link>
      </li>
      <li>
        <Link
          to="/Program"
          
          className={`text-white hover:text-orange-500 hover:bg-black hover:rounded-3xl ${location.pathname === "/Program" ? "bg-orange-500	 text-white px-6 py-3 rounded-3xl" : ""}`}>
          Program
        </Link>
      </li>
      <li>
        <Link
          to="/Lokasi"
          
          className={`text-white hover:text-orange-500 hover:bg-black hover:rounded-3xl ${location.pathname === "/Lokasi" ? "bg-orange-500	 text-white px-6 py-3 rounded-3xl" : ""}`}>
          Lokasi
        </Link>
      </li>
      <li>
        <Link
          to="/Luaran"
          
          className={`text-white hover:text-orange-500 hover:bg-black hover:rounded-3xl ${location.pathname === "/Luaran" ? "bg-orange-500	 text-white px-6 py-3 rounded-3xl" : ""}`}>
          Luaran
        </Link>
      </li>
    </ul>
  );

  return (
    <header className={`fixed bg-black rounded-b-3xl drop-shadow-2xl py-2 shadow-[#FFCFB3] top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black shadow-lg" : "bg-transparent"}`}>
      <nav className="container mx-auto flex justify-around items-center py-4 px-6">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="PPKO Ormawa HIMFA UMY" className="w-[50px] h-[50px] object-cover rounded-[50%]"  />
          <span className="ml-2 text-2xl  font-bold font-Dancingscript" style={{ color: 'rgb(255, 175, 0)' }}>PPKO Ormawa HIMFA UMY</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50 text-white" onClick={toggleMenu}>
          {isMenuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </div>

        {/* Menu Links */}
        <div className={`fixed inset-0 h-[300px] sm:h-12 rounded-2xl pt-11 md:bg-transparent bg-black md:static md:flex items-center md:space-x-6 p-6 md:p-0 transform ${isMenuOpen ? "translate-x-40   "  : "translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out`} ref={menuRef}>
          {renderNavLinks()}
        </div>
      </nav>
    </header>
  );
};

export default Header;
