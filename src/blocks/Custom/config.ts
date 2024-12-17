import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const CustomBlock: Block = {
  slug: 'customblock',
  interfaceName: 'Custom Block',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'customType1',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Custom Type 1',
          value: 'customType1',
        },
        {
          label: 'Custom Type 2',
          value: 'customType2',
        },
        {
          label: 'Custom Type 3',
          value: 'customType3',
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
    {
      name: 'reviews',
      type: 'array',
      fields: [
        {
          name: 'content',
          type: 'textarea',
          label: 'Review Content',
          required: true,
        },
        {
          name: 'author',
          type: 'text',
          label: 'Author Name',
          required: true,
        },
        {
          name: 'location',
          type: 'text',
          label: 'Author Location',
          required: true,
        },
      ],
    },
  ],
  labels: {
    plural: 'Custom Blocks',
    singular: 'Custom Block',
  },
}