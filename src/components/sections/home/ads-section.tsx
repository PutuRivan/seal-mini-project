import { Circle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function AdsSection() {
  return (
    <section className="flex flex-col gap-5 items-center my-5">
      <Image
        src="/ads.png"
        alt="Example Image"
        height={400}
        width={800}
        className="rounded-2xl" />
      <div className='flex gap-2'>
        <Circle size={12} fill='blue' />
        <Circle size={12} fill='blue' />
        <Circle size={12} fill='blue' />
      </div>
    </section>
  )
}
