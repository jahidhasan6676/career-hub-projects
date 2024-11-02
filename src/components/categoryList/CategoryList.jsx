import accountImg from '../../assets/icons/accounts.png';
import creativeImg from '../../assets/icons/creative.png';
import engineerImg from '../../assets/icons/chip.png';
import marketingImg from '../../assets/icons/marketing.png'

const CategoryList = () => {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mb-8'>
            {/* text section */}
            <div className="text-center space-y-2 mb-8">
            <h3 className="font-bold text-xl">Job Category List</h3>
            <p className="text-sm font-medium text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            {/* card section */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 rounded-lg'>
                {/* 1st card */}
                <div className='bg-gray-100 p-4  space-y-1 rounded-md'>
                    <img className='' src={accountImg} alt="" />
                    <h5 className='font-bold'>Account & Finance</h5>
                    <p className='font-medium text-gray-500'>300 jobs available</p>
                </div>
                {/* 2nd card */}
                <div className='bg-gray-100 p-4 space-y-1 rounded-md'>
                    <img src={engineerImg} alt="" />
                    <h5 className='font-bold'>Engineering job</h5>
                    <p className='font-medium text-gray-500'>200 jobs available</p>
                </div>
                {/* 3rd card */}
                <div className='bg-gray-100 p-4 space-y-1 rounded-md'>
                    <img src={creativeImg} alt="" />
                    <h5 className='font-bold'>Creative Design</h5>
                    <p className='font-medium text-gray-500'>400 jobs available</p>
                </div>
                {/* 4rth card */}
                <div className='bg-gray-100 p-4 space-y-1 rounded-md'>
                    <img src={marketingImg} alt="" />
                    <h5 className='font-bold'>Marketing & Sales</h5>
                    <p className='font-medium text-gray-500'>300 jobs available</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;