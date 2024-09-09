import { Link } from "react-router-dom";
import Martha from "../../assets/teacherHeadshots/marthaHeadshot.jpg";

function GivensBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Martha} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Givens</h1>
          <p className="py-6">
            Hello, my name is Martha Givens and I am the FCP Custodian. I enjoy
            making sure FCP is a clean, disinfected and safe environment for all
            students and staff! I have been a member of First Baptist Church
            since 1984 and have worked in the nursery for many years. I am
            blessed to be a part of this school and I look forward to seeing
            what God has in store for us!
          </p>
          <Link onClick={() => window.history.back()} to="#staff" className="btn btn-outline">Back</Link>
        </div>
      </div>
    </div>
  );
}

export default GivensBio;
