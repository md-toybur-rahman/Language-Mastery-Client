
import { useState, useEffect } from 'react';
import ClassesCard from '../Home/ClassesSection/ClassesCard';
import useHelmet from '../../../hooks/useHelmet';



const Classes = () => {
    const [loadedClasses, setLoadedClasses] = useState([])
    useEffect(() => {
        fetch('https://language-mastery-server-chi.vercel.app/classes')
            .then(res => res.json())
            .then(data => setLoadedClasses(data))
    }, [])
    const [classes, setClasses] = useState([]);
    const sortedClasses = loadedClasses.sort((a, b) => {
        return b.total_student - a.total_student;
    })
    useEffect(() => {
        setClasses(sortedClasses);
    }, [sortedClasses])
    return (
        <div className='mt-10'>
            {useHelmet('Classes')}

            <div>
                <h1 className='text-4xl font-bold text-center mb-16'>CLASSES</h1>
                {/* TODO: create bottom line */}
            </div>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
                {
                    classes.map(singleClass => <ClassesCard key={singleClass._id} singleClass={singleClass}></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default Classes;