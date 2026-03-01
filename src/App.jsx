import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Classes from './components/Classes'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Stats from './components/Stats'
import FAQ from './components/FAQ'
import ScrollToTop from './components/ScrollToTop'
import Gallery from './components/Gallery'
import Trainers from './components/Trainers'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <Trainers />
      <ScrollToTop />
      <Stats />
      <FAQ />
      <Gallery />
      <Testimonials />
      <Contact />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App