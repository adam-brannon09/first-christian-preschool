function VpkRequirement() {
    return (
        <div>
            {/* Dropdown */}
            <div className="collapse bg-base-200 mt-5 shadow-l">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-white font-bold text-xl" style={{ color: "#ff6f61" }}>
                    VPK
                </div>
                <div className="collapse-content bg-white " style={{ color: "#ff6f61" }}>
                <ul className="list-disc ml-5 text-[#ff6f61]">
    <li>Must be 4 years old by September 1st</li>
    <li>Parents provide 1 snack and a lunch</li>
    <li>
      Must obtain VPK voucher from the
       <a href="https://familyservices.floridaearlylearning.com/" target="_blank" rel="noopener noreferrer" className=" text-blue-600"> Early Learning Coalition</a>
    </li>
    <li>Free program with VPK voucher</li>
    <li>Space is limited</li>
    <li>$100 enrollment fee</li>
  </ul>
                </div>
            </div>
            {/* Dropdown */}
        </div>
    )
}
export default VpkRequirement