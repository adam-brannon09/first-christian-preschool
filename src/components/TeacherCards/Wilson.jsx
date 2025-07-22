import { Link } from "react-router-dom";
import MrsWilson from "../../assets/newHeadshots/BrittanyWilson.jpg";
function Wilson() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl" id="wilson">
          <figure className="aspect-[4/5] w-full overflow-hidden">
            <img src={MrsWilson} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Brittany Wilson <br /> Admin Assistant </h2>
            {/* <p>This is a teachers bio</p> */}
            <div className="card-actions justify-end">
                    <Link to='/wilsonBio' className="btn btn-outline text-white">Brittany's Bio</Link>
                </div>
          </div>
        </div>
  )
}

export default Wilson