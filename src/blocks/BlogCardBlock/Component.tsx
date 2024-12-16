
import RichText from '@/components/RichText'
import Image from 'next/image'
import React from 'react'

export const BlogCard = ( props: any) => {
  const { introContent, media } = props
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          {/* <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Wherever you want to go, we will get you there.
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Explore the best study destinations in the world! Learn all about the countries top
              universities, scholarships, cost of living, post-study work rights and more
            </p>
          </div> */}
          <RichText className="ml-0 max-w-[48rem] mx-auto" content={introContent} enableGutter={false} />
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
              <Image
                width={600}
                height={400}
                className="w-full"
                src="https://via.placeholder.com/600x400"
                alt="Marketing"
              />
              <div className="px-6 py-4">
                <h3 className="mb-2 text-xl font-bold dark:text-white">Study in UK</h3>
                <p className="text-gray-500 dark:text-gray-400">Learn more..</p>
              </div>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto">
              <Image
                width={600}
                height={400}
                className="w-full"
                src="https://via.placeholder.com/600x400"
                alt="Marketing"
              />
              <div className="px-6 py-4">
                <h3 className="mb-2 text-xl font-bold dark:text-white">Study in UK</h3>
                <p className="text-gray-500 dark:text-gray-400">Learn more..</p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
              <Image
                width={600}
                height={400}
                className="w-full"
                src="https://via.placeholder.com/600x400"
                alt="Marketing"
              />
              <div className="px-6 py-4">
                <h3 className="mb-2 text-xl font-bold dark:text-white">Study in UK</h3>
                <p className="text-gray-500 dark:text-gray-400">Learn more..</p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
              <Image
                width={600}
                height={400}
                className="w-full"
                src="https://via.placeholder.com/600x400"
                alt="Marketing"
              />
              <div className="px-6 py-4">
                <h3 className="mb-2 text-xl font-bold dark:text-white">Study in UK</h3>
                <p className="text-gray-500 dark:text-gray-400">Learn more..</p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
              <Image
                width={600}
                height={400}
                className="w-full"
                src="https://via.placeholder.com/600x400"
                alt="Marketing"
              />
              <div className="px-6 py-4">
                <h3 className="mb-2 text-xl font-bold dark:text-white">Study in UK</h3>
                <p className="text-gray-500 dark:text-gray-400">Learn more..</p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
              <Image
                width={600}
                height={400}
                className="w-full"
                src="https://via.placeholder.com/600x400"
                alt="Marketing"
              />
              <div className="px-6 py-4">
                <h3 className="mb-2 text-xl font-bold dark:text-white">Study in UK</h3>
                <p className="text-gray-500 dark:text-gray-400">Learn more..</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
