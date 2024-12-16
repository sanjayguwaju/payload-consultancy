import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const PartnershipLogoBlock: Block = {
  slug: 'partnershiplogoblock',
  interfaceName: 'PartnershipLogoBlock',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'logoType3',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Logo Type 1',
          value: 'logoType1',
        },
        {
          label: 'Logo Type 2',
          value: 'logoType2',
        },
        {
          label: 'Logo Type 3',
          value: 'logoType3',
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
    plural: 'PartnershipLogo Blocks',
    singular: 'PartnershipLogo Block',
  },
}