import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Header.css";
import Logo from '../assets/image/ppko.png';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1150);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle resizing of the screen to check if it's mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1150);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Mengatur threshold scroll untuk efek
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll); // Menambahkan event listener untuk scroll

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll); // Menghapus event listener saat komponen dibongkar
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderNavLinks = () => (
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink to="/HomePage" className="nav__link" onClick={closeMobileMenu}>
          Home
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/news" className="nav__link" onClick={closeMobileMenu}>
          Berita
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/about-us" className="nav__link" onClick={closeMobileMenu}>
          Tentang Kami
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/program" className="nav__link" onClick={closeMobileMenu}>
          Program
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/location" className="nav__link" onClick={closeMobileMenu}>
          Lokasi
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/get-started" className="nav__link nav__cta" onClick={closeMobileMenu}>
          Luaran
        </NavLink>
      </li>
    </ul>
  );

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          <div className="nav__logo-container">
            <img src={Logo} alt="PPKO Ormawa HIMFA UMY" className="nav__logo-img" />
            <span className="nav__logo-text">PPKO Ormawa HIMFA UMY</span>
          </div>
        </NavLink>
        {isMobile && (
          <div className="nav__toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </div>
        )}
        <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}>
          {renderNavLinks()}
        </div>
        {isMobile && isMenuOpen && (
          <div className="nav__close" onClick={toggleMenu} aria-label="Close menu">
            <IoClose />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
