import { parsedDate } from '@/libs/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface NewsCardProps {
  thumbnail: string
  title: string
  date: string
  source: string
  category: string
}

export default function NewsCard({ thumbnail, title, date, source, category }: NewsCardProps) {
  return (
    <div className='flex flex-col gap-3 max-w-[276px] h-[360px]'>
      <Image
        src={thumbnail}
        alt="Thumbnail Berita"
        width={65}
        height={130}
        className="w-full h-full object-cover rounded-2xl"
      />
      <Link href={{
        pathname: `/recomendation/${title}`,
        query: {
          source: source,
          category: category
        }
      }} className='text-lg font-bold'>{title}</Link>
      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
        <Link href="/nasional" className="text-blue-600 hover:underline">
          Nasional
        </Link>
        <span>•</span>
        <span>{parsedDate(date)}</span>
      </div>
    </div>
  )
}
