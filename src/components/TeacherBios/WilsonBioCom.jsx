import { Link } from "react-router-dom";
import Brittany from "../../assets/newHeadshots/BrittanyWilson.jpg";

function WilsonBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Brittany} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Wilson</h1>
          <br />
          <p className="py-6 text-lg">
            Hello! My name is Brittany Wilson, and I am the Administrative Aide
            here at First Christian Preschool! Our family fell in love with FCP
            after our oldest son began attending, and it brings me so much joy
            to now be part of the amazing staff. I feel truly blessed to watch
            my boys grow up surrounded by the love and care of the FCP & FCA
            family. I was born and raised right here in Florida! My husband and
            I are high school sweethearts and have been married since 2016.
            Together, we’re raising two wonderful boys—Easton and Fletcher. We
            live on a farm in Mossy Head and enjoy all things outdoors—from
            buggy rides and hunting to fishing and camping. I am so excited to
            be part of this school and feel honored to support our families,
            staff, and students each day at First Christian Preschool!
          </p>
          <Link to="/#wilson" className="btn btn-outline">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WilsonBio;
