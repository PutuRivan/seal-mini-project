import React, { useEffect, useState } from 'react'
import NewsHeader from './news-header'
import NewsCard from '@/components/cards/news-card'
import { Tdata } from '@/libs/types';

export default function NewsContainer() {
  const [data, setData] = useState<Tdata[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api-berita-indonesia.vercel.app/antara/terbaru');
      const parsed = await response.json();
      setData(parsed.data.posts.slice(0, 4));
    };

    fetchData();
  }, []);
  return (
    <>
      <NewsHeader />
      <div className='grid grid-cols-4 gap-5'>
        {data.map((item: Tdata, index) => (
          <NewsCard
            key={index}
            date={item.pubDate}
            thumbnail={item.thumbnail}
            title={item.title}
            source="antara"
            category="terbaru"
          />
        ))}
      </div>
    </>
  )
}
