
import bannerImage from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className="w-ful hero bg-base-200 mb-14 py-5">
            <div className="hero-content flex-col lg:flex-row-reverse w-11/12 lg:w-10/12 mx-auto">
                <div className='flex-1 flex justify-center'>
                <img
                    src={bannerImage}
                    className="max-w-sm " />
                </div>
                <div className='text-center mt-5 flex-1'>
                    <h1 className="text-3xl font-bold">One Step Closer To Your <br></br> <span className='text-[#7E90FE]'>Dream Job</span></h1>
                    <p className="py-6">
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;