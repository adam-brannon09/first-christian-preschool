import Navbar from "./Navbar"
import Logo from "../assets/fcp_logo.png"

function About() {
    return (
        <div>
            {/* <Navbar /> */}
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={Logo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Welcome To First Christian Preschool</h1>
                        <p className="text-2xl py-6 px-5"> At First Christian Preschool, we provide families with a nurturing, Christ-centered atmosphere where young children can flourish spiritually, intellectually, socially, emotionally, and physically. We believe every child is exceptional, brimming with boundless potential. Our commitment is to unlock these possibilities and support your child's journey to becoming the unique and special person that God intended them to be.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>

        // <div className="hero hero-bg min-h-screen">
        //     <div className="hero-overlay bg-opacity-30"></div>
        //     <div className="hero-content text-center text-neutral-content">
        //         <div className="max-w-md">
        //             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        //             <p className="mb-5 text-3xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             <button className="btn btn-primary">Get Started</button>
        //         </div>
        //     </div>
        // </div>
    )
}
export default About