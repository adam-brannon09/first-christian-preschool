
import { Link } from "react-router-dom";
import AbbeyPic from "../../assets/newHeadshots/Abbey.jpg";
function Abbey() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl" id="edwards">
          <figure className="aspect-[4/5] w-full overflow-hidden">
            <img src={AbbeyPic} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Abbey<br /> Afterschool Aide </h2>
            {/* <p>This is a teachers bio</p> */}
            <div className="card-actions justify-end">
                    <Link to='/abbeybio' className="btn btn-outline text-white">Abbey's Bio</Link>
                </div>
          </div>
        </div>
  )
}

export default Abbey