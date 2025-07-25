import { Button } from '@/components/ui/button'
import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCalendarEvent } from 'react-icons/bs'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";


export default function HeroSection() {
  return (
    <>
      <section className="flex flex-col gap-5">
        <div className='grid grid-cols-2 gap-5'>
          <div className="flex flex-col gap-10 px-10">
            <h1 className="font-semibold text-md">Headline</h1>
            <h1 className="font-bold text-4xl">Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3 Kualifikasi</h1>
            <p className="text-md">Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas Indonesia
              pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.
            </p>
            <p className="flex gap-2 items-center">
              <BsCalendarEvent />
              22 Januari 2024
            </p>
            <Link href={'/'}>
              <Button variant="link">
                Baca Selengkapnya
                <MoveUpRight width={20} />
              </Button>
            </Link>
          </div>
          <Image src={"/home-image.png"} alt="Example Image" height={400} width={800} className="rounded-2xl" />
        </div>
        <Pagination className="flex gap-96">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              dari
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>

    </>
  )
}
