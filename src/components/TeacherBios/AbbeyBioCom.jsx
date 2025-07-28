import { Link } from "react-router-dom";
import Abbey from "../../assets/newHeadshots/Abbey.jpg";

function AbbeyBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Abbey} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Abbey Stayer</h1>
          <p className="py-6">
            My name is Abygayle Stayer, but I go by Abbey. I am a teacher’s aide
            for both the preschool and aftercare programs here at First
            Christian Preschool. I’m currently enrolled at Northwest Florida
            State College, working toward my goal of becoming a Nole at Florida
            State University to pursue a career in social work. I've had a
            special place in my heart for children for as long as I can
            remember, and for the past three years, I’ve worked in faith-based
            childcare programs. This is my first year at FCP, and I’m so excited
            to be part of such a loving and supportive school family. Outside of
            being a student and teacher, I’m also a mom! My one-year-old son,
            Tolli-Gene, is the light of my life and my best friend. I live in a
            busy household with six other people and six dogs—it's a little
            chaotic, but it’s full of love! In my free time, I enjoy reading,
            swimming in our pool during the summer, and spending time with my
            friends and family. I’m so looking forward to this school year with
            my FCP family and getting to know the sweetest group of kiddos!
          </p>
          <Link to="/#edwards" className="btn btn-outline">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AbbeyBio;
