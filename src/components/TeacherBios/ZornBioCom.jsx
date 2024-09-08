import { Link } from "react-router-dom";
import Zorn from "../../assets/teacherHeadshots/zornHeadshot.jpg";

function ZornBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Zorn} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Zorn</h1>
          <p className="py-6 text-lg">
            Hi! My name is Cheryl Zorn, and I am a VPK Assistant here at First
            Christian Preschool. I have been married for 43 years, and have two
            children, four grandchildren and three great grandchildren. I was in
            the business world for 30 years. The highlights of my career have
            been in office administration and accounting management. I have also
            been teaching children of all ages for 20 plus years: from VBS age,
            all the way up to youth group. Although my career has always been
            elsewhere, I certainly feel called by God to Early Childhood
            Development. I have enjoyed teaching at First Christian Preschool
            since 2017. I am excited to continue on this path God has for me and
            I can’t wait to see your children grow in Jesus!
          </p>
          <Link to="/" className="btn btn-primary">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ZornBio;
