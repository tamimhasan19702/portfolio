import type { CollectionConfig } from 'payload'

export const SocialLinks: CollectionConfig = {
  slug: 'social-links',
  admin: { useAsTitle: 'platform' },
  fields: [
    { name: 'platform', type: 'text', required: true },
    { name: 'url', type: 'text', required: true },
    { name: 'icon', type: 'text' },
    { name: 'displayOrder', type: 'number', defaultValue: 0 },
  ],
}
