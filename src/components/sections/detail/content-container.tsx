import { Tdata } from '@/libs/types'
import { parsedDate } from '@/libs/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ContentContainerProps {
  data: Tdata[]
  category: string
}

export default function ContentContainer({ data, category }: ContentContainerProps) {
  return (
    <>
      {data.map((item: Tdata, index) => (
        <section key={index}>
          <div className='flex flex-col gap-3 py-5'>
            <h1 className='font-semibold text-4xl'>{data[0].title}</h1>
            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
              <Link href={`/${category}`} className="text-blue-600 hover:underline">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
              <span>•</span>
              <span>{parsedDate(item.pubDate)}</span>
            </div>
          </div>
          <figure className='flex flex-col gap-1'>
            <Image
              src={item.thumbnail}
              alt="Thumbnail Berita"
              width={240}
              height={130}
              className="w-full h-full object-cover rounded-2xl"
            />
            <figcaption className='text-sm text-[#959EA9]'>{item.title}</figcaption>
          </figure>
          <p className='text-sm py-5'>
            {item.description}
          </p>
        </section>
      ))}

    </>
  )
}
