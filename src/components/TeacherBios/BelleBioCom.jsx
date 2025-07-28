import { Link } from "react-router-dom";
import Belle from "../../assets/newHeadshots/Belle.jpg";

function BelleBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Belle} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Lloyd</h1>
          <p className="py-6">
            Hello! My name is Belle Lloyd, and I am the Preschool Assistant here
            at First Christian Preschool. I have been working in childcare for
            the past four years and have truly loved every minute of it! I was
            born and raised right here in DeFuniak Springs and recently returned
            after spending a few years in Pensacola. I absolutely love animals—I
            have three dogs, two cats, and two hamsters! I also come from a big
            family with five siblings, and we enjoy spending time together,
            especially going on fun trips. Working with children has always been
            a passion of mine. I love how they view the world with such wonder
            and curiosity. Every day brings something new to learn—both for them
            and for me! I’m so excited to be part of this amazing school and
            can’t wait to see what this journey brings. I look forward to
            learning and growing alongside your children!
          </p>
          <Link to="/#belle" className="btn btn-outline">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BelleBio;
