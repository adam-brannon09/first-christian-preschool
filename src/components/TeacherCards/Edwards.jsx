
import MrsEdwards from "../../assets/teacherHeadshots/edwardsHeadshot.jpg";
function Edwards() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={MrsEdwards} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mrs. Edwards <br /> VPK A Lead </h2>
            {/* <p>This is a teachers bio</p> */}
            <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white">Mrs.Edward's Bio</button>
                </div>
          </div>
        </div>
  )
}

export default Edwards