import VerticalContact from "./VerticalContact"

function About() {
    return (
        <div className="flex flex-wrap w-full min-h-screen lg:flex-row my-9 place-content-center " id="about">

            <div className=" grid flex w-1/2 card place-items-center ml-8 paragraph-mobile">
                <h1 className="font-bold text-3xl justify-center">Welcome To First Christian Preschool</h1>
                <p className="text-xl sm:text-lg md:text-xl lg:text-xl leading-relaxed"> At First Christian Preschool, we provide families with a nurturing, Christ-centered atmosphere where young children can flourish spiritually, intellectually, socially, emotionally, and physically. We believe every child is exceptional, brimming with boundless potential. Our commitment is to unlock these possibilities and support your child's journey to becoming the unique and special person that God intended them to be.
                </p>
            </div>
            {/* <div className="divider divider-horizontal"></div> */}

            <div className="mt-10">
                <VerticalContact className="grid about-one" />
            </div>

        </div>







    )
}
export default About



{/* <div className="hero min-h-screen  text-white" style={{ backgroundColor: "#F875AA" }}>
<div className="hero-content flex-col lg:flex-row">
    <img src={Logo} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
        <h1 className="text-5xl font-bold">Welcome To First Christian Preschool</h1>
        <p className="text-2xl py-6 px-5"> At First Christian Preschool, we provide families with a nurturing, Christ-centered atmosphere where young children can flourish spiritually, intellectually, socially, emotionally, and physically. We believe every child is exceptional, brimming with boundless potential. Our commitment is to unlock these possibilities and support your child's journey to becoming the unique and special person that God intended them to be.</p>
    </div>
</div>
</div> */}