
import RichText from '@/components/RichText';
import React from 'react'

export const ReviewType1 = (props: any) => {
  const { introContent, media, reviews} = props
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm mb-8 lg:mb-16">
            <RichText
              className="text-lg font-medium text-gray-800 dark:text-white"
              content={introContent}
              enableGutter={false}
            />
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {reviews && reviews?.map((review: any, index: number) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="mb-4 text-indigo-500">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 27"
                  >
                    <path d="M22 0H2C0.9 0 0 0.9 0 2v24c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2V2c0-1.1-0.9-2-2-2zm-9 21h-2v-2h2v2zm4.28-9.49l-3.8 3.56c-.39.36-.89.55-1.42.55h-.11v-2h.11l3.8-3.56c.77-.73 2.05-.71 2.78.07.75.76.77 2.04.03 2.81z" />
                  </svg>
                </div>
                <blockquote className="text-gray-600 dark:text-gray-300">
                  <p>{review?.content}</p>
                </blockquote>
                <div className="mt-6 text-center">
                  <p className="font-bold text-gray-800 dark:text-white">{review?.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{review?.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
