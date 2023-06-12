import useAdmin from "../../../../hooks/useAdmin";
import useInstructor from "../../../../hooks/useInstructor";
import ManageUser from "../ManageUser/ManageUser";
import MySelectedClass from "../MySelectedClass/MySelectedClass";


const DashboardLayout = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


    return (
        <div>
            {
                !isAdmin && !isInstructor ? 
                <MySelectedClass></MySelectedClass> :
                <></>
            }
            {
                isAdmin ? 
                <ManageUser></ManageUser> : 
                <></>
            }
            {
                isInstructor ? 
                <h1>Hello Instructor</h1> : 
                <></>
            }
        </div>
    );
};

export default DashboardLayout;