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

interface NavlinkProps {
  scrolled: boolean
  footer?: boolean
}
export default function Navlink({ scrolled, footer }: NavlinkProps) {
  const pathname = usePathname()

  return (
    <>
      <div className={`flex ${footer ? "flex-col" : "flex-row"} gap-4`}>
        {path.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`
            ${scrolled
                ? pathname === item.path
                  ? "text-white"
                  : "text-gray-300"
                : pathname === item.path
                  ? "text-blue-500"
                  : "text-gray-500"
              }
          `}>
            {item.name}
          </Link>
        ))}
      </div>
    </>
  )
}
