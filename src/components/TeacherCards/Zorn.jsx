import React from 'react'
import MrsZorn from "../../assets/teacherHeadshots/zornHeadshot.jpg";
import April from "../../assets/teacherHeadshots/AprilHeadshot.jpg";

function Zorn() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={MrsZorn} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              April Murphy <br /> FCP Director
            </h2>
            {/* <h2 className="card-title">FCP Director</h2> */}
            {/* <p>This is teachers bio</p> */}
            <div className="card-actions justify-end">
              <button className="btn btn-secondary text-white">April's Bio</button>
            </div>
          </div>
        </div>
  )
}

export default Zorn