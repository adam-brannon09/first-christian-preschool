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
            My name is Kristen Kennedy, and I am a Preschool Aide here at First
            Christian Preschool! I married my wonderful husband, Eric Kennedy,
            in November of 2018. We are expecting our first child in November
            2024! I have lived in Florida my whole life and currently live in
            Ponce De Leon with my husband, our cats, Pixie and Pumpkin, and our
            dogs, Luna and Kya. My husband and I are both members of our home
            church, First Baptist Church in Ponce de Leon. I received an
            Associate Degree in Christian Education in 2015 and I received a
            Florida Child Care Professional Credential in 2020. In my spare
            time, I love spending time with my family, baking, and traveling. I
            am so excited and honored to be part of First Christian Preschool,
            and I look forward to teaching your children this year!
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

export default KennedyBio;
