import React from 'react';

const useError = ({}) => {
    return (
        <div>
            <div className="flex justify-center my-auto">
                <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdmZjE0OWRlNDFlNjRlZDJjZGYwYmZhNmE2OWQxYWNlNzUzOTAxMSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/8L0Pky6C83SzkzU55a/giphy.gif" alt="" />
            </div>
            <div className="text-center">
                <h2 className="text-2xl font-bold">{error.error.message}</h2>
                <Link to='/'><button className='btn-custom mt-20'>Back to Home Page</button></Link>
            </div>
        </div>
    );
};

export default useError;