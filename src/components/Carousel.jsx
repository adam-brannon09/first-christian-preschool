import Firetruck from '../assets/firetruck.jpeg'
import Kids from '../assets/kids.jpeg'
import Kids2 from '../assets/kids2.jpeg'
import Kids3 from '../assets/kids3.jpeg'
import KidsOut from '../assets/kidsout.jpeg'
import Teachers from '../assets/teachers.jpeg'
import Logo from '../assets/fcp_logo.png'

function Carousel() {

    if (window.innerWidth < 640) {
        return (<div className='flex justify-center'> <img src={Logo} style={{ width: "20rem" }} className=''></img></div>)
    } else {

        return (

            <div className="carousel carousel-center  mt-5 bg-white  shadow-l">
                <div className="carousel-item">
                    <img src={Teachers} />
                </div>
                <div className="carousel-item ">
                    <img src={Firetruck} />
                </div>
                <div className="carousel-item">
                    <img src={Kids} />
                </div>
                <div className="carousel-item">
                    <img src={Kids2} />
                </div>
                <div className="carousel-item">
                    <img src={Kids3} />
                </div>
                <div className="carousel-item">
                    <img src={KidsOut} />
                </div>

            </div>

        )
    }

}
export default Carousel