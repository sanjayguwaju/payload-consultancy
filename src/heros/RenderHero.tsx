import React from 'react'

import type { Page } from '@/payload-types'

import { HighImpactHero } from '@/heros/HighImpact'
import { LowImpactHero } from '@/heros/LowImpact'
import { MediumImpactHero } from '@/heros/MediumImpact'
import { VeryHighImpactHero } from './VeryHighImpact'
import { NoticeModalClient } from '@/Notice/Component.client'
const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
  veryHighImpact: VeryHighImpactHero
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return (
    <>
      {/* Render the modal on the first visit during the session */}
      <NoticeModalClient />
      <HeroToRender {...props} />
    </>
  );
}
