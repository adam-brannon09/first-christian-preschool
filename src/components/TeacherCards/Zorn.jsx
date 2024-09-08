import { Link } from "react-router-dom";
import MrsZorn from "../../assets/teacherHeadshots/zornHeadshot.jpg";


function Zorn() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={MrsZorn} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Cheryl Zorn <br /> VPK Assistant
            </h2>
            {/* <h2 className="card-title">FCP Director</h2> */}
            {/* <p>This is teachers bio</p> */}
            <div className="card-actions justify-end">
              <Link to='/zornbio' className="btn btn-secondary text-white">Cheryl's Bio</Link>
            </div>
          </div>
        </div>
  )
}

export default Zorn