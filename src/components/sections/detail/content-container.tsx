import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ContentContainerProps {
  category: string
  thumbnail: string
}

export default function ContentContainer({ category, thumbnail }: ContentContainerProps) {
  return (
    <>
      <div className='flex flex-col gap-3 py-5'>
        <h1 className='font-semibold text-4xl'>Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing Session di RSUD Dr. Soetomo</h1>
        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
          <Link href={`/${category}`} className="text-blue-600 hover:underline">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
          <span>•</span>
          <span>22 Jan 2024</span>
        </div>
      </div>
      <figure className='flex flex-col gap-1'>
        <Image
          src={thumbnail}
          alt="Thumbnail Berita"
          width={240}
          height={130}
          className="w-full h-full object-cover rounded-2xl"
        />
        <figcaption className='text-sm text-[#959EA9]'>Rumput GBK tidak kunjung bagus, Timnas Indonesia bisa pindah kandang. (CNN Indonesia/Adhi Wicaksono)</figcaption>
      </figure>
      <p className='text-sm py-5'>
        Jakarta, CNN Indonesia --Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas
        Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga
        Kualifikasi Piala Dunia 2026. Akhir-akhir ini rumput lapangan Stadion
        GBK yang jadi markas Indonesia dalam babak kedua Kualifikasi Piala Dunia 2026 kerap bermasalah.
        Pada pertandingan kandang pertama melawan Vietnam, Maret lalu, rumput GBK rusak parah.
        PPKGBK selalu pengelola pun mendapat kritik deras.
      </p>
      <p className='text-sm py-5'>
        Acara-acara di luar sepak bola itu kerap membuat kondisi rumput tidak sehat dan tidak
        terlihat bagus saat pertandingan, khususnya laga Timnas Indonesia.
        Sampai saat melawan Irak, rumput GBK tidak terlihat sempurna meskipun
        kondisinya lebih bagus dibanding lawan Vietnam. Opsi pindah kandang pun muncul.
      </p>
      <p className='text-sm py-5'>
        &quot;Nanti kami akan sampaikan [rencana pindah dari GBK],&quot; ujar Sumardji saat ditanya kemungkinan menggunakan stadion lain di putaran ketiga kualifikasi.
        Sumardji tidak membantah kondisi rumput GBK yang masih kurang bagus dalam duel Indonesia vs Irak. PSSI pun berharap PPKGBK bisa lebih memperhatikan
        kondisi rumput untuk pertandingan Skuad Garuda. &quot;Kami sampai saat ini sudah telepon dengan pengelola GBK karena kondisi
        rumput kemarin kurang bagus, kami memohon ke pihak GBK supaya betul-betul disiapkan dan diperhatikan kondisi rumput,&quot; tutur Sumardji. &quot;Kalau dilihat-lihat
        sepertinya kondisi rumput GBK kayaknya stres itu, sehingga dengan kondisi itu akan memengaruhi, tadi saya telepon supaya diperhatikan,&quot; kata Sumardji menambahkan.
      </p>

    </>
  )
}
