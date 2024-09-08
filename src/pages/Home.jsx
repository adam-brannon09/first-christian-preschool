import About from "../components/About"
import Mission from "../components/Mission"
import Staff from "../components/Staff"
import Carousel from "../components/Carousel"
import Enrollment from "../components/Enrollment"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"

function Home() {
    return (
        <div>
            <Navbar />
            {/* <Carousel /> */}
            <Hero />
            <About />
            <Mission />
            <Staff />
            <Enrollment />
            <Contact />
            <Footer />
        </div>
    )
}
export default Home