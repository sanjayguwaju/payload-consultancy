import React from 'react'
import { LogoType1 } from './variants/LogoType1'
import { LogoType2 } from './variants/LogoType2'
import { LogoType3 } from './variants/LogoType3'

const logoVariants = {
  logoType1: LogoType1,
  logoType2: LogoType2,
  logoType3: LogoType3,
}

export const PartnershipLogoBlock = (props: any) => {
  const { type } = props
  console.log({ type })

  if (type === 'none') {
    return null
  }

  const SelectedLogoComponent = logoVariants[type] || null

  return (
    <>
      {SelectedLogoComponent ? <SelectedLogoComponent {...props} /> : null}
    </>
  )
}