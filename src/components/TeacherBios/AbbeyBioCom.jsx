import { Link } from "react-router-dom";
import Abbey from "../../assets/newHeadshots/Abbey.jpg";

function AbbeyBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Abbey} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Abbey</h1>
          <p className="py-6">
            Abbey's Bio Coming Soon!
          </p>
          <Link
            
            to="/#edwards"
            className="btn btn-outline"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AbbeyBio;
