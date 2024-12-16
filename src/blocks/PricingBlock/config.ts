import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const PricingSection: Block = {
  slug: 'pricingsection',
  interfaceName: 'PricingSection',
  fields: [
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
        label: 'Feature Intro',
      },
    {
      name: 'plans',
      type: 'array',
      label: 'Pricing Plans',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Plan Name',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Plan Description',
          required: true,
        },
        {
          name: 'price',
          type: 'text',
          label: 'Price',
          required: true,
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          fields: [
            {
              name: 'feature',
              type: 'text',
              label: 'Feature',
              required: true,
            },
          ],
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link',
          required: false,
        },
      ],
    },
  ],
  labels: {
    plural: 'Pricing Blocks',
    singular: 'Pricing Block',
  },
}