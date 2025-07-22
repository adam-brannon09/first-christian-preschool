import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'
import AttendanceInfo from "../components/AttendanceInfo";
import Footer from '../components/Footer'


function Attendance() {
  return (

    <div>
    <Navbar/>
   <AttendanceInfo/>
    <Footer/>
    </div>
  )
}

export default Attendance