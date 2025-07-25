import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NewsCard() {
  return (
    <div className='flex flex-col gap-3 max-w-[276px] h-[360px]'>
      <Image
        src="/home-image.png"
        alt="Thumbnail Berita"
        width={65}
        height={130}
        className="w-full h-full object-cover rounded-2xl"
      />
      <h1>Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing Session di RSUD Dr. S.....</h1>
      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
        <Link href="/" className="text-blue-600 hover:underline">
          Nasional
        </Link>
        <span>•</span>
        <span>22 Jan 2024</span>
      </div>
    </div>
  )
}
