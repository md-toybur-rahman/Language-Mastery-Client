import useAxios from "../../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import AdminClassesCard from "../../Home/ClassesSection/AdminClassesCard";
import useHelmet from "../../../../hooks/useHelmet";



const ManageClasses = () => {
    const [axiosSecure] = useAxios();
    const { data: classes = [] } = useQuery(['instructors_requirements'], async () => {
        const res = await axiosSecure.get('/instructors_requirements')
        return res.data;
    })
    console.log(classes);
    return (
        <div>
            {useHelmet('Manage Class')}
            {
                classes.map(singleClass => <AdminClassesCard key={singleClass._id} singleClass={singleClass}></AdminClassesCard>)
            }
        </div>
    );
};

export default ManageClasses;