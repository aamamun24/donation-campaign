import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Cards from "../../components/Cards/Cards";

const Home = () => {
    const categories = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Cards categories={categories}></Cards>
        </div>
    );
};

export default Home;