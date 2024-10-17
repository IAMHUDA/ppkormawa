import React from "react";
import Logo from '../assets/image/ppko.png'

function Footer() {
  return (
    <footer className="bg-black">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex justify-center text-teal-600 sm:justify-start">
          <img src={Logo} className="h-16 rounded-full" alt="" />
        </div>
        <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
