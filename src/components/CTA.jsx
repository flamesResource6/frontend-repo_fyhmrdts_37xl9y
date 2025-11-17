export default function CTA() {
  return (
    <section id="pricing" className="py-16 bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">Starte heute kostenlos – wechsle später ins Abo</h2>
          <p className="text-white/70 mt-3">Teste den Demo‑Modus ohne Registrierung. Für Creator & Teams gibt es flexible Monatspläne mit fairen Limits.</p>
          <ul className="mt-6 space-y-2 text-sm text-white/80 list-disc list-inside">
            <li>Demo‑Modus: 30 Sekunden Audio/Tag</li>
            <li>Creator: 2 Stunden/Monat, kommerzielle Nutzung</li>
            <li>Pro: 10+ Stunden, Prioritäts‑Compute, Team‑Sharing</li>
          </ul>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="flex items-end gap-3">
            <div className="text-4xl font-bold">0€</div>
            <div className="text-white/60">/kostenlos testen</div>
          </div>
          <a href="#studio" className="mt-6 inline-block bg-white text-gray-900 px-5 py-3 rounded-md text-sm font-medium hover:bg-gray-100">Jetzt ausprobieren</a>
          <div className="mt-6 text-xs text-white/60">Später upgraden: Stripe/PayPal, Rechnungen inklusive.</div>
        </div>
      </div>
    </section>
  )
}
