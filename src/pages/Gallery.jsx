import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'
import GalleryGrid from "../components/GalleryGrid";
import Footer from '../components/Footer'


function Gallery() {
  return (

    <div>
    <Navbar/>
   <GalleryGrid/>
    <Footer/>
    </div>
  )
}

export default Gallery