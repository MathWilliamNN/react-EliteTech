import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner1 from '../../assets/images/banner-1.png'
import banner2 from '../../assets/images/banner-2.png'
import banner3 from '../../assets/images/banner-3.png'
import banner4 from '../../assets/images/banner-4.png'



function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel  style={{backgroundColor:'#000000'}} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    src={banner1}
                    className="d-block w-100"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={banner2}
                    className="d-block w-100"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={banner3}
                    className="d-block w-100"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={banner4}
                    className="d-block w-100"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;