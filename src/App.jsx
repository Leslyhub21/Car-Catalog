import './App.css'
import Navbar from './components/Navbar'
import Seccion01 from './components/Seccion01'
import Suscribe from './components/Suscribe'
import FeaturedCars from './components/feacturesCard'
import Gallery from './components/gallery'
import Footer from './components/Footer'
import Login from './components/login.jsx'
import PreguntasF from './components/PreguntasF.jsx'

function App() {
  
  

  return (
    <>
      <Navbar/>
      <Seccion01/>
      <br />
      <FeaturedCars/>
      <br />
      <Gallery />
      <br />
      <Suscribe />
      <br />
      <br />
      <PreguntasF />
      <br />
      <Footer />


    </>
  )
}
export default App