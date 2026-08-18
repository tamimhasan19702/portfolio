import type { CollectionConfig } from 'payload'

export const Timeline: CollectionConfig = {
  slug: 'timeline',
  admin: { useAsTitle: 'company' },
  fields: [
    { name: 'company', type: 'text', required: true },
    { name: 'period', type: 'text', required: true },
    { name: 'role', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    { name: 'url', type: 'text' },
    { name: 'urlLabel', type: 'text' },
    { name: 'displayOrder', type: 'number', defaultValue: 0 },
  ],
}
