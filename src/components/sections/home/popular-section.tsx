"use client"

import PopularCard from '@/components/cards/popular-card'
import { Tdata } from '@/libs/types';
import React, { useEffect, useState } from 'react'

export default function PopularSection() {
  const [data, setData] = useState<Tdata[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api-berita-indonesia.vercel.app/merdeka/jakarta');
      const parsed = await response.json();
      setData(parsed.data.posts);
    };

    fetchData();
  }, []);

  return (
    <section className='flex flex-col gap-5 my-10'>
      <h1 className='border-l-5 border-primary-900 px-5 rounded-l-xs font-bold text-2xl text-black'>Berita Popular</h1>
      <div className='flex flex-row items-center'>
        {data.splice(0, 3).map((item, index) => (
          <PopularCard
            key={index}
            index={index + 1}
            text={item.title}
            date={item.pubDate}
            thumbnail={item.thumbnail}
          />
        ))}
      </div>
    </section>
  )
}
