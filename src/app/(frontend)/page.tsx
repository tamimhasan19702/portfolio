import { getPayload } from 'payload'
import config from '@payload-config'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const profile = await payload.find({ collection: 'profile', limit: 1 })

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-title mb-4">
        {profile.docs[0]?.name || 'Tareq Monower Tamim'}
      </h1>
      <p className="text-lg text-text">
        {profile.docs[0]?.title || 'WordPress & Frontend Developer'}
      </p>
      <p className="mt-4 text-sm text-text-light">
        Portfolio coming soon...
      </p>
      <a
        href="/admin"
        className="mt-8 px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition"
      >
        Go to Admin Panel
      </a>
    </div>
  )
}
