import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Trainers from './components/Trainers'
import Facilities from './components/Facilities'
import Membership from './components/Membership'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Trainers />
      <Facilities />
      <Membership />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}
