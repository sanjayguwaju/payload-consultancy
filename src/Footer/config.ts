import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'footerType3',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Footer Type 1',
          value: 'footerType1',
        },
        {
          label: 'Footer Type 2',
          value: 'footerType2',
        },
        {
          label: 'Footer Type 3',
          value: 'footerType3',
        },
      ],
      required: true,
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
        {
          name: 'category',
          type: 'select',
          options: [
            {
              label: 'Resources',
              value: 'resources',
            },
            {
              label: 'Follow Us',
              value: 'followUs',
            },
            {
              label: 'Legal',
              value: 'legal',
            },
          ],
          required: true,
        },
      ],
      maxRows: 6,
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}