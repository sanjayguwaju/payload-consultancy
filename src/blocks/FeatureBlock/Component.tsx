import React from 'react'
import { FeatureType1 } from './variants/FeatureType1'


const featureVariants = {
  featureType1: FeatureType1,
}

export const FeatureBlock = (props: any) => {
  const { type, introContent } = props

  if (type === 'none') {
    return null
  }

  const SelectedFeatureComponent = featureVariants[type] || null

  return (
    <>
      {SelectedFeatureComponent ? <SelectedFeatureComponent {...props} /> : null}
    </>
  )
}