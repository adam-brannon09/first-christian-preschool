
import Background from "../../src/assets/building.jpg"


function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url(${Background})`,
      }}
    >
      <div className="hero-overlay bg-opacity-40 shadow-lg"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">First Christian Preschool</h1>
          <p className="mb-5 text-white text-2xl">
            A Ministry of First Christian Church of Defuniak Springs, Florida
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
