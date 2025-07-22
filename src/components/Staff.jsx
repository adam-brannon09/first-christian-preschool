import Murphy from "../components/TeacherCards/Murphy";
import Kimberlyn from "../components/TeacherCards/Wright";
import Abbey from "../components/TeacherCards/Abbey";
import Zorn from "../components/TeacherCards/Zorn";
import Kennedy from "../components/TeacherCards/Kennedy";
import Kandy from "../components/TeacherCards/Kandy";
import DeRamus from "../components/TeacherCards/DeRamus";
import Wilson from "../components/TeacherCards/Wilson";
import Lloyd from "../components/TeacherCards/Lloyd";
import Belle from "../components/TeacherCards/Belle";
import Mccullough from "./TeacherCards/Mccullough";
import King from "./TeacherCards/King";
import Lanning from "./TeacherCards/Lanning";

function Staff() {
  return (
    <div className=" shadow-l " id="staff">
      <h1 className="text-4xl text-center pt-10 font-bold">Our Teachers</h1>

      <section className="flex flex-wrap my-10">
      
        
          <div className="mx-auto my-4"><Murphy/></div>
          <div className="mx-auto my-4"><Mccullough /></div>
          <div className="mx-auto my-4"><Kimberlyn /></div>
          <div className="mx-auto my-4"><Wilson /></div>
          <div className="mx-auto my-4"><Kennedy /></div>
          <div className="mx-auto my-4"><Abbey /></div>
          <div className="mx-auto my-4"><King /></div>
          <div className="mx-auto my-4"><DeRamus /></div>
          <div className="mx-auto my-4"><Lanning /></div>
          <div className="mx-auto my-4"><Lloyd/></div>
          <div className="mx-auto my-4"><Belle /></div>
          <div className="mx-auto my-4"><Zorn /></div>
          <div className="mx-auto my-4"><Kandy /></div>

       
        </section>
      </div>
   
  );
}
export default Staff;
