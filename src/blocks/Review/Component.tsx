import React from 'react'
import { ReviewType1 } from './variants/ReviewType1'
import { ReviewType2 } from './variants/ReviewType2'
import { ReviewType3 } from './variants/ReviewType3'

const reviewVariants = {
  reviewType1: ReviewType1,
  reviewType2: ReviewType2,
  reviewType3: ReviewType3,
}

export const ReviewBlock = (props: any) => {
  const { type, introContent } = props
  
  if (type === 'none') {
    return null
  }

  const SelectedReviewComponent = reviewVariants[type] || null

  return (
    <>
      {SelectedReviewComponent ? <SelectedReviewComponent {...props} /> : null}
    </>
  )
}