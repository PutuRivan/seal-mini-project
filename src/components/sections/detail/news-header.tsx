import React from 'react'
import HeaderTitle from '../header-title'
import { Button } from '@/components/ui/button'

export default function NewsHeader() {
  return (
    <div className='flex flex-row justify-between items-center'>
      <HeaderTitle title='Berita Terkait' />
      <Button
        variant={"secondary"}
        size={"lg"}
      >
        Lihat Semua
      </Button>
    </div>
  )
}
