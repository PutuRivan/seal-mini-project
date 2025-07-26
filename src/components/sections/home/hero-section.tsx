'use client';

import React, { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import Link from 'next/link';
import { Tdata } from '@/libs/types';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BsCalendarEvent } from 'react-icons/bs';

export default function NewsCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const [data, setData] = useState<Tdata[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('https://api-berita-indonesia.vercel.app/sindonews/nasional/');
        const result = await res.json();
        setData(result.data.posts.slice(0, 5));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <section className="flex flex-col gap-5">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {data.map((item, i) => (
          <div key={i} className="keen-slider__slide grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-10 px-10">
              <p className="font-semibold text-md">Berita Nasional Terkini dan Terbaru Hari Ini - SINDOnews</p>
              <h2 className="font-bold text-4xl">{item.title}</h2>
              <p className="text-md">{item.description}</p>
              <div className="flex gap-2 items-center">
                <BsCalendarEvent />
                <span>{new Date(item.pubDate).toLocaleDateString('id-ID', {
                  year: 'numeric', month: 'long', day: 'numeric'
                })}</span>
              </div>
              <Link href={""} className="text-sm text-blue-600 mt-2 hover:underline inline-block">
                Baca Selengkapnya ↗
              </Link>
            </div>
            <Image
              src={item.thumbnail}
              alt="Example Image"
              height={400} width={800}
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 280px"
            />
          </div>
        ))}
      </div>

      {/* Tombol Navigasi di Bawah */}
      <div className="mt-4 flex items-center justify-center gap-6">
        <Button
          variant="link"
          size="icon"
          onClick={() => instanceRef.current?.prev()}
          className='text-[#828282]'
        >
          <ChevronLeft />
        </Button>

        <span className="text-sm text-muted-foreground">
          {currentSlide + 1} dari {data.length}
        </span>

        <Button
          variant="link"
          size="icon"
          className='text-[#828282]'
          onClick={() => instanceRef.current?.next()}
        >
          <ChevronRight />
        </Button>
      </div>
    </section>
  );
}
