import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/ui/CursorGlow'

export default function App() {
  return (
    <div className="relative min-h-screen bg-white font-sans text-slate-700 antialiased transition-colors duration-300 dark:bg-navy-900 dark:text-slate-200">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
