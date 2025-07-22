import { Link } from "react-router-dom";
import MrsLloyd from "../../assets/newHeadshots/Katelyn.jpg";
function Lloyd() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl" id="lloyd">
          <figure className="aspect-[4/5] w-full overflow-hidden">
            <img src={MrsLloyd} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Katelyn Lloyd <br /> Three's Teacher </h2>
            {/* <p>This is a teachers bio</p> */}
            <div className="card-actions justify-end">
                    <Link to='/lloydBio' className="btn btn-outline text-white">Katelyn's Bio</Link>
                </div>
          </div>
        </div>
  )
}

export default Lloyd