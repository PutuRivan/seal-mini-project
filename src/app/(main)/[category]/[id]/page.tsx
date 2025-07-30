"use client"

import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import HeaderTitle from '@/components/sections/header-title'
import DetailBreadcrumb from '@/components/sections/detail/detail-breadcrumb'
import CommentContainer from '@/components/sections/detail/comment-container'
import ContentContainer from '@/components/sections/detail/content-container'
import PopularCard from '@/components/cards/popular-card'
import { Button } from '@/components/ui/button'
import DetailPagination from '@/components/sections/detail/detail-pagination'
import NewsContainer from '@/components/sections/detail/news-container'
import { Tdata } from '@/libs/types'

export default function DetailPage() {
  const [detail, setDetail] = useState<Tdata[]>([])
  const [popular, setPopular] = useState<Tdata[]>([])
  const { category } = useParams<{ category: string, id: string }>()
  const query = useSearchParams()
  const decodedsource = decodeURIComponent(query.get('source') || '')
  const decodedcategory = decodeURIComponent(query.get('category') || '')

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`https://api-berita-indonesia.vercel.app/${decodedsource}/${decodedcategory}`);
        const popular = await fetch(`https://api-berita-indonesia.vercel.app/merdeka/jakarta`);
        const result = await res.json();
        const popularResult = await popular.json();
        setDetail(result.data.posts.slice(0, 1).map((item: Tdata) => item));
        setPopular(popularResult.data.posts.slice(0, 3));
      } catch (err) {
        console.error(err);
      }
    };

    if (decodedsource || decodedcategory) {
      fetchNews();
    }

  }, [decodedsource, decodedcategory]);

  return (
    <>
      <main className='flex flex-col p-10'>
        <DetailBreadcrumb category={category} />
        <section className='flex gap-10'>
          <div>
            <ContentContainer category={category} data={detail} />
            <CommentContainer />
            <DetailPagination />
            <NewsContainer />
          </div>
          <aside className='flex flex-col'>
            <HeaderTitle title='Berita Terpopuler' />
            {popular.map((item, index) => (
              <PopularCard
                key={index}
                index={index + 1}
                text={item.title}
                date={item.pubDate}
                thumbnail={item.thumbnail}
                source="merdeka"
                category="jakarta"
              />
            ))}
          </aside>
        </section>
      </main>
    </>
  )
}
