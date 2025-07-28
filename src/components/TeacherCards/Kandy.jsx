import { Link } from "react-router-dom";
import MrsKandy from "../../assets/newHeadshots/Kandy.jpg";

function Kandy() {
  return (
    <div className="card bg-base-100 w-96 h-max shadow-xl" id="kandy">
          <figure className="aspect-[4/5] w-full overflow-hidden">
            <img src={MrsKandy} alt="Teacher"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kandy Kaminski<br /> Owl's Class </h2>
            {/* <p>This is a teachers bio</p> */}
            <div className="card-actions justify-end">
                    <Link to='kandyBio' className="btn btn-outline text-white">Kandy's' Bio</Link>
                </div>
          </div>
        </div>
  )
}

export default Kandy