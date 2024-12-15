import React from 'react'
import { PartnershipLogoBlock } from '@/blocks/PartnershipLogoBlock/config'

const logoBlocks = {
  partnershipLogo: PartnershipLogoBlock,
}

export const LogoBlockRenderer: React.FC<{ type: string; [key: string]: any }> = (props) => {
  const { type, ...rest } = props
  console.log({type});

  if (!type || type === 'none') return null

  const BlockToRender = logoBlocks[type]

  if (!BlockToRender) return null

  return <BlockToRender {...rest} />
}