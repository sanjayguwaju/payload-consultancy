import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const CustomHeroBlock: Block = {
  slug: 'customheroblock',
  interfaceName: 'Custom Hero Block',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'customHeroType1',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Custom Hero Type 1',
          value: 'customHeroType1',
        },
        {
          label: 'Custom Hero Type 2',
          value: 'customHeroType2',
        },
        {
          label: 'Custom Hero Type 3',
          value: 'customHeroType3',
        },
        {
          label: 'Custom Hero Type 4',
          value: 'customHeroType4',
        },
        {
          label: 'Custom Hero Type 5',
          value: 'customHeroType5',
        },
      ],
      required: true,
    },
    {
      name: 'isReverse',
      type: 'checkbox',
      label: 'Reverse Hero Layout',
      defaultValue: false,
    },
    {
      name: 'introContent',
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
    plural: 'Custom Hero Blocks',
    singular: 'Custom Hero Block',
  },
}