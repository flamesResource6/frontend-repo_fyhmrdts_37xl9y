import { Sparkles, PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs text-purple-700 rounded-full bg-purple-100 px-2 py-1 mb-4">
            <Sparkles className="h-3.5 w-3.5" /> New: Ultra-realistic voices
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Create lifelike voiceovers in seconds
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Type your script, pick a voice, and generate studio-quality audio instantly. No downloads. No setup.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#studio" className="bg-gray-900 text-white px-5 py-3 rounded-md text-sm hover:bg-black">Open Studio</a>
            <a href="#voices" className="text-sm flex items-center gap-2 text-gray-800 hover:text-black">
              <PlayCircle className="h-5 w-5" /> Hear samples
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-xl shadow-2xl border border-black/10 bg-white p-4">
            <div className="h-full w-full rounded-lg bg-gradient-to-br from-purple-200 via-blue-200 to-white grid place-items-center text-gray-700">
              Drop your script here
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white border border-black/10 rounded-lg shadow p-4 text-sm">
            <div className="font-semibold">Fast, natural TTS</div>
            <div className="text-gray-600">Powered by AI</div>
          </div>
        </div>
      </div>
    </section>
  )
}
