import type { CollectionConfig } from 'payload'

export const Profile: CollectionConfig = {
  slug: 'profile',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
  ],
}
