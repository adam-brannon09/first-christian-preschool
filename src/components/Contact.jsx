import { FaFacebook, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

function Contact() {
    return (
        <div className="hero min-h-screen bg-rose-400" id='contact'>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl text-white font-bold">Get in Touch!</h1>
                    <p className="py-6 text-white">Feel free to call or email us with any questions or to set up a tour and meet our friendly staff members!</p>
                    <div className="m-5">
                        <a href="tel:8509511225"><button className="btn btn-outline text-white m-2"><FaPhoneAlt className='text-2xl' />Call</button></a>
                        <a href="mailto:aprilmurphyfcp@gmail.com"><button className="btn btn-outline text-white m-2"><FaEnvelope className='text-2xl' />Email</button></a>
                        <a href='https://www.facebook.com/firstchristianpreschool.net'><button className="btn btn-outline text-white m-2"> <FaFacebook className='text-2xl' />Facebook</button></a>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Contact