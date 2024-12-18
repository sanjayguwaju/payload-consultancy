import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const StoryBlock: Block = {
  slug: 'storyblock',
  interfaceName: 'Story Block',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'storyType1',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Story Type 1',
          value: 'storyType1',
        },
        {
          label: 'Story Type 2',
          value: 'storyType2',
        },
        {
          label: 'Story Type 3',
          value: 'storyType3',
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
    plural: 'Story Blocks',
    singular: 'Story Block',
  },
}