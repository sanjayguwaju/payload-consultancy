import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'  

export const TeamSection: Block = {
  slug: 'teamsection',
  interfaceName: 'TeamSection',
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
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Job Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
        // {
        //   name: 'socialLinks',
        //   type: 'array',
        //   label: 'Social Media Links',
        //   fields: [
        //     {
        //       name: 'platform',
        //       type: 'text',
        //       label: 'Platform Name',
        //       required: true,
        //     },
        //     {
        //       name: 'url',
        //       type: 'text',
        //       label: 'Platform URL',
        //       required: true,
        //     },
        //     {
        //       name: 'icon',
        //       type: 'text',
        //       label: 'Icon SVG Path or URL',
        //       required: true,
        //     },
        //   ],
        // },
      ],
    },
  ],
  labels: {
    plural: 'Team Sections',
    singular: 'Team Section',
  },
}
  