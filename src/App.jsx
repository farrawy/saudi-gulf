import Navbar from './components/Navbar'
import ImageSlider from './components/ImageSlider'
import About from './components/About'
import Services from './components/Services'
import './App.css'

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
      {/* <Projects /> */}
      {/* <ClientReviews /> */}
      {/* <Clients /> */}
      {/* <Contact /> */}
    </div>
  )
}

export default App
