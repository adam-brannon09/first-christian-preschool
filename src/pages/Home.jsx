import About from "../components/About"
import Mission from "../components/Mission"
import Staff from "../components/Staff"
import Carousel from "../components/Carousel"
import Enrollment from "../components/Enrollment"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Home() {
    return (
        <>
            <Navbar />
            <About />
            <Mission />
            <Staff />
            <Carousel />
            <Enrollment />
            <Footer />
        </>
    )
}
export default Home