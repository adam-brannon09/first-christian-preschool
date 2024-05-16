import React from 'react'
import MrsDeRamus from "../../assets/teacherHeadshots/deramusHeadshot.jpg";

function DeRamus() {
  return (
    <div className="card w-1/4 bg-base-100 shadow-xl p-10 my-10 mx-auto">
          <figure>
            <img src={MrsDeRamus} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mrs.DeRamus <br /> Preschool Aide</h2>
            {/* <p>This is a teachers bio</p> */}
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white">My Bio</button>
            </div>
          </div>
        </div>
  )
}

export default DeRamus