import { Link } from "react-router-dom";
import Belle from "../../assets/teacherHeadshots/belleHeadshot.jpg";

function BelleBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Belle} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Lloyd</h1>
          <p className="py-6">
            Hi my name is Belle Lloyd and I am the Two’s teacher at First
            Christian Preschool. I have been working in childcare for the past 3
            years and have loved every minute of it! I was born and raised in
            DeFuniak Springs and am so excited to be back after being in
            Pensacola for the past 4 years. I love animals and have two dogs,
            Circe and Winnie, a cat named Toro, and a crested gecko named
            Astrid! I have 5 siblings and love spending time with them. I have
            always loved learning from and teaching children! Children see the
            world in such interesting ways and are a joy to watch learn and to
            learn from them. I am so excited for the journey that I will have at
            this wonderful school and all the things I will learn from your
            children!
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

export default BelleBio;
