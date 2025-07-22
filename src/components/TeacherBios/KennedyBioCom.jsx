import { Link } from "react-router-dom";
import Kristen from "../../assets/teacherHeadshots/kennedyHeadshot.jpg";

function KennedyBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Kristen} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Kennedy</h1>
          <p className="py-6">
            Hello! My name is Kristen, and I am the trainer here at First
            Christian Preschool. I married my wonderful husband, Eric, in
            November of 2018. We are blessed with our beautiful son, Milo, who
            was born in October 2024. I’ve lived in Florida my whole life and
            currently reside in Ponce de Leon with my husband, our sweet boy,
            our cats Pixie and Pumpkin, and our dogs Luna and Kya. We are proud
            members of First Baptist Church in Ponce de Leon. I earned an
            associate degree in Christian Education in 2015 and received my
            Florida Child Care Professional Credential in 2020. In my spare
            time, I love baking, traveling, and spending quality time with my
            family. It is such an honor to be part of the FCP family, and I am
            so excited to help your children learn, grow, and feel God’s love
            each day!
          </p>
          <Link to="/#kennedy" className="btn btn-outline">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default KennedyBio;
