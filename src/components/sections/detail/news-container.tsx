import React from 'react'
import NewsHeader from './news-header'
import NewsCard from '@/components/cards/news-card'

export default function NewsContainer() {
  return (
    <>
      <NewsHeader />
      <div className='grid grid-cols-4 gap-5'>
        <NewsCard
          date='2024-12-31T17:00:00.000Z'
          thumbnail='http://klimg.com/merdeka.com/i/w/news/2022/03/21/1418558/670x335/cara-daftar-bpjs-kesehatan-online-antiribet.jpg'
          title='Cara Daftar BPJS Kesehatan Online Antiribet'
        />
        <NewsCard
          date='2023-07-04T10:39:12.000Z'
          thumbnail='http://klimg.com/merdeka.com/i/w/news/2023/07/04/1565585/670x335/menengok-pusat-pelatihan-kerja-daerah-jaktim-bagi-warga-ber-ktp-dki-jakarta.jpg'
          title='Menengok Pusat Pelatihan Kerja Daerah Jaktim Bagi Warga Ber-KTP DKI Jakarta'
        />
        <NewsCard
          date='2023-07-02T03:58:00.000Z'
          thumbnail='http://klimg.com/merdeka.com/i/w/news/2023/07/02/1564994/670x335/ramainya-cfd-bundaran-hi-di-hari-terakhir-libur-idul-adha.jpg'
          title='Ramainya CFD Bundaran HI di Hari Terakhir Libur Idul Adha'
        />
        <NewsCard
          date='2023-07-02T03:33:05.000Z'
          thumbnail='http://klimg.com/merdeka.com/i/w/news/2023/07/02/1564992/670x335/penampilan-polwan-cantik-patroli-cfd-jadi-rebutan-warga-berswafoto.jpg'
          title='Penampilan Polwan Cantik Patroli CFD Jadi Rebutan Warga Berswafoto'
        />
      </div>
    </>
  )
}
