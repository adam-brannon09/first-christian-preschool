
import { Link } from "react-router-dom";
import MrsEdwards from "../../assets/teacherHeadshots/edwardsHeadshot.jpg";
function Edwards() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={MrsEdwards} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Amanda Edwards <br /> VPK A Lead </h2>
            {/* <p>This is a teachers bio</p> */}
            <div className="card-actions justify-end">
                    <Link to='/givensbio' className="btn btn-primary text-white">Amanda's Bio</Link>
                </div>
          </div>
        </div>
  )
}

export default Edwards