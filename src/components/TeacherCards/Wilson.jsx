import { Link } from "react-router-dom";
import MrsWilson from "../../assets/teacherHeadshots/wilsonHeadshot.jpg";
function Wilson() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={MrsWilson} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Brittany Wilson <br /> VPK Assistant </h2>
            {/* <p>This is a teachers bio</p> */}
            <div className="card-actions justify-end">
                    <Link to='/givensbio' className="btn btn-primary text-white">Brittany's Bio</Link>
                </div>
          </div>
        </div>
  )
}

export default Wilson