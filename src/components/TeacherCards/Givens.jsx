import { Link } from "react-router-dom";
import MrsGivens from "../../assets/teacherHeadshots/marthaHeadhshot.jpg";


function Givens() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={MrsGivens} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mrs. Givens <br /> FCP Custodian </h2>
            {/* <p>This is a teachers bio</p> */}
            <div className="card-actions justify-end">
            <Link to='/givensBio' className="btn btn-outline text-white">Martha's Bio</Link>
                </div>
          </div>
        </div>
  )
}

export default Givens