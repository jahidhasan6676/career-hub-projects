import Banner from "../Banner/Banner";
import CategoryList from "../categoryList/CategoryList";
import JobApplications from "../JobApplications/JobApplications";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <JobApplications></JobApplications>
        </div>
    );
};

export default Home;