import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import kicknFlips1 from "../assets/documents/Kickin Flips 1.png";
import kicknFlips2 from "../assets/documents/Kickin Flips 2.png";

function KicknFlips() {
  return (
    <div>
    <Navbar/>
    <div className="flex flex-col gap-6 p-6 bg-gray-100 min-h-screen">
      <div>
        {/* <h2 className="text-xl font-bold mb-4 text-center">Kickin Flips 1</h2> */}
        <img
          src={kicknFlips1}
          alt="Kickin Flips 1"
          className="w-full mx-auto rounded shadow"
        />
      </div>

      <div>
        <img
          src={kicknFlips2}
          alt="Kickin Flips 2"
          className="w-full mx-auto rounded shadow"
        />
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default KicknFlips;
