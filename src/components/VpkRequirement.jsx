function VpkRequirement() {
  return (
    <div>
      {/* Dropdown */}
      <div className="collapse bg-base-200 mt-5 shadow-l">
        <input type="checkbox" className="peer" />
        <div
          className="collapse-title bg-white font-bold text-xl"
          style={{ color: "#ff6f61" }}
        >
          VPK - Full Time | Part Time
        </div>
        <div
          className="collapse-content bg-white "
          style={{ color: "#ff6f61" }}
        >
          <ul className="list-disc ml-5 text-[#ff6f61]">
            <li>Must be 4 years old by September 1st</li>
            <li>Must be potty trained</li>
            <li>Parents provide adequate change of clothes</li>
            <li>Parents provide a thermos with ice water daily</li>
            <li>Parents provide 1 snack and a lunch</li>

            <li>Free program with VPK voucher</li>
            <li>Space is limited</li>
            <li>Purchase of FCP T-Shirt for Chapel Day</li>
            <li>$100 enrollment fee</li>
            <li>$135 Curriculum Fee</li>
            <li>
              Must obtain VPK voucher from the
              <a
                href="https://familyservices.floridaearlylearning.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                {" "}
                Early Learning Coalition
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Dropdown */}
    </div>
  );
}
export default VpkRequirement;
