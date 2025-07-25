import React from 'react'
import NewsHeader from './news-header'
import NewsCard from '@/components/cards/news-card'

export default function NewsContainer() {
  return (
    <>
      <NewsHeader />
      <div className='grid grid-cols-4 gap-5'>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </>
  )
}
