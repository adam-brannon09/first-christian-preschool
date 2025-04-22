import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Mission from "../components/Mission"
import Staff from "../components/Staff"
import Enrollment from "../components/Enrollment"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home() {
    return (
        <div>
            <Navbar />
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