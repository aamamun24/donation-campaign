import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!</h2>
            <Link to="/">
                <button className='bg-green-400 text-white text-lg font-semibold py-2 px-4 rounded mt-5'>Go Back Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;