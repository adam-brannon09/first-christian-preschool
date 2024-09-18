import { Link } from "react-router-dom";
import Jami from "../../assets/teacherHeadshots/jamiHeadshot.jpg";

function JamiBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Jami} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Jami</h1>
          <p className="py-6">
            My name is Mrs. Jami and I am beyond excited to be the lead VPK B
            Teacher. This is my 3rd year in the lead teacher role and I am so
            excited to begin this year with knowledge and experience! My
            approach in the classroom is to treat each child's needs
            individually while instilling core tenets such as teamwork and
            kindness. Though I tend to be strict when it comes to manners and
            maintaining a peaceful class environment, I always encourage
            laughter, dancing, and singing. To me, being a wife and a mother are
            my most important jobs, however being a teacher is truly my
            ministry. Aside from teaching numbers and letters to your little
            ones, I intend to teach them about Jesus, how to pray, and to show
            them an example of what it means to be a disciple of Christ.
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

export default JamiBio;
