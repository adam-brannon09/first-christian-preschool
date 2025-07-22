import { Link } from "react-router-dom";
import MrsBelle from "../../assets/teacherHeadshots/Belle.jpg";
function Belle() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl" id="belle">
          <figure className="aspect-[4/5] w-full overflow-hidden">
            <img src={MrsBelle} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Belle Lloyd <br /> Three's Teacher </h2>
            {/* <p>This is a teachers bio</p> */}
            <div className="card-actions justify-end">
                    <Link to='/belleBio' className="btn btn-outline text-white">Belle's Bio</Link>
                </div>
          </div>
        </div>
  )
}

export default Belle