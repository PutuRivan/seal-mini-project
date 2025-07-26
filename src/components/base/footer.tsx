import Image from 'next/image'
import React from 'react'
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'
import { Input } from '../ui/input'
import { Send } from 'lucide-react'
import Navlink from './navlink'

export default function Footer() {
  return (
    <footer className='px-10 py-16 flex justify-between bg-[#2C3C4D] mt-10'>
      <div className='flex flex-col gap-16'>
        <figure className='flex flex-col gap-3'>
          <Image
            src="/Logo-white.png"
            alt="Vercel Logo"
            width={200}
            height={150} />
          <figcaption className='text-xs text-[#F2F2F2]'>&copy; 2023. All Rights Reserved.</figcaption>
        </figure>

        <div className='flex flex-col gap-3'>
          <p className='text-white font-semibold text-xl'>Ikuti Kami</p>
          <div className='flex gap-3 mt-2'>
            <div className='flex items-center gap-2 bg-[#E0E0E0] p-2 rounded-lg'>
              <BsYoutube size={20} />
            </div>
            <div className='flex items-center gap-2 bg-[#E0E0E0] p-2 rounded-lg'>
              <BsInstagram size={20} />
            </div>
            <div className='flex items-center gap-2 bg-[#E0E0E0] p-2 rounded-lg'>
              <BsFacebook size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-20'>
        <div className='flex flex-col gap-4'>
          <h1 className='font-semibold text-xl text-white'>Telusuri</h1>
          <Navlink scrolled footer />
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='font-semibold text-xl text-white'>Bantuan</h1>
          <p className='text-sm text-white'>Kontak Kami</p>
          <p className='text-sm text-white'>Laporan Pembajakan</p>
          <p className='text-sm text-white'>Kebijakan</p>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='font-semibold text-2xl text-white'>Berlangganan Berita Terbaru</h1>
        <div className='relative'>
          <Input placeholder='Masukkan Email' size={30} className='bg-white p-6' />
          <div className='absolute right-2 top-2 bg-primary-500 p-2 rounded-lg'>
            <Send size={22} fill='white' color='var(--primary-500)' />
          </div>
        </div>
      </div>
    </footer>
  )
}
