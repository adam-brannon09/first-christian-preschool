import React from 'react'
import April from "../../assets/teacherHeadshots/AprilHeadshot.jpg";

function Murphy() {
  return (
    <div className="card w-1/4 bg-base-100 shadow-xl p-10 my-10 mx-auto">
          <figure>
            <img src={April} alt="Teacher" />
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

export default Murphy