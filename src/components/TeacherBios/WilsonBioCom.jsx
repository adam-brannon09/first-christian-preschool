import { Link } from "react-router-dom";
import Brittany from "../../assets/teacherHeadshots/wilsonHeadshot.jpg";

function WilsonBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Brittany} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Wilson</h1>
          <p className="py-6 text-lg">
            Hello! My name is Brittany Wilson and I am a Preschool Assistant
            here at First Christian Preschool! After my oldest son attended FCP,
            we immediately fell in love with this staff and atmosphere! I am
            thankful to watch my boys grow up and be a part of the FCP family. I
            was born and raised in Florida! My husband and I , who are high
            school sweethearts, have been married since 2016 and we enjoy our
            two boys: Easton and Fletcher. We enjoy life on our farm in Mossy
            Head where we love all things outdoors! From our buggy rides,
            hunting, fishing and camping adventures. I am so excited to join
            this school and can’t wait to start this chapter!
          </p>
          <Link to="/wilsonbio" className="btn btn-primary">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WilsonBio;
