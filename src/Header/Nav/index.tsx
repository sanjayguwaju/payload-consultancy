'use client'

import React, { useState, useEffect, useRef } from 'react'
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
  const [activeDropdown, setActiveDropdown] = useState<{ [key: number]: string | null }>({})

  // Ref to handle click outside
  const navRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = (label: string, level: number) => {
    setActiveDropdown((prev) => ({
      ...prev,
      [level]: prev[level] === label ? null : label,
    }))
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setActiveDropdown({})
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const renderNavItems = (items: NavItemType[], level = 0) => {
    return (
      <ul className={cn('flex flex-col', { 'flex-row gap-4': level === 0 })}>
        {items.map((data, i) => {
          const isActive = activeDropdown[level] === data?.link?.label
          return (
            <li key={`${data.link.label}-${i}`} className="relative">
              {/* Render CMSLink for the main link */}
              <button
                onClick={() => {
                  if (
                    data?.link?.subLinks &&
                    data?.link?.subLinks?.length > 0 &&
                    typeof data?.link?.label === 'string'
                  ) {
                    toggleDropdown(data?.link?.label, level)
                  }
                }}
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 focus:outline-none"
              >
                <CMSLink
                  {...data?.link}
                  appearance="link"
                  className={cn({
                    'font-bold text-[#1D1752]': level === 0,
                    'text-[#1D1752] py-1': level === 1,
                    'text-[#1D1753] py-1': level === 2,
                  })}
                />

                {data?.link?.subLinks && data?.link?.subLinks?.length > 0 && (
                  <svg
                    className={`w-6 h-6 ml-2 transition-transform ${isActive ? 'rotate-180' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
              </button>

              {/* Render dropdown for subLinks if present */}
              {data?.link?.subLinks && data?.link?.subLinks.length > 0 && (
                <ul
                  className={cn(
                    'absolute flex-col px-4 py-4 w-72 text-black bg-white shadow-md rounded-sm transition-all duration-300',
                    {
                      'block': isActive,
                      'hidden': !isActive,
                    },
                    { 'top-full left-0': level === 0, 'left-full top-0': level > 0 }
                  )}
                >
                  {renderNavItems(
                    data?.link?.subLinks.map(({ subLink }) => ({
                      link: subLink, // Passing subLink object to renderNavItems
                    })),
                    level + 1
                  )}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <nav className="flex gap-4 items-center" ref={navRef}>
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
