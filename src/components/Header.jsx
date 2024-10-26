import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import Logo from '../assets/image/ppko.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinkClass = (path) => `
    text-white hover:text-orange-500 transition-colors duration-300
    px-4 py-2 rounded-full
    ${location.pathname === path ? "bg-orange-500 text-white" : "hover:bg-black/30"}
  `;

  const renderNavLinks = () => (
    <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
      {[
        { path: "/", label: "Home" },
        { path: "/Berita", label: "Berita" },
        { path: "/About", label: "About" },
        { path: "/Program", label: "Program" },
        { path: "/Lokasi", label: "Lokasi" },
        { path: "/Luaran", label: "Luaran" },
      ].map(({ path, label }) => (
        <li key={path}>
          <Link to={path} className={navLinkClass(path)}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${isScrolled ? "bg-black/90 shadow-lg" : "bg-transparent"}
      backdrop-blur-sm
    `}>
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="flex items-center space-x-3">
          <img src={Logo} alt="PPKO Ormawa HIMFA UMY" className="w-12 h-12 object-cover rounded-full" />
          <span className="text-xl font-bold font-serif text-orange-400">
            PPKO Ormawa HIMFA UMY
          </span>
        </Link>

        <div className="md:hidden z-50" onClick={toggleMenu}>
          {isMenuOpen ? <IoClose size={30} className="text-white" /> : <IoMenu size={30} className="text-white" />}
        </div>

        <div className={`
          fixed inset-0 md:static
          flex flex-col md:flex-row items-center h-72 sm:h-auto justify-center
          bg-black/65 md:bg-transparent
          transform ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}
          md:translate-y-0  transition-transform duration-300 ease-in-out
        `} ref={menuRef}>
          {renderNavLinks()}
        </div>
      </nav>
    </header>
  );
};

export default Header;
