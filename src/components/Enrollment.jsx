import OneRequirement from "./OneRequirement"
import TwoRequirement from "./TwoRequirement"
import ThreeRequirement from "./ThreeRequirement"
import FourRequirement from "./FourRequirement"
import VpkRequirement from "./VpkRequirement"

function Enrollment() {
    return (
        <div className="hero min-h-screen background" id="enrollment">
            <div className="hero-content text-center">
                <div className="w-full">
                    <h1 className="text-3xl text-white font-bold text-4xl pb-5">Class Information</h1>
                    <OneRequirement />
                    <TwoRequirement />
                    <ThreeRequirement />
                    {/* <FourRequirement /> */}
                    <VpkRequirement />
                </div>
            </div>
        </div>
    )
}
export default Enrollment