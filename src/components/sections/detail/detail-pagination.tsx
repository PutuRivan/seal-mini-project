import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function DetailPagination() {
  return (
    <div className='flex flex-row justify-between items-center py-10'>
      <p className=''>Item per page 5 of 200</p>
      <Pagination >
        <PaginationContent className='gap-3'>
          <PaginationItem className='mx-2'>
            <PaginationLink
              size="default"
              href="#"
              className='gap-1 px-2.5 sm:pl-2.5'>
              <ChevronLeft />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className='mx-2'>
            <PaginationLink href="#" isActive variant='link'>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" >
              2
            </PaginationLink>
          </PaginationItem >
          <PaginationItem className='mx-2'>
            <PaginationLink
              size="default"
              href="#"
              className='gap-1 px-2.5 sm:pl-2.5'>
              <ChevronRight />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
