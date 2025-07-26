"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import HeaderTitle from '@/components/sections/header-title'
import DetailBreadcrumb from '@/components/sections/detail/detail-breadcrumb'
import CommentContainer from '@/components/sections/detail/comment-container'
import ContentContainer from '@/components/sections/detail/content-container'
import PopularCard from '@/components/cards/popular-card'
import { Button } from '@/components/ui/button'
import DetailPagination from '@/components/sections/detail/detail-pagination'
import NewsContainer from '@/components/sections/detail/news-container'

export default function DetailPage() {
  const { category, id } = useParams<{ category: string, id: string }>()
  return (
    <>
      <main className='flex flex-col p-10'>
        <DetailBreadcrumb category={category} />
        <section className='flex gap-10'>
          <div>
            <ContentContainer category={category} />
            <CommentContainer />
            <DetailPagination />
            <NewsContainer />
          </div>
          <aside className='flex flex-col'>
            <HeaderTitle title='Berita Terpopuler' />
            <PopularCard
              index={1}
              text={"Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?"}
              category={"Politik"}
              date={"22 Jan 2024"}
            />
          </aside>
        </section>
      </main>
    </>
  )
}
