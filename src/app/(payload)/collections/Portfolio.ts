import type { CollectionConfig } from 'payload'

export const Portfolio: CollectionConfig = {
  slug: 'portfolio',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Frontend', value: 'frontend' },
        { label: 'WordPress', value: 'wordpress' },
        { label: 'Speed & Bug Fix', value: 'speedbug' },
      ],
    },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'sourceUrl', type: 'text' },
    { name: 'sourceLabel', type: 'text', defaultValue: 'View source' },
    { name: 'demoUrl', type: 'text' },
    { name: 'demoLabel', type: 'text', defaultValue: 'Visit demo site' },
    { name: 'displayOrder', type: 'number', defaultValue: 0 },
    { name: 'featured', type: 'checkbox', defaultValue: false },
  ],
}
