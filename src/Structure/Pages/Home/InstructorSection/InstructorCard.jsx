// import React from 'react';

const InstructorCard = ({ instructor }) => {
    const { language_name, country_name, instructor_name, email, number_of_students, photo } = instructor;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="w-[320px] h-[320px] rounded-xl mt-4">
                    <figure><img className='w-full h-full rounded-xl' src={photo} alt="" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{instructor_name}</h2>
                    <p><span className="font-semibold">Email:</span> {email}</p>
                    <p><span className="font-semibold">Class Name:</span> {language_name} ({country_name})</p>
                    <p><span className="font-semibold">Number Of Student:</span> {number_of_students}</p>
                    <div className="card-actions justify-start mt-5">
                        <button className="btn bg-[#1BABAF] text-white hover:text-black">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;