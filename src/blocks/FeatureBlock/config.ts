import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'  

export const Feature: Block = {
  slug: 'feature',
  interfaceName: 'FeatureBlock',
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
      name: 'media',
      type: 'array',
      fields: [
        {
          name: 'mediaItem',
          type: 'upload',
          relationTo: 'media',
          required: true,
        }
      ],
    },
  ],
  labels: {
    plural: 'Feature Blocks',
    singular: 'Feature Block',
  },
}
  