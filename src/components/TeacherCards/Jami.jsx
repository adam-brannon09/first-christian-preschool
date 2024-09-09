import { Link } from "react-router-dom";
import MrsJami from "../../assets/teacherHeadshots/jamiHeadshot.jpg";

function Jami() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={MrsJami} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Jami <br /> 3B Lead</h2>
            {/* <p>This is a teachers bio</p> */}
            <div className="card-actions justify-end">
                    <Link to='/jamiBio'className="btn btn-outline text-white">Jami's Bio'</Link>
                </div>
          </div>
        </div>
  )
}

export default Jami