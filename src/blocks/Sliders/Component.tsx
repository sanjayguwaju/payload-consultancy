import React from 'react'
import { SliderType1 } from './variants/SliderType1'
import { SliderType2 } from './variants/SliderType2'
import { SliderType3 } from './variants/SliderType3'

const sliderVariants = {
  sliderType1: SliderType1,
  sliderType2: SliderType2,
  sliderType3: SliderType3,
}

export const SliderBlock = (props: any) => {
  const { type } = props
  
  if (type === 'none') {
    return null
  }

  const SelectedLogoComponent = sliderVariants[type] || null

  return (
    <>
      {SelectedLogoComponent ? <SelectedLogoComponent {...props} /> : null}
    </>
  )
}