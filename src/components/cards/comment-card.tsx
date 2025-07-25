import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

export default function CommmentCard() {
  return (
    <>
      <div className='flex flex-row gap-5 mt-5 py-5 border-b-2 border-[#E0E0E0]'>
        <div>
          <figure className='w-10 h-10'>
            <Image
              src="/avatar.png"
              alt="Thumbnail Berita"
              width={50}
              height={50}
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-2 items-center'>
            <h1 className='text-[#526071] text-sm'>UJANG YUSMEIDI S.P., M.Agr.</h1>
            <span className='text-[#959EA9] text-sm'>•</span>
            <span className='text-[#959EA9] text-sm'>28 Mar 2024 11:15</span>
          </div>
          <p className='text-lg'>Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh ? Karena saya mau download ada konfirmasi bahwa TOTP aktivasi salah Bagaimana ya solusinya ?</p>
          <div >
            <Button variant={"link"} className='px-0 text-[#0090FF]'>Balas</Button>
            <ReplyCard />
          </div>
        </div>
      </div>


    </>
  )
}


function ReplyCard() {
  return (
    <div className='flex flex-row gap-5 mt-5'>
      <div>
        <figure className='w-10 h-10'>
          <Image
            src="/avatar.png"
            alt="Thumbnail Berita"
            width={50}
            height={50}
            className="w-full h-full object-cover"
          />
        </figure>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row gap-2 items-center'>
          <h1 className='text-[#526071] text-sm'>UJANG YUSMEIDI S.P., M.Agr.</h1>
          <span className='text-[#959EA9] text-sm'>•</span>
          <span className='text-[#959EA9] text-sm'>28 Mar 2024 11:15</span>
        </div>
        <p className='text-lg'>Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh ? Karena saya mau download ada konfirmasi bahwa TOTP aktivasi salah Bagaimana ya solusinya ?</p>
        <div >
          <Button variant={"link"} className='px-0 text-[#0090FF]'>Balas</Button>
        </div>
      </div>
    </div>
  )
}