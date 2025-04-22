import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Mission from "../components/Mission"
import Staff from "../components/Staff"
import Enrollment from "../components/Enrollment"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {

    const routerLocation = useLocation();

    useEffect(() => {
      if (routerLocation.hash) {
        const el = document.querySelector(routerLocation.hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }, [routerLocation]);

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