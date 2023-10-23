import Logo from "../assets/fcp_logo.png"

function Navbar() {
    return (
        <>
            <div className="navbar font-bold flex justify-center border-shadow " style={{ backgroundColor: "#FFF6F6" }}>
                <img src={Logo} style={{ width: "6rem" }} className="rounded-full" alt="Logo" />
                <div className="">
                    <ul className="menu menu-horizontal px-1 ml-5 text-3xl">
                        <li className="text-violet-500"><a href="#philosophy">Who We Are</a></li>
                        <li className="text-sky-400"><a href="#staff">Our Teachers</a></li>
                        <li className="text-teal-300"><a href="#enrollment">Enrollment</a></li>
                        <li className="text-rose-400"><a href="#contact">Get In Touch</a></li>
                    </ul>
                </div>
            </div>

        </>

    )
}
export default Navbar