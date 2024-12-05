
import RichText from '@/components/RichText'
import React from 'react'

export const FeatureBlock = async (props: any) => {
  const { id, introContent, limit: limitFromProps, populateBy, selectedDocs } = props
  return (
    <>
      <div className="my-16" id={`block-${id}`}>
        <div className="max-w-6xl mx-auto text-center p-6 flex items-center">
          <RichText className="ml-0 max-w-[48rem]" content={introContent} enableGutter={false} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="bg-card p-4 rounded-lg shadow-md">
              <img aria-hidden="true" alt="Kathmandu" src="https://res.cloudinary.com/dz3facqgc/image/upload/v1733367257/drjtuldleergctrj126n.png" />
              <h3 className="mt-2 text-lg font-medium text-primary">Kathmandu</h3>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-md">
              <img aria-hidden="true" alt="Chitwan" src="https://res.cloudinary.com/dz3facqgc/image/upload/v1733367278/ckhl9yvmcn3suyfkjwuy.png" />
              <h3 className="mt-2 text-lg font-medium text-primary">Chitwan</h3>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-md">
              <img aria-hidden="true" alt="Pokhara" src="https://res.cloudinary.com/dz3facqgc/image/upload/v1733367202/xve26ucwnm2zzsytzvr3.png" />
              <h3 className="mt-2 text-lg font-medium text-primary">Pokhara</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
