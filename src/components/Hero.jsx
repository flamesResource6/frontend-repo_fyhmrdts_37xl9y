import { Sparkles, PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs text-purple-100/90 rounded-full bg-white/10 px-2 py-1 mb-4 ring-1 ring-white/15">
            <Sparkles className="h-3.5 w-3.5" /> Neu: Ultra‑realistische KI‑Stimmen
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            ElevenLabs‑Qualität, noch flexibler.
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Schreibe deinen Text, wähle einen Stil (Horror, Jung/Alt, Songs) und erzeuge Studio‑Audio in Sekunden.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#studio" className="bg-white text-gray-900 px-5 py-3 rounded-md text-sm hover:bg-gray-100">Studio öffnen</a>
            <a href="#voices" className="text-sm flex items-center gap-2 text-white/90 hover:text-white">
              <PlayCircle className="h-5 w-5" /> Samples anhören
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-xl shadow-2xl border border-white/10 bg-white/5 p-4">
            <div className="h-full w-full rounded-lg bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-transparent grid place-items-center text-white/80">
              Zieh dein Script hierher
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white/10 border border-white/10 rounded-lg shadow p-4 text-sm backdrop-blur">
            <div className="font-semibold">Schnell & natürlich</div>
            <div className="text-white/70">KI‑gestützt</div>
          </div>
        </div>
      </div>
    </section>
  )
}
