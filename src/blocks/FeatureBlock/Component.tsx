
import RichText from '@/components/RichText'
import Image from 'next/image'
import React from 'react'

export const FeatureBlock = async (props: any) => {
  const { id, introContent, media } = props
  return (
    <>
      <div className="my-16" id={`block-${id}`}>
        <div className="max-w-6xl mx-auto text-center p-6">
          <RichText className="ml-0 max-w-[48rem] mx-auto" content={introContent} enableGutter={false} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {media?.map((item: any, index: any) => (
              <div key={index} className="bg-card p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
                <Image aria-hidden="true" alt={item.alt} src={item?.mediaItem.url} className="mb-4" />
                <h3 className="text-lg font-medium text-primary">{item?.mediaItem.alt}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
