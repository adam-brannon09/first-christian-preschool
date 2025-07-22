import { Link } from "react-router-dom";
import Katelyn from "../../assets/newHeadshots/kingHeadshot.jpg";

function KingBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Katelyn} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. King</h1>
          <p className="py-6">
            Hi! My name is Katelyn King and I am the VPK aide at First Christian
            Preschool. This is my first year at FCP and I’m so happy to be a
            part of this team. The past five years I have taught in elementary
            school and I’m excited to return to my roots in the early childhood
            field. In December of 2019, I graduated with my bachelor’s degree in
            early childhood education. While in college, I placed 2nd in the
            state of Florida in the early childhood education division at the
            annual Skills USA competition. I have known from a young age that
            teaching is what I wanted to do! I have been married to my husband
            David for almost 6 years and we have two beautiful girls, Aurora
            (age 5) and Haven (age 2). Some of our favorite things are our movie
            nights in the living room and playing in the pool. God has blessed
            me beyond measure. He is my solid rock and He is faithful always! He
            has lead me to FCP and I’m grateful for this new journey. I look
            forward to working with your children and helping them to learn and
            grow each day!
          </p>
          <Link
            
            to="/#king"
            className="btn btn-outline"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default KingBio;
