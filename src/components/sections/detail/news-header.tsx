import React from 'react'
import HeaderTitle from '../header-title'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NewsHeader() {
  return (
    <div className='flex flex-row justify-between items-center'>
      <HeaderTitle title='Berita Terkait' />
      <Link href={"/terbaru"}>
        <Button
          variant={"secondary"}
          size={"lg"}
          className='cursor-pointer'
        >
          Lihat Semua
        </Button>
      </Link>
    </div>
  )
}
