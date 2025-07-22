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
            Hi! My name is Chelsea, and I am so excited to be a teacher here at
            First Christian Preschool! I’ve been working in childcare since 2018
            and have truly loved every minute of it. Teaching young children
            brings so much joy and purpose to my life. Outside the classroom, I
            love traveling, baking, hunting, line dancing, and taking on new
            adventures! In January 2025, I married my incredible husband, Kevin,
            in beautiful New Zealand. He is a firefighter/paramedic here in
            Walton County, and together we manage our short-term rentals and TC
            company. We live in Paxton with our three spoiled pups—Bird, Layla,
            and Toccoa. On Sundays, you’ll find us at our home church,
            Lighthouse Church in Panama City, and often spending time afterward
            relaxing on the beach. We are so thankful for this season of life,
            and I am truly blessed to be part of the FCP family. I can’t wait to
            help your children learn, grow, and shine this year!
          </p>
          <Link to="/#deramus" className="btn btn-outline">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeramusBio;
