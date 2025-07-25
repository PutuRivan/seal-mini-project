import React from 'react'
import HeaderTitle from '../header-title'
import CommentTextBoxCard from '@/components/cards/comment-textbox-card'
import CommmentCard from '@/components/cards/comment-card'

export default function CommentContainer() {
  return (
    <div className='mt-10'>
      <HeaderTitle title='Komentar' />
      <CommentTextBoxCard />
      <CommmentCard />
    </div>
  )
}
