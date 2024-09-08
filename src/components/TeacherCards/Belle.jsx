import { Link } from "react-router-dom";
import MrsBelle from "../../assets/teacherHeadshots/belleHeadshot.jpg";
function Belle() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={MrsBelle} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Belle Lloyd <br /> Two's Teacher </h2>
            {/* <p>This is a teachers bio</p> */}
            <div className="card-actions justify-end">
                    <Link to='/bellebio' className="btn btn-primary text-white">Belle's Bio</Link>
                </div>
          </div>
        </div>
  )
}

export default Belle