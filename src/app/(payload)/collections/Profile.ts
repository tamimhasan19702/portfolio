import type { CollectionConfig } from 'payload'

export const Profile: CollectionConfig = {
  slug: 'profile',
  auth: true,
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'greeting', type: 'text', defaultValue: "Hello, I'm" },
    { name: 'bio', type: 'textarea', required: true },
    { name: 'cvUrl', type: 'text' },
    { name: 'profileImage', type: 'upload', relationTo: 'media' },
    { name: 'aboutImage', type: 'upload', relationTo: 'media' },
    {
      name: 'stats',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'value', type: 'text', required: true },
        { name: 'icon', type: 'text' },
      ],
    },
  ],
}
