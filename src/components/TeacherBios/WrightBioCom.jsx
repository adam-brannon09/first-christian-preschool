import { Link } from "react-router-dom";
import Kimberlyn from "../../assets/teacherHeadshots/kimberlynHeadshot.jpg";

function WrightBio() {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={Kimberlyn}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Mrs. Wright</h1>
      <p className="py-6 text-lg">
      Hello, my name is Kymberlyn Wright, and I am the Assistant Director and VPK B teacher here at First Christian Preschool. 
I have been in early childhood since 2016 and my passion is teaching children the love of Jesus and working with them to become successful in life!
 I have received my Early Childhood credential, certification for the 
VPK program and CPR/First Aid.

I married my husband, James, in December of 2022
and we enjoy our days by the water! 
I have two nieces, Alice and Amelia, and a nephew, Henry. 
Aunt life is the best life! 
I look forward to working with our families and staff for a wonderful year and
am eager to see what God has in store for us. 
Let the fun begin!
 
      </p>
      <Link onClick={() => window.history.back()} to="#staff" className="btn btn-outline">Back</Link>
    </div>
  </div>
</div>
  )
}

export default WrightBio