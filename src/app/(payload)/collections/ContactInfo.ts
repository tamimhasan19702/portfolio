import type { CollectionConfig } from 'payload'

export const ContactInfo: CollectionConfig = {
  slug: 'contact-info',
  admin: { useAsTitle: 'title' },
  fields: [
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Email', value: 'email' },
        { label: 'WhatsApp', value: 'whatsapp' },
        { label: 'LinkedIn', value: 'linkedin' },
        { label: 'GitHub', value: 'github' },
      ],
    },
    { name: 'title', type: 'text', required: true },
    { name: 'value', type: 'text' },
    { name: 'url', type: 'text', required: true },
    { name: 'icon', type: 'text' },
    { name: 'displayOrder', type: 'number', defaultValue: 0 },
  ],
}
