import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAdmin from "../../hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <div className='h-[100vh] flex items-center justify-center'>
            <div className='flex gap-5'>
                <progress className='progress w-40 h-5'></progress>
                <progress className='progress w-40 h-5'></progress>
            </div>
        </div>
    }
    if(user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;