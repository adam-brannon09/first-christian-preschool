import { Link } from "react-router-dom";
import Chelsea from "../../assets/teacherHeadshots/Chelsea.jpg";

function DeramusBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Chelsea} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Deramus</h1>
          <p className="py-6">
            Hi! My name is Chelsea and I am the Three A teacher here at First
            Christian Preschool. I have worked in childcare since 2018 and have
            loved every minute of it. Besides teaching sweet kiddos, I also love
            traveling, baking, hunting, line dancing, and all new adventures! I
            got engaged in December of 2023 to my amazing fiancé, Kevin. We just
            bought our forever home in Paxton, FL after living in Panama City
            for the past two years. We are enjoying planning our wedding and
            future investments while our dogs, Bird, Layla, and Toccoa, enjoy
            their new backyard and lake! We still drive down each Sunday to our
            incredible church, Lighthouse, in Panama City. We are so blessed to
            be where we are in life and I am so excited to be teaching your
            children this year!
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

export default DeramusBio;
