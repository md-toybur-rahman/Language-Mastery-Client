
import { useEffect, useState } from "react";
import InstructorCard from "../Home/InstructorSection/InstructorCard";
import useHelmet from "../../../hooks/useHelmet";



const Instructors = () => {
    const [loadedInstructors, setLoadedInstructors] = useState([])
    useEffect(() => {
        fetch('https://language-mastery-server-chi.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setLoadedInstructors(data))
    }, [])
    const [instructors, setInstructors] = useState([]);
    const sortedInstructors = loadedInstructors.sort((a, b) => {
        return b.number_of_students - a.number_of_students;
    })
    useEffect(() => {
        setInstructors(sortedInstructors);
    }, [sortedInstructors])
    return (
        <div className='mt-10'>
            {useHelmet('Instructors')}

            <div>
                <h1 className='text-4xl font-bold text-center mb-16'>INSTRUCTORS</h1>
                {/* TODO: create bottom line */}
            </div>
            <div className="flex justify-center">
                <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
                    {
                        instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;