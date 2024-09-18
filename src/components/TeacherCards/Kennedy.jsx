import { Link } from "react-router-dom";
import MrsKennedy from "../../assets/teacherHeadshots/kennedyHeadshot.jpg";

function Kennedy() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img src={MrsKennedy} alt="Teacher" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Kristen Kennedy <br />Preschool Aide</h2>
      {/* <p>This is a teachers bio</p> */}
      <div className="card-actions justify-end">
              <Link to='/kennedyBio' className="btn btn-outline text-white">Kristen's' Bio</Link>
          </div>
    </div>
  </div>
  )
}

export default Kennedy