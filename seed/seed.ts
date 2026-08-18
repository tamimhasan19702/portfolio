import { getPayload } from 'payload'
import config from '../src/app/(payload)/payload.config'

import heroData from './data/hero.json'
import socialLinksData from './data/social-links.json'
import skillsData from './data/skills.json'
import timelineData from './data/timeline.json'
import servicesData from './data/services.json'
import portfolioData from './data/portfolio.json'
import testimonialsData from './data/testimonials.json'
import contactInfoData from './data/contact-info.json'
import siteSettingsData from './data/site-settings.json'

async function seed() {
  const payload = await getPayload({ config })

  console.log('Seeding database...')

  // Hero
  console.log('Seeding hero...')
  const existingHero = await payload.find({ collection: 'hero', limit: 1 })
  if (existingHero.docs.length > 0) {
    await payload.update({ collection: 'hero', id: existingHero.docs[0].id, data: heroData })
  } else {
    await payload.create({ collection: 'hero', data: heroData })
  }
  console.log('Hero seeded.')

  // Social Links
  console.log('Seeding social links...')
  const existingSocial = await payload.find({ collection: 'social-links', limit: 100 })
  for (const link of existingSocial.docs) {
    await payload.delete({ collection: 'social-links', id: link.id })
  }
  for (const link of socialLinksData) {
    await payload.create({ collection: 'social-links', data: link })
  }
  console.log('Social links seeded.')

  // Skills
  console.log('Seeding skills...')
  const existingSkills = await payload.find({ collection: 'skills', limit: 100 })
  for (const skill of existingSkills.docs) {
    await payload.delete({ collection: 'skills', id: skill.id })
  }
  for (const skill of skillsData) {
    await payload.create({ collection: 'skills', data: skill as any })
  }
  console.log('Skills seeded.')

  // Timeline
  console.log('Seeding timeline...')
  const existingTimeline = await payload.find({ collection: 'timeline', limit: 100 })
  for (const entry of existingTimeline.docs) {
    await payload.delete({ collection: 'timeline', id: entry.id })
  }
  for (const entry of timelineData) {
    await payload.create({ collection: 'timeline', data: entry })
  }
  console.log('Timeline seeded.')

  // Services
  console.log('Seeding services...')
  const existingServices = await payload.find({ collection: 'services', limit: 100 })
  for (const service of existingServices.docs) {
    await payload.delete({ collection: 'services', id: service.id })
  }
  for (const service of servicesData) {
    await payload.create({ collection: 'services', data: service })
  }
  console.log('Services seeded.')

  // Portfolio
  console.log('Seeding portfolio...')
  const existingPortfolio = await payload.find({ collection: 'portfolio', limit: 100 })
  for (const item of existingPortfolio.docs) {
    await payload.delete({ collection: 'portfolio', id: item.id })
  }
  for (const item of portfolioData) {
    await payload.create({ collection: 'portfolio', data: item as any })
  }
  console.log('Portfolio seeded.')

  // Testimonials
  console.log('Seeding testimonials...')
  const existingTestimonials = await payload.find({ collection: 'testimonials', limit: 100 })
  for (const testimonial of existingTestimonials.docs) {
    await payload.delete({ collection: 'testimonials', id: testimonial.id })
  }
  for (const testimonial of testimonialsData) {
    await payload.create({ collection: 'testimonials', data: testimonial })
  }
  console.log('Testimonials seeded.')

  // Contact Info
  console.log('Seeding contact info...')
  const existingContact = await payload.find({ collection: 'contact-info', limit: 100 })
  for (const contact of existingContact.docs) {
    await payload.delete({ collection: 'contact-info', id: contact.id })
  }
  for (const contact of contactInfoData) {
    await payload.create({ collection: 'contact-info', data: contact })
  }
  console.log('Contact info seeded.')

  // Site Settings
  console.log('Seeding site settings...')
  const existingSettings = await payload.findGlobal({ slug: 'site-settings' })
  if (existingSettings) {
    await payload.updateGlobal({ slug: 'site-settings', data: siteSettingsData })
  } else {
    await payload.createGlobal({ slug: 'site-settings', data: siteSettingsData })
  }
  console.log('Site settings seeded.')

  console.log('Database seeding complete!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seeding failed:', err)
  process.exit(1)
})
