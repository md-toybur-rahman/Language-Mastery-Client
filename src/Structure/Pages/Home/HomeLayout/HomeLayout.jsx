
import useHelmet from '../../../../hooks/useHelmet';
import Banner from '../Banner/Banner';
import ClassesSection from '../ClassesSection/ClassesSection';
import InstructorSection from '../InstructorSection/InstructorSection';

const HomeLayout = () => {
    return (
        <div>
            {useHelmet('Home')}
            <div className='text-center'>
                <Banner></Banner>
            </div>
            <ClassesSection></ClassesSection>
            <InstructorSection></InstructorSection>
            {/* TODO: create extra Section */}
        </div>
    );
};

export default HomeLayout;