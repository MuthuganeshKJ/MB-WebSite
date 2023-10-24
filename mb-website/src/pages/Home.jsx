import Nav from "../components/Nav"
import FeaturedProducts from "../sections/FeaturedProducts"
import Footer from "../sections/Footer"
import Hero from "../sections/Hero"
import Slider from "../sections/Slider"


const Home = () => {
  return (
    <main>

    <Nav/>

   <Slider/>
    
  
    <Hero/>
    <FeaturedProducts/>
    <Footer/>

    </main>
  )
}

export default Home