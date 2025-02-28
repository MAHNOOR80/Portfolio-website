"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Navbarlinks from './navbarlinks';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './menuoverlay';
const navlinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [Navbaropen, setNavbaropen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-4">
        <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
          LOGO
        </Link>
        <div className='mobile-menu block md:hidden'>
          {!Navbaropen ? (
            <button
              onClick={() => setNavbaropen(true)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbaropen(false)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navlinks.map((link, index) => (
              <li key={index}>
                <Navbarlinks href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {Navbaropen && <MenuOverlay link={navlinks} />}
    </nav>
  );
};

export default Navbar;