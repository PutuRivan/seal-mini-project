import PopularCard from '@/components/cards/popular-card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PopularSection() {
  return (
    <section className='flex flex-col gap-5 my-10'>
      <h1 className='border-l-5 border-primary-900 px-5 rounded-l-xs font-bold text-2xl text-black'>Berita Popular</h1>
      <div className='flex flex-row items-center'>
        <PopularCard
          index={1}
          text={"Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?"}
          category={"Politik"}
          date={"22 Jan 2024"}
        />
        <div className='border-1 border-gray-200 h-24 mx-5' />
        <PopularCard
          index={2}
          text={"Daftar 6 Lahan Tambang Jatah Ormas Agama, NU Dapat Bekas Grup Bakrie"}
          category={"Nasional"}
          date={"22 Jan 2024"}
        />
        <div className='border-1 border-gray-200 h-24 mx-5' />
        <PopularCard
          index={3}
          text={"Kementerian BUMN Mulai Uji Coba Pegawai Kerja 4 Hari Sepekan"}
          category={"Nasional"}
          date={"22 Jan 2024"}
        />
      </div>
    </section>
  )
}
