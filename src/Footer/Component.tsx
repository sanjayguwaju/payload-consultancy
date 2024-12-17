import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import type { Footer } from '@/payload-types'
import { FooterType1 } from './variants/FooterType1'
import { FooterType2 } from './variants/FooterType2'

const footerVariants = {
  footerType1: FooterType1,
  footerType2: FooterType2,
}

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer', 1)() as Footer
  const footerType = footer.type || "none";

  if (footerType === 'none') {
    return null
  }

  const SelectedLogoComponent = footerVariants[footerType] || null

  return (
    <>
      {SelectedLogoComponent ? <SelectedLogoComponent {...footer} /> : null}
    </>

  )
}
