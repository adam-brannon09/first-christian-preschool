import TwoRequirement from "./TwoRequirement"
import ThreeRequirement from "./ThreeRequirement"
import FourRequirement from "./FourRequirement"
import VpkRequirement from "./VpkRequirement"

function Enrollment() {
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Enrollment Requirements</h1>
                    <TwoRequirement />
                    <ThreeRequirement />
                    <FourRequirement />
                    <VpkRequirement />
                </div>
            </div>
        </div>
    )
}
export default Enrollment