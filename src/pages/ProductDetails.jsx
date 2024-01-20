import React from 'react';
import '../styles/productdetails.css';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import { IoIosArrowForward } from 'react-icons/io';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel1 from '../components/Carousel1';


const ProductDetails = () => {
    return (
        <div className='container product_details_main_div'>
            <div className='breadcumb'>
                <Breadcrumb>
                    <Link to="/" className='breadcumb_link'>Product </Link>
                    <span><IoIosArrowForward className='arrow_breadcumb' /></span>
                    <Link to='#' className='breadcumb_link'>Dhoop Cones</Link>
                    <span><IoIosArrowForward className='arrow_breadcumb' /></span>
                    <Link style={{ cursor: "default" }} className='breadcumb_link'>Jar Cones</Link>
                </Breadcrumb>
            </div>

            <div className='product_detail'>
                <div className='row product_img_main'>
                    <div className='col-lg-6 col-sm-12 product_img'>
                        <div className='col-lg-4 other_img'>
                            <img className='active_img' src="././images/detail4.png" alt="" />
                            <img src="././images/detail1.png" alt="" />
                            <img src="././images/detail2.png" alt="" />
                            <img src="././images/detail3.png" alt="" />
                        </div>
                        <div className='col-lg-8 main_product_img'>
                            <img src="././images/main_detail.png" alt="" />
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 side-content'>
                        <p className='top-features'><span>Brand:</span> Rashmi Divine Solutions</p>
                        <p className='top-features'><span>Scent:</span> Floral</p>
                        <p className='top-features'><span>Availability:</span> Only 2 in Stock</p>
                        <span className='product-title'>Lavender Dhoop Cone Sticks Pack of 100- <br />Piece/Jar by Rashmi Divine</span>
                        <div className="stars">
                            <FaStar className='fill' />
                            <FaStar className='fill' />
                            <FaStar className='fill' />
                            <FaStar className='fill' />
                            <CiStar className='fill' />
                        </div>
                        <div className="features">
                            <ul>
                                <li>Lavender Dhoop sticks activate your senses and relax the nerves, making you less anxious. They also hold the power to cleanse the air.</li>
                                <li>Lavender Crafted out of the finest quality ingredients, this leaves a magnificent and alluring fragrance and adds more to your ‘spiritual time</li>
                                <li>Lavender Dhoop sticks are Charcoal Free Dhoop Sticks with soothing fragrances which don't cause eye irritation and headache</li>
                            </ul>
                        </div>
                        <div className="pricing">
                            <p>USD(incl. of all taxes)</p>
                            <h3>$4.05<span>$8.00</span></h3>
                            <div className="down-side">
                                <div className="quantity">
                                    <button>-</button>
                                    <button>1</button>
                                    <button>+</button>
                                </div>
                                <div className="button-both">
                                    <button className='buy-now normal'>Buy Now</button>
                                    <button className='add-to-cart normal'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tabs container">
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="Description" title="Description">
                        Dhoop incence cone made from natual hurbs and scented.Long lasting enthralling dhoop batti for regular use - encouraging and cheering dhoop incense cones. Use dhoop bati for offering your prayers or while meditating or relaxing. It will unquestionably boost up your confidence, create encouraging environment and purify the atmosphere while spreading the lingering aroma all around. Use it every morning while doing prayers, while meditating or exercising. It's one of the best incense cones that spread mesmerizing fragrance all around. Simply relax and have the time of your lives by getting these incense cones. can we use for spiritual and meditation purpose. Its great fragrance and long lasting effect. Its heavenly aroma encourages your soul and thoughts to be pure and beautiful. For uplifting and purifying the ambience.
                    </Tab>
                    <Tab eventKey="Product Information" title="Product Information">
                        Write your Profile information here
                    </Tab>
                    <Tab eventKey="Reviews" title="Reviews">
                        Writes Your Reviews here
                    </Tab>

                </Tabs>
            </div>

            <Carousel1 />
        </div>
    )
}

export default ProductDetails;