"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Navlink from './navlink'

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`flex items-center justify-between h-[106px] w-full px-10 border-1 border-gray-6 z-50 -top-0 sticky ${scrolled ? "bg-blue-500" : "bg-transparent"}`}>
      <div className=''>
        {scrolled ?
          <Image src={"/Logo-white.png"} alt="Logo" width={160} height={44} />
          :
          <Image src="/Logo.svg" alt="Logo" width={160} height={44} />
        }
      </div>
      <div className="">
        <Navlink scrolled={scrolled}/>
      </div>
    </nav>
  )
}