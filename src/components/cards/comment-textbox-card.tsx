import Image from 'next/image'
import React from 'react'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

export default function CommentTextBoxCard() {
  return (
    <div className='flex flex-row gap-5 border-b-2 py-5 border-[#E0E0E0] '>
      <figure className='w-10 h-10'>
        <Image
          src="/avatar.png"
          alt="Thumbnail Berita"
          width={50}
          height={50}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className='pb-5 flex flex-col gap-2 w-full'>
        <Textarea
          rows={3}
          maxLength={50}
          placeholder='Apa yang ingin anda tanyakan?'
          className='w-full h-40 resize-none'
        />
        <p className='text-end text-xs text-[#526071]'>0/50</p>
        <Button className='w-fit'>Kirim</Button>
      </div>
    </div>
  )
}
