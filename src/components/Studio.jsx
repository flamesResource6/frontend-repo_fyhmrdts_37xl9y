import { useState } from 'react'
import { Play, Loader2, Download, Share2, Copy } from 'lucide-react'

export default function Studio() {
  const [text, setText] = useState('Hallo! Das ist eine Demo unseres KI‑Voice‑Studios.')
  const [loading, setLoading] = useState(false)
  const [audioUrl, setAudioUrl] = useState(null)
  const [language, setLanguage] = useState('de')
  const [style, setStyle] = useState('neutral')
  const [copied, setCopied] = useState(false)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const generate = async () => {
    setLoading(true)
    setAudioUrl(null)
    try {
      const stylePrefix = style !== 'neutral' ? `[${style.toUpperCase()}] ` : ''
      const res = await fetch(`${baseUrl}/api/tts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: stylePrefix + text, language, format: 'mp3' })
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

  const whatsappHref = audioUrl ? `https://api.whatsapp.com/send?text=${encodeURIComponent('Hör dir das an! ' + audioUrl)}` : '#'

  const copyLink = async () => {
    if (!audioUrl) return
    try {
      await navigator.clipboard.writeText(audioUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch {}
  }

  return (
    <section id="studio" className="py-16 bg-gray-50 border-t border-black/5">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Studio</h2>
        <div className="bg-white border border-black/10 rounded-lg p-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full min-h-[160px] border border-black/10 rounded p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Füge deinen Text hier ein..."
          />
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="border border-black/10 rounded p-2 text-sm">
              <option value="de">Deutsch (DE)</option>
              <option value="en">English (EN)</option>
              <option value="en-GB">English (UK)</option>
              <option value="fr">Français (FR)</option>
              <option value="tr">Türkçe (TR)</option>
              <option value="sq">Shqip (AL)</option>
              <option value="es">Español (ES)</option>
            </select>
            <select value={style} onChange={(e) => setStyle(e.target.value)} className="border border-black/10 rounded p-2 text-sm">
              <option value="neutral">Neutral</option>
              <option value="horror">Horror</option>
              <option value="jung">Jung</option>
              <option value="alt">Alt</option>
              <option value="song">Song</option>
            </select>
            <button onClick={generate} disabled={loading} className="bg-gray-900 text-white px-4 py-2 rounded text-sm flex items-center gap-2 disabled:opacity-60">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
              Generieren
            </button>
          </div>

          {audioUrl && (
            <div className="mt-4 flex flex-col gap-3">
              <audio src={audioUrl} controls className="w-full" />
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={audioUrl}
                  download
                  className="inline-flex items-center gap-2 px-3 py-2 rounded border border-black/10 text-sm hover:bg-gray-50"
                >
                  <Download className="h-4 w-4" /> Download
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={whatsappHref}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded border border-black/10 text-sm hover:bg-gray-50"
                >
                  <Share2 className="h-4 w-4" /> WhatsApp teilen
                </a>
                <button
                  onClick={copyLink}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded border border-black/10 text-sm hover:bg-gray-50"
                >
                  <Copy className="h-4 w-4" /> {copied ? 'Kopiert!' : 'Link kopieren'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
