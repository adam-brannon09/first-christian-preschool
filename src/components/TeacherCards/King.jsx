import { Link } from "react-router-dom";
import MrsKing from "../../assets/teacherHeadshots/kingHeadshot.jpg";

function King() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img src={MrsKing} alt="Teacher"/>
    </figure>
    <div className="card-body">
      <h2 className="card-title">Katelyn King <br /> VPK Aide </h2>
      {/* <p>This is a teachers bio</p> */}
      <div className="card-actions justify-end">
              <Link to='/kingBio' className="btn btn-outline text-white">Katelyn's' Bio</Link>
          </div>
    </div>
  </div>
  )
}

export default King