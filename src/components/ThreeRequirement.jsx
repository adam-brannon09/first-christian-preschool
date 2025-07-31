function ThreeRequirement() {
  return (
    <div>
      {/* Dropdown */}
      <div className="collapse bg-base-200 mt-5">
        <input type="checkbox" className="peer" />
        <div
          className="collapse-title bg-white font-bold text-xl"
          style={{ color: "#ff6f61" }}
        >
          Giraffe and Dolphins Classroom
        </div>
        <div
          className="collapse-content bg-white "
          style={{ color: "#ff6f61" }}
        >
          <ul className="list-disc ml-5 text-[#ff6f61]">
            <li>Must be 3 years old by September 1st</li>
            <li>Must be potty trained</li>
            <li>Parents provide adequate change of clothes</li>
            <li>Parents provide a thermos with ice water daily</li>
            <li>Parents provide 2 snacks and a lunch</li>
            <li>Hours: 7a-5:30p M-F</li>
            <li>$100 Enrollment Fee</li>
            <li>$115 Curriculum Fee</li>
          </ul>
        </div>
      </div>
      {/* Dropdown */}
    </div>
  );
}
export default ThreeRequirement;
