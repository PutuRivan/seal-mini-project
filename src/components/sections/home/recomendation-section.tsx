"use client";

import NewsCard from '@/components/cards/news-card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, ArrowRight, SearchIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import HeaderTitle from '../header-title';
import { Tdata } from '@/libs/types';
import { Button } from '@/components/ui/button';

export default function RecomendationSection() {
  const [data, setData] = useState<Tdata[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api-berita-indonesia.vercel.app/antara/terbaru');
      const parsed = await response.json();
      setData(parsed.data.posts);
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const paginationItems = getPaginationItems(totalPages);

  return (
    <section className='flex flex-col gap-5 my-10'>
      {/* Header & Search */}
      <div className='flex justify-between items-center'>
        <HeaderTitle title='Rekomendasi Untuk Anda' />
        <div className='relative'>
          <Input className='w-96 p-6' placeholder='Cari Disini...' />
          <SearchIcon size={20} className='absolute right-3 top-3' />
        </div>
      </div>

      {/* News Card Grid */}
      <div className='grid grid-cols-4 place-items-center gap-y-16'>
        {currentItems.map((item, index) => (
          <NewsCard
            key={index}
            thumbnail={item.thumbnail}
            title={item.title}
            date={item.pubDate}
            source="antara"
            category="terbaru"
          />
        ))}
      </div>

      {/* Pagination */}
      <div className='flex flex-row justify-between items-center mt-20'>
        <p className='text-sm'>
          Showing {startIndex + 1} to {Math.min(endIndex, data.length)} of {data.length} results
        </p>

        <Pagination>
          <PaginationContent className='gap-2'>
            <PaginationItem>
              <PaginationLink>
                <Button
                  variant="link"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="text-black flex items-center gap-1 px-2.5 disabled:opacity-50"
                >
                  <ArrowLeft />
                </Button>
              </PaginationLink>
            </PaginationItem>

            {paginationItems.map((item, index) => (
              typeof item === 'number' ? (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={currentPage === item}
                    onClick={() => setCurrentPage(item)}
                    className='cursor-pointer'
                  >
                    {item}
                  </PaginationLink>
                </PaginationItem>
              ) : (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              )
            ))}

            <PaginationItem>
              <PaginationLink>
                <Button
                  variant="link"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="text-black flex items-center gap-1 px-2.5 disabled:opacity-50"
                >
                  <ArrowRight />
                </Button>
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}

// Helper function to generate 1, 2, ..., (n-1), n with ellipsis
const getPaginationItems = (total: number): (number | string)[] => {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  return [1, 2, "...", total - 1, total];
};
