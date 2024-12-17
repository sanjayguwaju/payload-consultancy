
import RichText from '@/components/RichText';
import Image from 'next/image'
import React from 'react'

export const ReviewType1 = (props: any) => {
  const { introContent, media } = props
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div>
          <h1>Review Section 1</h1>
        </div>
      </section>
    </>
  )
}
