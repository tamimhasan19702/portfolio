import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'modalTitle', type: 'text', required: true },
    { name: 'modalDescription', type: 'textarea', required: true },
    {
      name: 'features',
      type: 'array',
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    { name: 'ctaText', type: 'text' },
    { name: 'ctaUrl', type: 'text' },
    { name: 'displayOrder', type: 'number', defaultValue: 0 },
  ],
}
