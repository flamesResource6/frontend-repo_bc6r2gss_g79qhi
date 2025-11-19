import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-white font-semibold">Dev Portfolio</a>
          <nav className="hidden sm:flex items-center gap-6 text-slate-200">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#timeline" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 text-slate-400 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <a href="/test" className="hover:text-white">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
