import React from 'react';
import Carousel from 'react-multi-carousel';
import '../styles/carousel.css';
import { Button } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";

const Carousel1 = () => {
    return (
        <div className='pt-5'>
            <h3 className='carousel_head'>Related Products</h3>
            <Carousel
                additionalTransfrom={0}
                arrows
                
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 4,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <div className='carousel_con'>
                    <div className='carousel_main'>
                        <div className='favourite'>
                            <div className='offer'>NEW</div>
                            <div className='fav'><FaHeart /></div>
                        </div>
                        <div className='carosel1'>
                            <img src="././images/carousel1.png" alt="carousel" />
                        </div>
                        <div className='addcart_btn'>
                            <Button>Out of Stock</Button>
                        </div>
                    </div>
                    <h5>Musk INCENSE CONES</h5>
                    <p>$0.75 <span>$2.66</span></p>
                </div>

                <div className='carousel_con'>
                    <div className='carousel_main'>
                        <div className='favourite'>
                            <div className='offer1'>-10%</div>
                            <div className='fav_color'><FaHeart /></div>
                        </div>
                        <div className='carosel1'>
                            <img src="././images/carousel2.png" alt="carousel" />
                        </div>
                        <div className='addcart_btn2'>
                            <Button>Out of Stock</Button>
                        </div>
                    </div>
                    <h5>Sage INCENSE CONES</h5>
                    <p>$0.75 <span>$2.66</span></p>
                </div>

                <div className='carousel_con'>
                    <div className='carousel_main'>
                        <div className='favourite'>
                            <div className='offer2'>HOT</div>
                            <div className='fav_color'><FaHeart /></div>
                        </div>
                        <div className='carosel1'>
                            <img src="././images/carousel3.png" alt="carousel" />
                        </div>
                        <div className='addcart_btn2'>
                            <Button>Out of Stock</Button>
                        </div>
                    </div>
                    <h5>Yerba Santa INCENSE CONES</h5>
                    <p>$0.75 <span>$2.66</span></p>
                </div>

                <div className='carousel_con'>
                    <div className='carousel_main'>
                        <div className='favourite'>
                            <div className='offer'>NEW</div>
                            <div className='fav_color'><FaHeart /></div>
                        </div>
                        <div className='carosel1'>
                            <img src="././images/carousel4.png" alt="carousel" />
                        </div>
                        <div className='addcart_btn2'>
                            <Button>Out of Stock</Button>
                        </div>
                    </div>
                    <h5>Frankincense and Myrrh</h5>
                    <p>$0.75 <span>$2.66</span></p>
                </div>
            </Carousel>
        </div>
    )
}

export default Carousel1;