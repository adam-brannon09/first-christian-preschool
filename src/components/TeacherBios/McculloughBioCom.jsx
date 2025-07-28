import { Link } from "react-router-dom";
import Sandy from "../../assets/newHeadshots/Sandy.jpg";

function McculloughBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Sandy} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. McCullough</h1>
          <br />
          <p className="py-6">
            Hi! My name is Sandy, and I am one of the VPK teachers and the Event
            Coordinator here at First Christian Preschool. I’ve been married to
            my husband, Robbie, since 2008, and we share our home with our three
            sweet fur babies—Delaney, Darcey, and Declan. We moved to DeFuniak
            Springs from the beautiful town of Dahlonega, Georgia, in 2017. In
            my free time, I love baking, crafting, and all things Scentsy! FCP
            has truly been a blessing to my family, and I’m so thankful to be
            part of such an incredible team. I look forward to helping your
            children learn, grow, and experience the love of Jesus every day!
          </p>
          <Link to="/#mccullough" className="btn btn-outline">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default McculloughBio;
