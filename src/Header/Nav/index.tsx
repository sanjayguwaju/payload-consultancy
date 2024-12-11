'use client'

import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink, CMSLinkType } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { cn } from 'src/utilities/cn' // Ensure you have a utility for classNames
import MobileNav from '../MobileNav'

type ExtendedCMSLinkType = CMSLinkType & {
  subLinks?: { subLink: ExtendedCMSLinkType }[] | null
}

type NavItemType = {
  link: ExtendedCMSLinkType
  subLinks?: { subLink: ExtendedCMSLinkType }[] | null
}

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []

  const renderNavItems = (items: NavItemType[], level = 0) => {
    return (
      <ul className={cn('flex flex-col', { 'flex-row gap-4': level === 0 })}>
        {items.map(({ link }, i) => {
          return (
            <li key={i} className="relative group">
              {/* Render CMSLink for the main link */}
              <CMSLink
                {...link}
                appearance="link"
                className={cn({
                  'font-bold text-[#1D1752]': level === 0,
                  'text-[#1D1752] py-1': level === 1,
                  'text-[#1D1753] py-1': level === 2,
                })}
              />

              {/* Render dropdown for subLinks if present */}
              {link.subLinks && link.subLinks.length > 0 && (
                <ul
                  className={cn(
                    'absolute hidden group-hover:flex flex-col px-4 py-4 w-72 text-black bg-white shadow-md rounded-sm',
                    { 'top-full left-0': level === 0, 'left-full top-0': level > 0 }
                  )}
                >
                  {renderNavItems(link.subLinks.map(({ subLink }) => ({
                    link: subLink, // Passing subLink object to renderNavItems
                  })), level + 1)}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <nav className="flex gap-4 items-center">
      {/* Render navigation items */}
      <div className="hidden sm:block">
        {renderNavItems(navItems)}
      </div>
      <Link href="/search" className='hidden sm:block'>
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-black" />
      </Link>

      <div className="block sm:hidden">
        <MobileNav navItems={navItems as any}/>
      </div>
    </nav>
  )
}
