import { Link } from "react-router-dom";
import MrsKandy from "../../assets/teacherHeadshots/kandyHeadshot.jpg";

function Kandy() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={MrsKandy} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kandy Kaminski<br /> Two's Teacher </h2>
            {/* <p>This is a teachers bio</p> */}
            <div className="card-actions justify-end">
                    <Link className="btn btn-primary text-white">Kandy's' Bio</Link>
                </div>
          </div>
        </div>
  )
}

export default Kandy