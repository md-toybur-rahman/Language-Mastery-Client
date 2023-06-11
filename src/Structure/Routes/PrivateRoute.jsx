import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='h-[100vh] flex items-center justify-center'>
            <div className='flex gap-5'>
                <progress className='progress w-40 h-5'></progress>
                <progress className='progress w-40 h-5'></progress>
            </div>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;