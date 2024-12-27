import type { CollectionConfig } from 'payload'

import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { authenticated } from '@/access/authenticated'
import { anyone } from '@/access/anyone'

export const Notices: CollectionConfig = {
    slug: 'notices',
    access: {
        create: authenticated,
        delete: authenticated,
        read: anyone,
        update: authenticated,
    },
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text'
        },
        {
            name: 'type',
            type: 'select',
            defaultValue: 'noticeType1',
            label: 'Type',
            options: [
                {
                    label: 'None',
                    value: 'none',
                },
                {
                    label: 'Notice Type 1',
                    value: 'noticeType1',
                },
                {
                    label: 'Notice Type 2',
                    value: 'noticeType2',
                },
                {
                    label: 'Notice Type 3',
                    value: 'noticeType3',
                },
                {
                    label: 'Notice Type 4',
                    value: 'noticeType4',
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
            name: 'mediaItem',
            type: 'upload',
            relationTo: 'media',
        }
    ],
}
