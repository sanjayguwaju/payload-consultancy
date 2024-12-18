import React from 'react'
import { StoryType1 } from './variants/StoryType1'
import { StoryType2 } from './variants/StoryType2'
import { StoryType3 } from './variants/StoryType3'


const storyVariants = {
  storyType1: StoryType1,
  storyType2: StoryType2,
  storyType3: StoryType3,
}

export const StoryBlock = (props: any) => {
  const { type, introContent } = props
  
  if (type === 'none') {
    return null
  }

  const SelectedStoryComponent = storyVariants[type] || null

  return (
    <>
      {SelectedStoryComponent ? <SelectedStoryComponent {...props} /> : null}
    </>
  )
}