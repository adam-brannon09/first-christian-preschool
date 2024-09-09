import { Link } from "react-router-dom";
import MrsLloyd from "../../assets/teacherHeadshots/lloydHeadshot.jpg";
function Lloyd() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={MrsLloyd} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Katelyn Lloyd <br /> Two's Teacher </h2>
            {/* <p>This is a teachers bio</p> */}
            <div className="card-actions justify-end">
                    <Link to='/lloydBio' className="btn btn-outline text-white">Katelyn's Bio</Link>
                </div>
          </div>
        </div>
  )
}

export default Lloyd