import React from 'react'
import MrsJami from "../../assets/teacherHeadshots/jamiHeadshot.jpg";

function Jami() {
  return (
    <div className="card w-1/4 bg-base-100 shadow-xl p-10 my-10 mx-auto">
          <figure>
            <img src={MrsJami} alt="Teacher" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mrs. Jami <br /> 3B Lead</h2>
            {/* <p>This is a teachers bio</p> */}
            <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white">Jami's Bio'</button>
                </div>
          </div>
        </div>
  )
}

export default Jami