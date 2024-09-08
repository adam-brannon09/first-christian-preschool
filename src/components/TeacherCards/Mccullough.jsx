import { Link } from "react-router-dom";
import MrsMccullough from "../../assets/teacherHeadshots/mcculloughHeadshot.jpg";
function Mccullough() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={MrsMccullough} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sandy McCullough <br /> Two's Teacher </h2>
            {/* <p>This is a teachers bio</p> */}
            <div className="card-actions justify-end">
                    <Link to='/bellebio' className="btn btn-primary text-white">Sandy's Bio</Link>
                </div>
          </div>
        </div>
  )
}

export default Mccullough