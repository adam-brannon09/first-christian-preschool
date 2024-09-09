import { Link } from "react-router-dom";
import Jami from "../../assets/teacherHeadshots/jamiHeadshot.jpg";

function JamiBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Jami} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Jami</h1>
          <p className="py-6">
            Hello! My name is Mrs. Jami and as the Threes B teacher, I just want
            to share how excited I am for the opportunity to pour love and
            wisdom into your little one. My approach in the classroom is to
            treat each child’s needs individually. I love to sing and play and
            to be silly- I believe that laughter brings joy and joy is an
            essential component of development. I love teaching little ones
            about Jesus, teaching them to pray, and showing them how to exhibit
            kindness and care. To me, being a wife and a mother is the most
            important role in my life, so I am happy to work in a place where I
            can use those skills of nurturing, maintaining order, and sharing
            the heart of God with the most precious beings on earth- all while
            my own little one learns in the classroom next door!
          </p>
          <Link onClick={() => window.history.back()} to="#staff" className="btn btn-outline">Back</Link>
        </div>
      </div>
    </div>
  );
}

export default JamiBio;
