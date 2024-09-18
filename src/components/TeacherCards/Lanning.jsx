import { Link } from "react-router-dom";
import Lindsey from "../../assets/teacherHeadshots/lanningHeadshot.jpg";

function Jami() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={Lindsey} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Lindsey Lanning<br />Three's B Teacher</h2>
            {/* <p>This is a teachers bio</p> */}
            <div className="card-actions justify-end">
                    <Link to='/lanningBio'className="btn btn-outline text-white">Lindsey's Bio</Link>
                </div>
          </div>
        </div>
  )
}

export default Jami