import NewsCard from '@/components/cards/news-card'
import { Input } from '@/components/ui/input'
import { ArrowLeft, ArrowRight, SearchIcon } from 'lucide-react'
import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import HeaderTitle from '../header-title';

export default function RecomendationSection() {
  return (
    <section className='flex flex-col gap-5 my-10'>
      <div className='flex justify-between'>
        <div>
          <HeaderTitle title='Rekomendasi Untuk Anda' />
        </div>
        <div className='relative'>
          <Input className='w-96 p-6' placeholder='Cari Disini...' />
          <SearchIcon size={20} className='absolute right-3 top-3' />
        </div>
      </div>
      <div className='grid grid-cols-4 place-items-center gap-y-16'>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>

      <div className='flex flex-row justify-between items-center'>
        <p className=''>Showing 1 to 10 of 97 results</p>
        <Pagination >
          <PaginationContent className='gap-3'>
            <PaginationItem className='mx-2'>
              <PaginationLink
                size="default"
                href="#"
                className='gap-1 px-2.5 sm:pl-2.5'>
                <ArrowLeft />
                <span className="hidden sm:block">Previous</span>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className='mx-2'>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" >
                2
              </PaginationLink>
            </PaginationItem >
            <PaginationItem className='mx-2'>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem className='mx-2'>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem className='mx-2'>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem className='mx-2'>
              <PaginationLink
                size="default"
                href="#"
                className='gap-1 px-2.5 sm:pl-2.5'>
                <span className="hidden sm:block">Next</span>
                <ArrowRight />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

    </section>
  )
}