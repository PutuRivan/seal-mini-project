"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const path = [
  {
    name: 'Beranda',
    path: '/'
  },
  {
    name: "Terbaru",
    path: "/terbaru"
  },
  {
    name: "Hiburan",
    path: "/hiburan"
  },
  {
    name: "Gaya Hidup",
    path: "/gaya-hidup"
  },
  {
    name: "Olahraga",
    path: "/olahraga"
  },
  {
    name: "Nasional",
    path: "/nasional"
  },
  {
    name: "International",
    path: "/international"
  }
]

export default function Navlink() {
  const pathname = usePathname()


  return (
    <>
      <div className='flex gap-4'>
        {path.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`${pathname === item.path ? "text-primary-900" : "text-gray-3"}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </>
  )
}
