import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface NewsCardProps {
  thumbnail: string
  title: string
  date: string
}

export default function NewsCard({ thumbnail, title, date }: NewsCardProps) {
  const dateParsed = new Date(date);

  const dd = String(dateParsed.getUTCDate()).padStart(2, '0');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const mm = months[dateParsed.getUTCMonth()];
  const yy = String(dateParsed.getUTCFullYear()).slice(-2);

  const parsedDate = `${dd} ${mm} ${yy}`;

  return (
    <div className='flex flex-col gap-3 max-w-[276px] h-[360px]'>
      <Image
        src={thumbnail}
        alt="Thumbnail Berita"
        width={65}
        height={130}
        className="w-full h-full object-cover rounded-2xl"
      />
      <h1 className='text-lg font-bold'>{title}</h1>
      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
        <Link href="/" className="text-blue-600 hover:underline">
          Nasional
        </Link>
        <span>•</span>
        <span>{parsedDate}</span>
      </div>
    </div>
  )
}
