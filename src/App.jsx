import Navbar from './components/Navbar'
import ImageSlider from './components/ImageSlider'
import About from './components/About'
import Services from './components/Services'
import './App.css'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className=' text-white min-h-screen  '>
      <Navbar />
      <section id='home' className='snap-start'>
        <ImageSlider />
      </section>
      <section id='about' className='snap-start'>
        <About />
      </section>
      <section id='services'>
        <Services />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      {/* <ClientReviews /> */}
      {/* <section id='clients'>
        <Clients />
      </section> */}
      <section id='contact'>
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App
