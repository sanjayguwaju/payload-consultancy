import React from 'react'
import { CustomHeroType1 } from './variants/CustomType1'
import { CustomHeroType2 } from './variants/CustomType2'
import { CustomHeroType3 } from './variants/CustomType3'


const customHeroVariants = {
  customHeroType1: CustomHeroType1,
  customHeroType2: CustomHeroType2,
  customHeroType3: CustomHeroType3,
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