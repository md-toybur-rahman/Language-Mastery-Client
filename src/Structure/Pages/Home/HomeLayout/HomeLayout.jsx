
import useHelmet from '../../../../hooks/useHelmet';
import Banner from '../Banner/Banner';
import ClassesSection from '../ClassesSection/ClassesSection';
import InstructorSection from '../InstructorSection/InstructorSection';
import StudentJourney from '../StudentJourney/StudentJourney';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const HomeLayout = () => {
    return (
        <div>
            {useHelmet('Home')}
            <div className='text-center'>
                <Banner></Banner>
            </div>
            <ClassesSection></ClassesSection>
            <WhyChooseUs />
            <StudentJourney />
            <InstructorSection></InstructorSection>
        </div>
    );
};

export default HomeLayout;