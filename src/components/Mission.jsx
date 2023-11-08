import Building from "../assets/building.jpeg"


function Mission() {
    return (
        <div className="hero min-h-screen border-shadow background text-white" id="philosophy">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Building} className="max-w-md rounded-lg shadow-1xl" />
                <div>
                    <h1 className="text-5xl font-bold">Our Philosophy</h1>
                    <p className="py-6 text-2xl">
                        At FCP, we believe in the development of the whole child socially, emotionally, academically and spiritually. Within the first couple weeks of school, the children are assessed and the curriculum is tailored to meet their needs. We accomplish this through what children do best: PLAY!
                    </p>
                    <p className="py-6 text-2xl">
                        We want to be in partnership with the parent and family. We accomplish this by making sure we communicate with our families. Communication is extremely important to the life of a school and to the relationship that is created between parent, student, teacher and administrative staff.</p>
                </div>
            </div>
        </div>
    )
}
export default Mission