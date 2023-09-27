import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen px-8">
            <div className="text-center max-w-xl text-[#0B0B0B]">
                <h2 className="text-7xl font-semibold">Oops!</h2>
                <h4 className="text-3xl font-medium my-4">Error 404 - Page Not Found</h4>
                <p className="text-xl text-[#0B0B0BB2]">
                    It looks like you've taken a wrong turn. <br />
                    The page you're looking for might have been moved, deleted, or it could simply be hiding.
                </p>
            </div>
            <Link to="/">
                <button className="bg-[#FF444A] border py-3 px-8 rounded-full text-white font-semibold mt-8">Return to Homepage</button>
            </Link>
        </div>
    );
};

export default ErrorPage;