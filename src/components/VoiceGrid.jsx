import { useEffect, useState } from 'react'

export default function VoiceGrid() {
  const [voices, setVoices] = useState([])
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(`${baseUrl}/api/voices`)
        const data = await res.json()
        setVoices(data)
      } catch (e) {
        setVoices([])
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <section id="voices" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Popular voices</h2>
        {loading ? (
          <div className="text-gray-500">Loading voices...</div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {voices.map((v, i) => (
              <div key={i} className="border border-black/10 rounded-lg p-4 bg-white">
                <div className="flex items-center gap-3">
                  <img src={v.avatar_url} alt={v.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <div className="font-medium">{v.name}</div>
                    <div className="text-xs text-gray-500">{v.language}</div>
                  </div>
                </div>
                {v.description && (
                  <p className="text-sm text-gray-600 mt-3">{v.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
