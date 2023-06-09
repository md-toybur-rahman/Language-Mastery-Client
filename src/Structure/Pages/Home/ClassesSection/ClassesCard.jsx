

const ClassesCard = ({singleClass}) => {
    const { language_name, country_name, instructor_name, total_student, available_seats, photo} = singleClass;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-[320px] h-[200px] pt-5' src={photo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{language_name} ({country_name})</h2>
                    <p><span className="font-semibold">Instructor Name:</span> {instructor_name}</p>
                    <p><span className="font-semibold">Number Of Student:</span>  {total_student}</p>
                    <p><span className="font-semibold">Available Seats:</span>  {available_seats}</p>
                    <div className="card-actions justify-start mt-5">
                        <button className="btn bg-[#1BABAF] text-white hover:text-black">Admit Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;