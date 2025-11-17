import { useState } from 'react'
import { Play, Loader2 } from 'lucide-react'

export default function Studio() {
  const [text, setText] = useState('Hi there! This is a demo of our AI voice studio.')
  const [loading, setLoading] = useState(false)
  const [audioUrl, setAudioUrl] = useState(null)
  const [language, setLanguage] = useState('en')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const generate = async () => {
    setLoading(true)
    setAudioUrl(null)
    try {
      const res = await fetch(`${baseUrl}/api/tts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, language, format: 'mp3' })
      })
      if (!res.ok) throw new Error('Generation failed')
      const data = await res.json()
      setAudioUrl(`${baseUrl}${data.audio_url}`)
    } catch (e) {
      alert(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="studio" className="py-16 bg-gray-50 border-t border-black/5">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Studio</h2>
        <div className="bg-white border border-black/10 rounded-lg p-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full min-h-[140px] border border-black/10 rounded p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Paste or type your script..."
          />
          <div className="mt-3 flex items-center gap-3">
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="border border-black/10 rounded p-2 text-sm">
              <option value="en">English</option>
              <option value="en-GB">English (UK)</option>
              <option value="es">Spanish</option>
              <option value="ja">Japanese</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
            <button onClick={generate} disabled={loading} className="bg-gray-900 text-white px-4 py-2 rounded text-sm flex items-center gap-2 disabled:opacity-60">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
              Generate
            </button>
          </div>

          {audioUrl && (
            <div className="mt-4">
              <audio src={audioUrl} controls className="w-full" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
