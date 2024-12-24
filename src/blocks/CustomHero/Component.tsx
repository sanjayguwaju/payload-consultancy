import React from 'react'
import { CustomHeroType1 } from './variants/CustomHeroType1'
import { CustomHeroType2 } from './variants/CustomHeroType2'
import { CustomHeroType3 } from './variants/CustomHeroType3'
import { CustomHeroType4 } from './variants/CustomHeroType4'
import { CustomHeroType5 } from './variants/CustomHeroType5'


const customHeroVariants = {
  customHeroType1: CustomHeroType1,
  customHeroType2: CustomHeroType2,
  customHeroType3: CustomHeroType3,
  customHeroType4: CustomHeroType4,
  customHeroType5: CustomHeroType5,
}

export const CustomHeroBlock = (props: any) => {
  const { type, introContent } = props
  
  if (type === 'none') {
    return null
  }

  const SelectedCustomHeroComponent = customHeroVariants[type] || null

  return (
    <>
      {SelectedCustomHeroComponent ? <SelectedCustomHeroComponent {...props} /> : null}
    </>
  )
}