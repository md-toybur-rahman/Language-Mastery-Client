import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col items-center justify-center h-[100vh]">
            <div>
                <img className="w-52 mb-10" src="https://i.ibb.co/f9xmLxS/pngegg-3.png" alt="" />
            </div>
            <div className="mb-5">
                <h1 className="text-4xl font-bold">100 + 200 = <span className="text-red-500">404</span></h1>
            </div>
            <div className="text-center">
                <h2 className="text-2xl font-bold">{error.error.message}</h2>
                <Link to='/'><button className="btn bg-[#1BABAF] text-white hover:text-black mt-10">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;