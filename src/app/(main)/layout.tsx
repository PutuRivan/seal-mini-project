import Footer from '@/components/base/footer';
import Navbar from '@/components/base/navbar';
import React from 'react'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
