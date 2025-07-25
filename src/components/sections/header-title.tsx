import React from 'react'

interface HeaderTitleProps {
  title: string

}

export default function HeaderTitle({ title }: HeaderTitleProps) {
  return (
    <>
      <h1 className='border-l-5 border-primary-900 px-5 my-5 rounded-l-xs font-bold text-2xl text-black'>
        {title}
      </h1>
    </>
  )
}
