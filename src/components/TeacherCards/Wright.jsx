import React from 'react'
import Kimberlyn from "../../assets/teacherHeadshots/kimberlynHeadshot.jpg";

function Wright() {
  return (
    <div className="card w-1/4 bg-base-100 shadow-xl p-10 my-10 mx-auto">
          <figure>
            <img src={Kimberlyn} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kimberlyn Wright <br /> Assistant Director / VPK A Lead</h2>
            {/* <p>This is a teachers bio</p> */}
            <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white">Kimberlyn's Bio</button>
                </div>
          </div>
        </div>
  )
}

export default Wright