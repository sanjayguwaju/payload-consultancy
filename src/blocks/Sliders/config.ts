import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const sliderBlock: Block = {
  slug: 'sliderblock',
  interfaceName: 'Slider Block',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'sliderType1',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Slider Type 1',
          value: 'sliderType1',
        },
        {
          label: 'Slider Type 2',
          value: 'sliderType2',
        },
        {
          label: 'Slider Type 3',
          value: 'sliderType3',
        },
        {
          label: 'Slider Type 4',
          value: 'sliderType4',
        },
      ],
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
  ],
  labels: {
    plural: 'Slider Blocks',
    singular: 'Slider Block',
  },
}