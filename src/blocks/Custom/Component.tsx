import React from 'react'
import { CustomType1 } from './variants/CustomType1'
import { CustomType2 } from './variants/CustomType2'
import { CustomType3 } from './variants/CustomType3'


const customVariants = {
  customType1: CustomType1,
  customType2: CustomType2,
  customType3: CustomType3,
}

export const CustomBlock = (props: any) => {
  const { type, introContent } = props
  
  if (type === 'none') {
    return null
  }

  const SelectedCustomComponent = customVariants[type] || null

  return (
    <>
      {SelectedCustomComponent ? <SelectedCustomComponent {...props} /> : null}
    </>
  )
}