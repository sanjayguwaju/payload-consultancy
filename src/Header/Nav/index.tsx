'use client'

import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink, CMSLinkType } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { cn } from 'src/utilities/cn' // Ensure you have a utility for classNames

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
      <ul className={cn('flex flex-col', { 'flex-row gap-3': level === 0 })}>
        {items.map(({ link }, i) => {
          return (
            <li key={i} className="relative group">
              {/* Render CMSLink for the main link */}
              <CMSLink {...link} appearance="link" className={cn({ 'font-bold': level === 0 })} />

              {/* Render dropdown for subLinks if present */}
              {link.subLinks && link.subLinks.length > 0 && (
                <ul
                  className={cn(
                    'absolute hidden group-hover:flex flex-col text-black shadow-md border rounded p-2',
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
    <nav className="flex gap-3 items-center">
      {/* Render navigation items */}
      {renderNavItems(navItems)}

      {/* Render search link with an icon */}
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
    </nav>
  )
}
