import { Link } from "react-router-dom";
import Katelyn from "../../assets/newHeadshots/Katelyn.jpg";

function LloydBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Katelyn} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Lloyd</h1>
          <p className="py-6 text-lg">
            Hello! My name is Katelyn Lloyd, and I am the Three-Year-Old Teacher
            here at First Christian Preschool. I was born and raised in DeFuniak
            Springs and spent four years in Pensacola, where I began my journey
            in the early childhood education field. I absolutely love teaching
            and have a deep passion for child development. Watching children
            learn, grow, and discover who they are is one of the greatest joys
            of my job! In my free time, I enjoy being with my family and pets,
            gardening, reading, and traveling. I have three dogs, two cats, and
            two hamsters! I believe that working with children is a constant
            learning experience—you not only teach them, but they also teach you
            so much about life, joy, and curiosity. I am so excited to teach and
            care for your little ones and to be a part of their journey here at
            FCP!
          </p>
          <Link to="/#lloyd" className="btn btn-outline">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LloydBio;
