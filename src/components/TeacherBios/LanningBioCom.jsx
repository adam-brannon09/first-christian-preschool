import { Link } from "react-router-dom";
import Lindsey from "../../assets/newHeadshots/lindseyHeadshot.jpg";

function LanningBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Lindsey} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Lanning</h1>
          <p className="py-6">
            Hi! My name is Lindsey, and this is my second year as the Lead Teacher in the Threes class here at First Christian Preschool.
I’ve been part of the FCP family for three years, first as a parent and now as a teacher. My two sons, Tucker and Landon, have absolutely loved their time here, and it’s been such a joy to watch them grow in this nurturing environment.
Before joining the FCP team, I spent five wonderful years as a stay-at-home mom. Life with two energetic boys has kept my hands full of sports, outdoor adventures, and plenty of sunshine! If the weather is nice, chances are you’ll find us outside enjoying nature.
In my free time, I enjoy traveling, crafting, gardening, and raising chickens. I love finding creativity and peace in the little things.
I feel incredibly blessed to be part of this amazing preschool and look forward to a wonderful year of learning, growing, and making special memories with your children!

          </p>
          <Link to="/#lanning" className="btn btn-outline">Back</Link>
        </div>
      </div>
    </div>
  );
}

export default LanningBio;
