import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/slider.css';

const Slider = () => {
    return (
        <div className='pt-2' style={{marginTop:'150px'}} >
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <div className='row slider_div'>
                        <div className='slider_img'>
                            <img src="././images/slider-image.png" alt="" />
                        </div>
                        <div className='slider_text'>
                            <h1>
                                Transform Your Mind & Soul: <br /> Discover Your Spiritual Path with <br /> Our Courses
                            </h1>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='row slider_div'>
                        <div className='slider_img'>
                            <img src="././images/slider-image.png" alt="" />
                        </div>
                        <div className='slider_text'>
                            <h1>
                                Transform Your Mind & Soul: <br /> Discover Your Spiritual Path with <br /> Our Courses
                            </h1>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='row slider_div'>
                        <div className='slider_img'>
                            <img src="././images/slider-image.png" alt="" />
                        </div>
                        <div className='slider_text'>
                            <h1>
                                Transform Your Mind & Soul: <br /> Discover Your Spiritual Path with <br /> Our Courses
                            </h1>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider;