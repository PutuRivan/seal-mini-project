import Image from 'next/image'
import React from 'react'
import Navlink from './navlink'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between h-[106px] px-10 border-1 border-gray-6'>
      <div className=''>
        <Image src="/Logo.svg" alt="Vercel Logo" width={160} height={44} />
      </div>
      <div className="">
        <Navlink />
      </div>
    </nav>
  )
}