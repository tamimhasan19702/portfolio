import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: { group: 'Settings' },
  fields: [
    { name: 'siteTitle', type: 'text', defaultValue: "Tareq Monower Tamim's Portfolio" },
    { name: 'favicon', type: 'upload', relationTo: 'media' },
    {
      name: 'navLinks',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
        { name: 'icon', type: 'text' },
      ],
    },
    {
      name: 'footerLinks',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        { name: 'platform', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
        { name: 'icon', type: 'text' },
      ],
    },
    {
      name: 'contactInfo',
      type: 'array',
      fields: [
        { name: 'type', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'value', type: 'text' },
        { name: 'url', type: 'text' },
        { name: 'icon', type: 'text' },
      ],
    },
    { name: 'copyright', type: 'text', defaultValue: '\u00A9 Tareq Monower Tamim. All rights reserved' },
  ],
}
