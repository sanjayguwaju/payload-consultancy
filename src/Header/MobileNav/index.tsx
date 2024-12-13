'use client'

import React, { useRef, useState, useCallback } from 'react'
import { CMSLink } from '@/components/Link'
import { cn } from 'src/utilities/cn'
import { ExtendedCMSLinkType, MobileNavProps } from '../header.types'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import { useOnClickOutside } from '../hooks/useOnClickOutside'
import { useEscapeKey } from '../hooks/useEscapeKey'
import { useFocusManagement } from '../hooks/useFocusManagement'
import Link from 'next/link'
import Logo from '@/components/Logo/Logo'


const MobileNav: React.FC<MobileNavProps> = ({ navItems }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<{ [key: number]: string | null }>({})
  const [isPressed, setIsPressed] = useState(false)

  const sidebarRef = useRef<HTMLDivElement>(null)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
    setIsPressed((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => { 
    setSidebarOpen(false); 
    setIsPressed(false) 
  }, [])
  
  const toggleDropdown = useCallback((label: string, level: number) => {
    setActiveDropdown((prev) => ({
      ...prev,
      [level]: prev[level] === label ? null : label,
    }))
  }, [])

  useLockBodyScroll(isSidebarOpen)

  useOnClickOutside(sidebarRef as any, closeSidebar, isSidebarOpen)

  const handleEsc = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeSidebar()
    }
  }, [closeSidebar])
  useEscapeKey(handleEsc, isSidebarOpen)

  useFocusManagement(sidebarRef as any, isSidebarOpen, toggleButtonRef as any)

  const renderNavItems = useCallback((navItems: ExtendedCMSLinkType[], level = 0) => {
    return (
      <ul className="space-y-2">
      {navItems.map((item, i) => {
        return (
          <li key={i} className="relative">
            {/* Main Link */}
            <button
              onClick={() =>
                item?.link?.subLinks && item?.link?.subLinks.length > 0
                  ? toggleDropdown(item.link.label, level)
                  : undefined
              }
              className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <CMSLink
                {...item.link}
                appearance="link"
                className={cn({
                  'font-bold text-[#1D1752] text-lg no-underline': level === 0,
                  'font-bold text-[#1D1752] py-1': level === 1,
                  'text-[#1D1753] py-1': level === 2,
                })}
              />
              {/* Toggle dropdown icon */}
              {item.link?.subLinks && item.link?.subLinks.length > 0 && (
                <svg
                  className={`w-6 h-6 transition-transform ${activeDropdown[level] === item.link.label ? 'rotate-180' : ''
                    } ml-auto`}
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

            {/* Render subLinks if dropdown is active */}
            {item?.link?.subLinks && item?.link?.subLinks.length > 0 && activeDropdown[level] === item?.link?.label && (
              <ul className="py-2 pl-6 space-y-2">
                {renderNavItems(item?.link.subLinks.map(({ subLink }: any) => ({
                  link: subLink, // Passing subLink object to renderNavItems
                })), level + 1)}
              </ul>
            )}
          </li>
        )
      })}
    </ul>
    )
  }, [activeDropdown, toggleDropdown])

  return (
    <>
      <button
        className="group inline-flex w-12 h-12 text-slate-800 bg-white text-center items-center justify-center rounded shadow-[0_1px_0_theme(colors.slate.950/.04),0_1px_2px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] hover:shadow-[0_1px_0_theme(colors.slate.950/.04),0_4px_8px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] transition"
        aria-pressed={isPressed} 
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        aria-expanded={isSidebarOpen}
        ref={toggleButtonRef}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <rect className="origin-center group-[[aria-pressed=true]]:rotate-[315deg] group-[[aria-pressed=true]]:[y:7] group-[[aria-pressed=true]]:[x:0] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]" y="2" x="7" width="9" height="2" rx="1"></rect>
          <rect className="origin-center group-[[aria-pressed=true]]:rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]" y="7" width="16" height="2" rx="1"></rect>
          <rect className="origin-center group-[[aria-pressed=true]]:rotate-[135deg] group-[[aria-pressed=true]]:[y:7] group-[[aria-pressed=true]]:[x:0] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]" y="12" width="9" height="2" rx="1"></rect>
        </svg>
      </button>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-slate-300 opacity-50 transition-opacity"
          onClick={closeSidebar}
          aria-hidden="true"
        ></div>
      )}

      <aside
        id="default-sidebar"
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 w-80 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } sm:translate-x-0 bg-white border-r border-gray-200`}
        aria-label="Sidenav"
      >
        <Link className="flex items-center mt-2 mx-2" href="/">
          <Logo />
        </Link>
        <div className="overflow-y-auto py-5 px-3 h-full">
          {renderNavItems(navItems)}
        </div>
      </aside>
    </>
  )
}

export default MobileNav
