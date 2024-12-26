import RichText from '@/components/RichText'
import Image from 'next/image'
import React from 'react'

export const FeatureType1 = (props: any) => {
  const { id, introContent, media } = props
  return (
    <>
      <div className="my-16" id={`block-${id}`}>
        <div className="max-w-6xl mx-auto text-center p-6">
          <RichText className="ml-0 max-w-[48rem] mx-auto" content={introContent} enableGutter={false} />
          <div className="flex flex-wrap justify-center gap-16 mt-6">
            {media?.map((item: any, index: any) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <Image width={130} height={130} aria-hidden="true" alt={item.alt} src={item?.mediaItem.url} className="mb-4" />
                <h3 className="text-lg font-medium text-primary">{item?.mediaItem.alt}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}