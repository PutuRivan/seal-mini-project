import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PopularCardProps {
  index: number
  text: String
  category: String
  date: String
}

export default function PopularCard({ index, text, category, date }: PopularCardProps) {
  return (
    <div className="flex relative items-start gap-3 rounded-lg p-2 w-[500px] h-40 mt-5">
      {/* Nomor Urutan */}
      <div className="absolute w-8 h-8 left-1 -top-2 bg-[#1A1C22] text-white text-xs font-semibold flex items-center justify-center rounded-full mt-1">
        {index}
      </div>

      {/* Gambar */}
      <div className="w-60 h-32 overflow-hidden rounded-md flex-shrink-0">
        <Image
          src="/home-image.png"
          alt="Thumbnail Berita"
          width={240}
          height={130}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Konten */}
      <div className="flex flex-col justify-between gap-5">
        <div>
          <p className="text-sm font-bold text-black">
            {text}
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
          <Link href="/" className="text-blue-600 hover:underline">
            {category}
          </Link>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  )
}
