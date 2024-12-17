import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const ReviewBlock: Block = {
  slug: 'reviewblock',
  interfaceName: 'ReviewBlock',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'reviewType3',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Review Type 1',
          value: 'reviewType1',
        },
        {
          label: 'Review Type 2',
          value: 'reviewType2',
        },
        {
          label: 'Review Type 3',
          value: 'reviewType3',
        },
      ],
      required: true,
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
    plural: 'Review Blocks',
    singular: 'Review Block',
  },
}