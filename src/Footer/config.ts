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