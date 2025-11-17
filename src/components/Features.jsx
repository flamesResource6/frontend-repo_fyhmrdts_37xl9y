import { Mic2, Languages, Share2, Smartphone, Download, ShieldCheck } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: <Mic2 className="h-5 w-5" />,
      title: 'KI‑Stimmen & Klonen',
      desc: 'Realistische Stimmen mit natürlicher Prosodie. Optional: eigenes Stimmprofil aus Samples.'
    },
    {
      icon: <Languages className="h-5 w-5" />,
      title: 'Mehrsprachig',
      desc: 'Deutsch, Englisch, Französisch, Türkisch, Albanisch – und mehr.'
    },
    {
      icon: <Share2 className="h-5 w-5" />,
      title: 'Social‑Ready',
      desc: '1‑Klick‑Share für WhatsApp, plus TikTok‑optimierte Audio‑Exports.'
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: 'Web + Mobile',
      desc: 'Flutter App (iOS/Android) mit identischem Erlebnis.'
    },
    {
      icon: <Download className="h-5 w-5" />,
      title: 'Downloads',
      desc: 'Hochqualitative MP3‑Dateien, sofort verfügbar.'
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: 'Accounts & Abo',
      desc: 'Login, Kontingente, Zahlungen und Rechnungen – bereit für Produktion.'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Alles, was du brauchst</h2>
        <p className="text-gray-600 mb-8">Studio‑Qualität, schnelle Generierung und Sharing – in einem Tool.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-black/10 bg-white/70 backdrop-blur p-5 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 text-purple-700 grid place-items-center mb-3">
                {it.icon}
              </div>
              <div className="font-medium">{it.title}</div>
              <div className="text-sm text-gray-600 mt-1">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
