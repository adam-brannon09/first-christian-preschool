import { Link } from "react-router-dom";
import Kymberlyn from "../../assets/newHeadshots/WrightHeadshot.jpg";

function WrightBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Kymberlyn} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Mrs. Wright</h1>
          <br />
          <section>
            <p className="py-6 text-lg mx-14">
              Hello! My name is Kymberlyn, and I’ve been a part of the First
              Christian Preschool family since 2016. Working in early childhood
              education has been such a blessing in my life, and I truly love
              what I do. Since 2017, I’ve had the privilege of teaching and
              coordinating our VPK program, helping prepare our little ones for
              success both in school and beyond. </p>
              <p className="py-6 text-lg mx-14">
              My greatest passion is sharing
              the love of Jesus with children and supporting their growth as
              they begin their journey through life. I hold an Early Childhood
              Credential, VPK Certification, and CPR/First Aid certification,
              and I am currently pursuing a degree in Early Childhood Education.</p>

            <p className="py-6 text-lg mx-14">
              I married my husband, James, in December 2022, and together we are
              blessed with our sweet son, John David. Being his mommy is the
              greatest joy of my life! Watching him grow, explore, and learn
              reminds me daily of why I love working with children. Motherhood
              has deepened my passion for early childhood education and
              strengthened my desire to nurture and support the children and
              families we serve at FCP. </p>
              
              <p className="py-6 text-lg mx-14">In my spare time, I enjoy shopping,
              traveling, and cheering on my favorite football team, Auburn! War
              Eagle! Fun fact: In my younger years, I was a competitive
              cheerleader and proudly served as Captain of the Walton High
              School cheer team for three years. During that time, we won
              several championships—go Braves! </p>
              
              <p className="py-6 text-lg mx-14">I look forward to partnering with
              our families and staff for a wonderful school year. I can’t wait
              to see all the joy, learning, and blessings God has in store for
              us!
            </p>
          </section>
          <Link to="/#wright" className="btn btn-outline">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WrightBio;
