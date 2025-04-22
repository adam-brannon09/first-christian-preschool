function OneRequirement() {
  return (
    <div>
      {/* Dropdown */}
      <div className="collapse bg-base-200 mt-5">
        <input type="checkbox" className="peer" />
        <div
          className="collapse-title bg-white font-bold text-xl"
          style={{ color: "#ff6f61" }}
        >
          1 Year Old Class
        </div>
        <div
          className="collapse-content bg-white "
          style={{ color: "#ff6f61" }}
        >
          <ul className="list-disc ml-5 text-[#ff6f61]">
            <li>Must be 1 Year old by September 1st</li>
            <li>Must be walking, free of pacifiers & bottles</li>
            <li>Parents provide 2 snacks and a lunch</li>
            <li>$100 enrollment fee</li>
          </ul>
        </div>
      </div>
      {/* Dropdown */}
    </div>

    
  );
}
export default OneRequirement;
