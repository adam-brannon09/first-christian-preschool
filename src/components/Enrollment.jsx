import TwoRequirement from "./TwoRequirement"
import ThreeRequirement from "./ThreeRequirement"
import FourRequirement from "./FourRequirement"
import VpkRequirement from "./VpkRequirement"

function Enrollment() {
    return (
        <div className="hero min-h-screen background" id="enrollment">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-3xl text-white font-bold pb-5">Enrollment Requirements</h1>
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