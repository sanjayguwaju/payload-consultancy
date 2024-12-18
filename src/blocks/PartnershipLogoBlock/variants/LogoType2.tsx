/* eslint-disable @next/next/no-img-element */

import React from 'react'

export const LogoType2 = (props: any) => {
  const { introContent, media } = props
  const companies = [
    { name: 'Tuple', logo: 'https://www.tuple.app/favicon.ico' },
    { name: 'Reform', logo: 'https://reform.app/favicon.ico' },
    { name: 'SavvyCal', logo: 'https://savvycal.com/favicon.ico' },
    { name: 'Laravel', logo: 'https://laravel.com/img/favicon/favicon.ico' },
    { name: 'Transistor', logo: 'https://transistor.fm/favicon.ico' },
    { name: 'Statamic', logo: 'https://statamic.com/favicon.ico' },
  ];
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Trusted by the most innovative teams</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {companies.map((company) => (
                <div key={company.name} className="flex items-center justify-center">
                  <img src={company.logo} alt={company.name} className="h-12" />
                </div>
              ))}
            </div>
          </div>
        </div>
        );
      </section>
    </>
  )
}
