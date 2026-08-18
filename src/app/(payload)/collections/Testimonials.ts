import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: { useAsTitle: 'clientName' },
  fields: [
    { name: 'clientName', type: 'text', required: true },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'description', type: 'textarea', required: true },
    { name: 'displayOrder', type: 'number', defaultValue: 0 },
    { name: 'featured', type: 'checkbox', defaultValue: false },
  ],
}
