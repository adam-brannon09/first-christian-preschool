import { FaMapMarkerAlt, FaClock, FaAddressBook } from 'react-icons/fa';


function VerticalContact() {
    return (
        <div className="stats stats-vertical shadow ml-8 ">

            <div className="stat">
                <FaMapMarkerAlt className="text-3xl icon" />
                <br />
                <div className="stat-value text-2xl ">Address</div>
                <a href="https://www.google.com/maps/place/First+Christian+Preschool/@30.7181562,-86.1203846,17z/data=!3m1!4b1!4m6!3m5!1s0x8893d1bec7c55555:0x2a7aa3efe9304c30!8m2!3d30.7181516!4d-86.1178043!16s%2Fg%2F11ghr0wmb3?entry=ttu">
                    <div className="stat-desc text-xl">225 S. 11th St. <br />
                        Defuniak Springs, FL 32435</div>
                </a>
            </div>

            <div className="stat">
                <FaClock className="text-3xl icon" />
                <br />
                <div className="stat-value text-2xl">Opening Hours</div>
                <div className="stat-desc text-2xl">Monday to Friday</div>
                <div className="stat-desc text-2xl">9:00 - 4:30</div>
            </div>

            <div className="stat">
                <FaAddressBook className="text-3xl icon" />
                <br />
                <div className="stat-value text-2xl">Contact</div>
                <a href="tel:8505202167" className="stat-desc text-2xl">(850)520-2167</a>
                <a href="mailto:aprilmurphyfcp@gmail.com" className="stat-desc text-2xl">aprilmurphyfcp@gmail.com</a>
            </div>

        </div>
    )
}
export default VerticalContact