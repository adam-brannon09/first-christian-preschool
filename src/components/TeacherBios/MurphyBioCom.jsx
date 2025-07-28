import { Link } from "react-router-dom";
import April from "../../assets/newHeadshots/AprilHeadshot.jpg";

function MuphyBio() {
  return (
    <div className="hero bg-base-200 min-h-screen mt-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={April} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-6xl font-bold">Mrs. Murphy</h1>
          <section>
          <p className="py-6 text-lg">
            Hello! My name is April, and I have the joy and honor of serving as
            the Director of First Christian Preschool. I’ve been employed by
            First Baptist Church since 2013 and have proudly served as the
            Director of First Christian Preschool since 2016. With over 30 years
            of experience in early childhood education, I have been blessed to
            teach in many wonderful places and meet so many amazing families and
            little ones along the way. I received my National Early Childhood
            Credential in 2005 and my Director’s Credential in 2014, but my
            greatest learning has come from being with children and seeing the
            world through their eyes! </p>
            <p className="py-6 text-lg">
             Some of my very favorite parts of this job
            include assisting families and staff daily, helping meet their needs
            with love and understanding, and most of all, sharing the love of
            Jesus in everything we do. It is such a gift to help create a place
            where children feel safe, loved, and excited to learn and
            grow—spiritually, socially, and academically. </p>
            
            <p className="py-6 text-lg">In 2008, my family and
            I moved from the big city to the quiet little town of Darlington,
            and we’ve loved the slower pace and strong sense of community. I
            married my best friend, Larry, in 1994. He’s a chef, so I’m lucky to
            be spoiled with delicious food! </p>
            
            <p className="py-6 text-lg">We have three amazing children who
            make us proud every day. Brendon, a history teacher at Walton Middle
            School, is married to Makenzie, and together they are raising
            identical twin girls, Alice and Amelia, with a new baby on the way
            next year. Kymberlyn has been part of our preschool family since
            2016—she teaches with heart and excellence. She and her husband
            James are the proud parents of their sweet son, John David. Our
            youngest, Griffon, recently graduated and is now an accountant at a
            firm in Pensacola. He and his wife Mercedes are raising two precious
            boys—Henry and Oliver.That makes five wonderful grandchildren who
            call me “Honey,” and being their grandmother is truly one of the
            greatest joys of my life.</p>
            
             <p className="py-6 text-lg">When I’m not at preschool, you’ll find me
            spending time with my family, cheering on the NY Giants, traveling,
            shopping, or loving on our two spoiled Chocolate Labs, Reece and
            Rollyns. I’m so thankful to be a part of the First Christian
            Preschool family and can’t wait to get to know you and your child!
            </p>
          </section>
          <Link
            // onClick={() => window.history.back()}
            to="/#murphy"
            className="btn btn-outline"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MuphyBio;
