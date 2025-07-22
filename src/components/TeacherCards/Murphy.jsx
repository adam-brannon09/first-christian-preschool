
import April from "../../assets/newHeadshots/AprilHeadshot.jpg";
import { Link } from "react-router-dom";

function Murphy() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl" id="murphy">
          <figure className="aspect-[4/5] w-full overflow-hidden">
            <img src={April} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              April Murphy <br /> FCP Director
            </h2>
            {/* <h2 className="card-title">FCP Director</h2> */}
            {/* <p>This is teachers bio</p> */}
            <div className="card-actions justify-end">
              <Link to='/murphyBio' className="btn btn-outline text-white">April's Bio</Link>
            </div>
          </div>
        </div>
  )
}

export default Murphy