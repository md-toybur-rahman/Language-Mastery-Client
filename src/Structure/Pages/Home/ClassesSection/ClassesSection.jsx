import { useState, useEffect } from 'react';
import ClassesCard from './ClassesCard';

const ClassesSection = () => {
    const [loadedClasses, setLoadedClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setLoadedClasses(data))
    }, [])
    const [classes, setClasses] = useState([]);
    const sortedClasses = loadedClasses.sort((a, b) => {
        return b.total_student - a.total_student;
    })
    useEffect(() => {
        setClasses(sortedClasses.slice(0, 6));
    }, [sortedClasses])
    return (
        <div className='mt-20'>
            <div>
                <h1 className='text-4xl font-bold text-center mb-20'>OUR CLASSES</h1>
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

export default ClassesSection;