import Logo from "../assets/fcp_logo.png"

function Navbar() {
    return (
        <>
            <div className="navbar font-bold flex justify-center border-shadow " style={{ backgroundColor: "#FFF6F6" }}>
                <img src={Logo} style={{ width: "6rem" }} className="rounded-full" alt="Logo" />
                <div className="">
                    <ul className="menu menu-horizontal px-1 ml-5 text-3xl">
                        <li><a href="#philosophy">Who We Are</a></li>
                        <li><a href="#staff">Our Teachers</a></li>
                        <li><a href="#enrollment">Enrollment</a></li>
                        <li><a href="#contact">Get In Touch</a></li>
                    </ul>
                </div>
            </div>

        </>

    )
}
export default Navbar