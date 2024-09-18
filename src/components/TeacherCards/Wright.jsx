import React from 'react'
import { Link } from 'react-router-dom';
import Kymberlyn from "../../assets/teacherHeadshots/kimberlynHeadshot.jpg";

function Wright() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={Kymberlyn} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kymberlyn Wright <br /> Office Manager</h2>
            {/* <p>This is a teachers bio</p> */}
            <div className="card-actions justify-end">
            <Link to='/wrightBio' className="btn btn-outline text-white">Kymberlyn's Bio</Link>
                </div>
          </div>
        </div>
  )
}

export default Wright