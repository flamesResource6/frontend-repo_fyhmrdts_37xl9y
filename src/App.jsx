import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VoiceGrid from './components/VoiceGrid'
import Studio from './components/Studio'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <VoiceGrid />
      <Studio />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
