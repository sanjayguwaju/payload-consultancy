import React from 'react'
import { PartnershipLogoBlock } from '@/blocks/PartnershipLogoBlock/config'

const logoBlocks = {
  partnershipLogo: PartnershipLogoBlock,
}

console.log("logoBlocks--->", JSON.stringify(logoBlocks));

export const LogoBlockRenderer: React.FC<{ type: string; [key: string]: any }> = (props) => {
  const { type, ...rest } = props

  if (!type || type === 'none') return null

  const BlockToRender = logoBlocks[type]

  if (!BlockToRender) return null

  return <BlockToRender {...rest} />
}