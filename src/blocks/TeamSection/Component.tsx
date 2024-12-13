
import RichText from '@/components/RichText'
import { TeamSection as TeamSectionProps } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const TeamSection: React.FC<TeamSectionProps> = (props) => {
  const { introContent, media } = props
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Our Team
              </h2>
              <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind
              </p> */}
            <RichText className="ml-0 max-w-[48rem] mx-auto" content={introContent as any} enableGutter={false} />
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {media?.map((item: any, index: number) => (
              <div key={index} className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <Link href="#">
                  <Image width={350} height={400} className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={item?.mediaItem.url} alt="Bonnie Avatar" />
                </Link>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Link href="#">{item?.name}</Link>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">{item?.title}</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    {item?.description}
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-center text-lg/8 font-semibold text-gray-900">
                Trusted by the world’s most innovative teams
              </h2>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <Image
                  alt="Transistor"
                  src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
                <Image
                  alt="Reform"
                  src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
                <Image
                  alt="Tuple"
                  src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
                <Image
                  alt="SavvyCal"
                  src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                />
                <Image
                  alt="Statamic"
                  src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Wherever you want to go, we will get you there.
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Explore the best study destinations in the world! Learn all about the countries top universities, scholarships, cost of living, post-study work rights and more
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
              <Image width={600} height={400} className="w-full" src="https://via.placeholder.com/600x400" alt="Marketing" />
              <div className="px-6 py-4">
                <h3 className="mb-2 text-xl font-bold dark:text-white">Study in UK</h3>
                <p className="text-gray-500 dark:text-gray-400">Learn more..</p>
              </div>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto">
              <Image width={600} height={400} className="w-full" src="https://via.placeholder.com/600x400" alt="Marketing" />
              <div className="px-6 py-4">
                <h3 className="mb-2 text-xl font-bold dark:text-white">Study in UK</h3>
                <p className="text-gray-500 dark:text-gray-400">Learn more..</p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
              <Image width={600} height={400} className="w-full" src="https://via.placeholder.com/600x400" alt="Marketing" />
              <div className="px-6 py-4">
                <h3 className="mb-2 text-xl font-bold dark:text-white">Study in UK</h3>
                <p className="text-gray-500 dark:text-gray-400">Learn more..</p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
              <Image width={600} height={400} className="w-full" src="https://via.placeholder.com/600x400" alt="Marketing" />
              <div className="px-6 py-4">
                <h3 className="mb-2 text-xl font-bold dark:text-white">Study in UK</h3>
                <p className="text-gray-500 dark:text-gray-400">Learn more..</p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
              <Image width={600} height={400} className="w-full" src="https://via.placeholder.com/600x400" alt="Marketing" />
              <div className="px-6 py-4">
                <h3 className="mb-2 text-xl font-bold dark:text-white">Study in UK</h3>
                <p className="text-gray-500 dark:text-gray-400">Learn more..</p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
              <Image width={600} height={400} className="w-full" src="https://via.placeholder.com/600x400" alt="Marketing" />
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
