
import Banner from '../Banner/Banner';
import ClassesSection from '../ClassesSection/ClassesSection';

const HomeLayout = () => {
    return (
        <div>
            <div className='text-center'>
                <Banner></Banner>
            </div>
            <ClassesSection></ClassesSection>
        </div>
    );
};

export default HomeLayout;