import { Link } from "react-router-dom";
import Kandy from "../../assets/teacherHeadshots/kandyHeadshot.jpg";

function KandyBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Kandy} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Kaminski</h1>
          <p className="py-6 text-lg">
            Hello, my name is Kandy Kaminski and I am a Two’s assistant here at
            First Christian Preschool. I spent the first half of my life in
            Northeastern Pennsylvania and then moved to Freeport in 2001. I
            married my husband in 2014 and together we enjoy our son, Josiah.
            I’ve worked in various fields throughout the years such as
            childcare, accounting, security and construction. I like to combine
            learning with the performing arts and fun! It’s an honor to be a
            part of this team!
          </p>
          <Link to="/kandybio" className="btn btn-primary">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default KandyBio;
