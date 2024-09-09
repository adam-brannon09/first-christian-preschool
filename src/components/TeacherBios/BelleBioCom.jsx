import { Link } from "react-router-dom";
import Belle from "../../assets/teacherHeadshots/belleHeadshot.jpg";

function BelleBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Belle} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Edwards</h1>
          <p className="py-6">
            Belle Lloyd Bio Here
          </p>
          <Link onClick={() => window.history.back()} to="#staff" className="btn btn-outline">Back</Link>
        </div>
      </div>
    </div>
  );
}

export default BelleBio;
