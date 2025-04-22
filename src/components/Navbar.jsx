import { Link } from "react-router-dom";
import Logo from "../assets/fcp_logo.png"
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import Calender from "../assets/documents/fcpCalendar.pdf"
import Handbook from "../assets/documents/vpkHandbook.pdf"
import Aftercare from "../assets/documents/aftercareHandbook.pdf"
import SupplyList from "../assets/documents/schoolSupplyList.pdf"
import Rates from "../assets/documents/rates.pdf"
import Enrollment from "../assets/documents/enrollment.pdf"

function Navbar() {
    return (
        <>
            <div className="navbar justify-end background">
                <h1 className="text-white text-center mr-8">First Christian Preschool</h1>
                <a href="tel:8509511225" className="btn btn-ghost font-bold text-white"><FaPhoneAlt />CALL</a>

                <a href="mailto:aprilmurphyfcp@gmail.com" className="btn btn-ghost font-bold text-white"><FaEnvelope />EMAIL</a>
            </div>


            {/* <div className="navbar font-bold flex justify-between border-shadow nav2" style={{ backgroundColor: "#FFF6F6" }}>
                <img src={Logo} style={{ width: "9rem", marginLeft: "20px" }} className="rounded-full z-10" alt="Logo" />
                <div className="">
                    <ul className="menu menu-horizontal px-1 ml-5 text-2xl">
                        <li><a href="#philosophy">Who We Are</a></li>
                        <li><a href="#staff">Our Teachers</a></li>
                        <li><a href="#enrollment">Enrollment</a></li>
                        <li><a href="#contact">Get In Touch</a></li>
                    </ul>
                </div>
            </div> */}

            <div className="navbar bg-base-100 nav2">
                <img src={Logo} style={{ width: "9rem", marginLeft: "20px" }} className=" z-10 shadow-2xl rounded-lg hidden lg:inline" alt="Logo" />
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/#about'>Who We Are</Link></li>
                        <li><Link to='/#staff'>Our Teachers</Link></li>
                        <li><Link to='/programs'>Programs & Tuition</Link></li>
                        <li><Link to='/#enrollment'>Enrollment</Link></li>
                        <li><Link to='/#contact'>Get In Touch</Link></li>
                            <details>
                                <summary>Resources</summary>
                                <ul className="p-2">
                                    <li><a href={Calender} target="_blank">School Calender</a></li>
                                    <li><a href={Handbook} target="_blank">VPK Handbook</a></li>
                                    <li><a href={Aftercare} target="_blank">Aftercare Handbook</a></li>
                                    <li><a href={Rates} target="_blank">Tuition</a></li>
                                    <li><a href={SupplyList} target="_blank">Supply List</a></li>
                                    <li><a href="https://www.remind.com/apps">Remind App</a></li>
                                    <li><a href="https://familyservices.floridaearlylearning.com/">ELC (VPK)</a></li>
                                </ul>
                            </details>
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">First Christian Preschool</a> */}
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-6">
                        <li><Link to='/#about'>Who We Are</Link></li>
                        <li><Link to='/#staff'>Our Teachers</Link></li>
                        <li><Link to='/programs'>Programs & Tuition</Link></li>
                        <li><Link to='/#enrollment'>Enrollment</Link></li>
                        <li><Link to='/#contact'>Get In Touch</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Resources</summary>
                                <ul className="pr-4">
                                    <li><a href={Calender} target="_blank">School Calender</a></li>
                                    <li><a href={Handbook} target="_blank">Parent/Student Handbook</a></li>
                                    <li><a href={Aftercare} target="_blank">Aftercare Handbook</a></li>
                                    <li><a href={Rates} target="_blank">Tuition</a></li>
                                    <li><a href={SupplyList} target="_blank">Supply List</a></li>
                                    <li><a href="https://www.remind.com/apps">Remind App</a></li>
                                    <li><a href="https://familyservices.floridaearlylearning.com/">ELC (VPK)</a></li>
                                </ul>
                            </details>
                        </li>

                    </ul>
                </div>

            </div>


        </>

    )
}
export default Navbar