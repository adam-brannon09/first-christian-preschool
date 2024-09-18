import { Link } from "react-router-dom";
import Katelyn from "../../assets/teacherHeadshots/lloydHeadshot.jpg";

function LloydBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Katelyn} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Lloyd</h1>
          <p className="py-6 text-lg">
            Hi! My name is Katelyn Lloyd and I am the Two’s teacher here at
            First Christian Preschool. I was born and raised in DeFuniak and
            spent 4 years in Pensacola where I got my start in the early
            childhood field. I absolutely love teaching and learning about child
            development, getting to watch children learn and grow into
            themselves is what I enjoy most about working with children. I enjoy
            spending time with my family and pets, gardening, reading, and
            traveling. I currently have 3 pets: a dog Circe, a cat Toro, and a
            crested gecko named Astrid. I love to learn and working children you
            are constantly learning new things about them, yourself and the
            world we live in! I am super excited to get to teach and care for
            your children.
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

export default LloydBio;
