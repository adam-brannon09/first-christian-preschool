import Navbar from "./Navbar"
import Logo from "../assets/fcp_logo.png"

function About() {
    return (
        <div className="bg-info-200">
            <Navbar />
            <div className="hero min-h-screen bg-info">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={Logo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl text-white font-bold">Welcome To First Christian Preschool</h1>
                        <p className="text-white text-2xl py-6 px-5"> At First Christian Preschool, we provide families with a nurturing, Christ-centered atmosphere where young children can flourish spiritually, intellectually, socially, emotionally, and physically. We believe every child is exceptional, brimming with boundless potential. Our commitment is to unlock these possibilities and support your child's journey to becoming the unique and special person that God intended them to be.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About