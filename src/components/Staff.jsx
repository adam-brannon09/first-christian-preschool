import Placeholder from "../assets/Female-Placeholder.png";
import Murphy from "../components/TeacherCards/Murphy";
import Kimberlyn from "../components/TeacherCards/Wright";
import Edwards from "../components/TeacherCards/Edwards";
import Jami from "../components/TeacherCards/Jami";
import Zorn from "../components/TeacherCards/Zorn";
import Kennedy from "../components/TeacherCards/Kennedy";
import Kandy from "../components/TeacherCards/Kandy";
import DeRamus from "../components/TeacherCards/DeRamus";

function Staff() {
  return (
    <div className=" shadow-l " id="staff">
      <h1 className="text-4xl text-center pt-10 font-bold">Our Teachers</h1>
      
        <div className="flex flex-wrap">
          <Murphy />
          <Kimberlyn />
          <Edwards />
        </div>

        <div className="flex flex-wrap">
          <Kennedy />
          <Jami />
          <Kandy />
        </div>

        <div className="flex flex-wrap">
          <DeRamus />
          <Zorn />
        </div>
      </div>
   
  );
}
export default Staff;
