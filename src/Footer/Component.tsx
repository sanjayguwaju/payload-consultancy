import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import Logo  from '@/components/Logo/Logo'

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer', 1)() as Footer

  const navItems = footer?.navItems || []

  const categorizedNavItems = {
    resources: navItems.filter(item => item?.category === 'resources'),
    followUs: navItems.filter(item => item.category === 'followUs'),
    legal: navItems.filter(item => item.category === 'legal'),
  }

  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link className="flex items-center" href="/">
              <Logo />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                {categorizedNavItems.resources.map(({ link }, i) => (
                  <li key={i} className="mb-4">
                    <CMSLink className="hover:underline" {...link} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                {categorizedNavItems.followUs.map(({ link }, i) => (
                  <li key={i} className="mb-4">
                    <CMSLink className="hover:underline" {...link} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                {categorizedNavItems.legal.map(({ link }, i) => (
                  <li key={i} className="mb-4">
                    <CMSLink className="hover:underline" {...link} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com" className="hover:underline">Swot Consultancy Services</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <nav className="flex flex-col md:flex-row gap-4">
              {navItems.map(({ link }, i) => (
                <CMSLink className="text-white" key={i} {...link} />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
