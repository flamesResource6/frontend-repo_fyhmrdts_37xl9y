import { Menu, Mic, Home, AudioLines, Wand2 } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-semibold">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-purple-500 to-blue-500 grid place-items-center text-white">
            <Mic className="h-5 w-5" />
          </div>
          <span>VoxLab</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#voices" className="hover:text-gray-900">Voices</a>
          <a href="#studio" className="hover:text-gray-900">Studio</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="/test" className="hover:text-gray-900">Status</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Sign in</a>
          <a href="#" className="text-sm bg-gray-900 text-white px-3 py-2 rounded-md hover:bg-black">Get started</a>
          <button className="md:hidden p-2"><Menu className="h-5 w-5" /></button>
        </div>
      </div>
    </header>
  )
}
