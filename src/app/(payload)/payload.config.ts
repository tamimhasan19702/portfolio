import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Profile } from './collections/Profile'
import { Hero } from './collections/Hero'
import { SocialLinks } from './collections/SocialLinks'
import { Skills } from './collections/Skills'
import { Timeline } from './collections/Timeline'
import { Services } from './collections/Services'
import { Portfolio } from './collections/Portfolio'
import { Testimonials } from './collections/Testimonials'
import { ContactInfo } from './collections/ContactInfo'
import { Media } from './collections/Media'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Profile.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Profile,
    Hero,
    SocialLinks,
    Skills,
    Timeline,
    Services,
    Portfolio,
    Testimonials,
    ContactInfo,
    Media,
  ],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
})
