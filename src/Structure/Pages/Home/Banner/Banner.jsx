
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <div>
            <Carousel centerMode centerSlidePercentage={70} autoPlay infiniteLoop>
                <div>
                    <div>
                        <img src="https://i.ibb.co/G0mSfJD/pexels-pixabay-261895-1.jpg" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://i.ibb.co/6yYkKyn/pexels-filipe-sabino-2065490-1.jpg" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://i.ibb.co/C8jqHWL/pexels-olia-danilevich-5088180-1.jpg" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://i.ibb.co/Dwt5zVf/pexels-andrea-piacquadio-3776165-1.jpg" />
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;