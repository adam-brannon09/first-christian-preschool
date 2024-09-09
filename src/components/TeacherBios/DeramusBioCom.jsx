import { Link } from "react-router-dom";
import Chelsea from "../../assets/teacherHeadshots/deramusHeadshot.jpg";

function DeramusBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Chelsea} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Deramus</h1>
          <p className="py-6">
            Hi! My name is Chelsea DeRamus and I am a Preschool Assistant at
            First Christian Preschool and a realtor with EXP. Realty! I have
            worked in childcare since 2018 and have experience as a nanny! While
            being a nanny I received my realtor license. My Fiancée’, Kevin, and
            I adventured into the RV life to travel and now we have bought our
            first home together in Panama City! We enjoy our two fur babies,
            Layla and Bird and the beach on the weekends! After working only in
            real estate for a few months I realized I have a true passion for
            children and missed working at FCP! I am so excited to help your
            children learn and grow!
          </p>
          <Link onClick={() => window.history.back()} to="#staff" className="btn btn-outline">Back</Link>
        </div>
      </div>
    </div>
  );
}

export default DeramusBio;
