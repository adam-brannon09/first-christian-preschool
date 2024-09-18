import React from "react";
import { Link } from "react-router-dom";
import April from "../../assets/teacherHeadshots/AprilHeadshot.jpg";

function MuphyBio() {
  return (
    <div className="hero bg-base-200 min-h-screen mt-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={April} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-6xl font-bold">Mrs. Murphy</h1>
          <p className="py-6 text-lg">
            Hello, my name is April Murphy. It is an honor to introduce myself
            as the Director of First Christian Preschool. I look forward to
            partnering with teachers and parents to provide our students with a
            superior childcare experience that allows them to thrive
            academically, socially, and spiritually. Prior to First Christian
            Preschool, I have had the opportunity to teach in many wonderful
            places and meet many exceptional people. My favorite part about my
            job is being able to love Jesus and show that love to the children
            here at FCP! My Early Childhood journey has spanned over 25 years,
            and I enjoy bringing those experiences to FCP. I was awarded my
            National Early Childhood Credential in 2005 and a Director’s
            Credential in 2014. In 2008, my family and I moved from the BIG city
            to a very small town called Darlington, where we embraced country
            living. I married my husband, Larry, who is a chef, in 1994, and
            together we enjoy our children: Brendon, Kymberlyn, and Griffon.
            Brendon blessed our family with identical twin girls, Alice and
            Amelia, in 2019. He married his wife, Makenzie, this year. Kymberlyn
            married her husband, James, in December 2022, and is welcoming a
            baby boy expecting a baby boy, John David, in September; she enjoys
            teaching here at FCP and traveling. Griffon married his wife,
            Mercedes, in 2021. They had our first grandson, Henry, in 2022 and
            welcomed another baby boy, Oliver, this past July. I get great joy
            from loving my children and being a Honey to my five grandchildren!
            My husband and I also enjoy our Chocolate Labs, Reece and Rollyns,
            who require a lot of our attention! In my free time, I enjoy
            watching NY Giants football, traveling, and shopping!!
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

export default MuphyBio;
