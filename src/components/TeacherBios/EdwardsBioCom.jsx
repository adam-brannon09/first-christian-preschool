import { Link } from "react-router-dom";
import Amanda from "../../assets/teacherHeadshots/edwardsHeadshot.jpg";

function EdwardsBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Amanda} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Edwards</h1>
          <p className="py-6">
            Hi! My name is Amanda Edwards and I am the VPK A teacher here at
            First Christian Preschool. I am so grateful to be a part of the FCP
            family! God placed a calling on my heart for Early Childhood
            Education in 2022 and as always, His plan is far greater than what
            we could imagine. Loving, teaching, and pouring the love of Jesus
            into His precious children has become my passion! Prior to joining
            FCP, I was a stay-at-home mom for six years. I married my best
            friend, Brett, in 2015. Our world revolves around our two boys, ages
            7 and 3. I grew up locally in Freeport and have lived in DeFuniak
            Spring since 2015. I enjoy traveling (mostly to Disney World),
            shopping, and spending time with my family. The beach is my happy
            place so if the sun is out, you’ll most likely find me there! I’m so
            excited to learn and grow with our students!
          </p>
          <Link
            
            to="/#edwards"
            className="btn btn-outline"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EdwardsBio;
