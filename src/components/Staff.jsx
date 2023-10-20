import Placeholder from '../assets/Female-Placeholder.png'

function Staff() {
    return (
        <>
            <h1 className='text-5xl text-center my-8'>Our Staff</h1>
            <div className='join my-10'>
                <div className="card w-96 bg-base-100 shadow-xl mx-12">
                    <figure><img src={Placeholder} alt="Teacher" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Teacher</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl mx-12">
                    <figure><img src={Placeholder} alt="Teacher" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Teacher</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl mx-12">
                    <figure><img src={Placeholder} alt="Teacher" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Teacher</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
                    </div>
                </div>


            </div>

        </>
    )
}
export default Staff