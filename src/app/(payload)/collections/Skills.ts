import type { CollectionConfig } from 'payload'

export const Skills: CollectionConfig = {
  slug: 'skills',
  admin: { useAsTitle: 'name' },
  fields: [
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'WordPress', value: 'wordpress' },
        { label: 'Frontend', value: 'frontend' },
      ],
    },
    { name: 'name', type: 'text', required: true },
    {
      name: 'level',
      type: 'select',
      required: true,
      options: [
        { label: 'Expert', value: 'expert' },
        { label: 'Intermediate', value: 'intermediate' },
        { label: 'Basic', value: 'basic' },
      ],
    },
    { name: 'displayOrder', type: 'number', defaultValue: 0 },
  ],
}
