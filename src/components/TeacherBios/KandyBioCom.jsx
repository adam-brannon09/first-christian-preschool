import { Link } from "react-router-dom";
import Kandy from "../../assets/newHeadshots/Kandy.jpg";

function KandyBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Kandy} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Kaminski</h1>
          <p className="py-6 text-lg">
            Originally from Northeastern Pennsylvania, I made the move to
            Freeport, Florida in 2001. My husband, Raul Gabriel, and I enjoy
            life in the beautiful Eucheeanna Valley with our son, Josiah. Over
            the years, I’ve had the opportunity to work in a variety of fields
            including childcare, accounting, security, and construction. These
            experiences have shaped who I am, but my heart has always been in
            early childhood education. I love spending time outdoors and have a
            passion for the performing arts. In the classroom, I enjoy blending
            fun and learning—watching young children grow and discover brings me
            so much joy. This will be my 4th year at First Christian Preschool,
            and I’m so grateful to be a part of this amazing team. I truly
            consider it an honor to help guide and care for your little ones
            each day!
          </p>
          <Link to="/#kandy" className="btn btn-outline">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default KandyBio;
