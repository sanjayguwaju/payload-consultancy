
import RichText from '@/components/RichText';
import Image from 'next/image'
import React from 'react'

export const LogoType1 = (props: any) => {
  const { introContent, media } = props
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div>
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <RichText className="ml-0 max-w-[48rem] mx-auto" content={introContent as any} enableGutter={false} />
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
      </section>
    </>
  )
}
