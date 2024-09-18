import { Link } from "react-router-dom";
import Sandy from "../../assets/teacherHeadshots/mcculloughHeadshot.jpg";

function McculloughBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Sandy} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Edwards</h1>
          <p className="py-6">
            Hi! My name is Sandy McCullough and I am the Assistant Director here
            at First Christian Preschool. I married my husband, Robbie, in 2008
            We enjoy our fur babies: Delaney, Darcey and Declan. We moved to
            Florida from Dahlonega Georgia in 2017. I enjoy baking, crafting,
            and everything Scentsy! FCP has been a blessing to my family and I
            look forward to working with the amazing staff and helping your
            children learn and grow!
          </p>
          <Link
            onClick={() => window.history.back()}
            to="#staff"
            className="btn btn-outline"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default McculloughBio;
