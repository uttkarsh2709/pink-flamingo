import React from 'react';
import '../styles/footer.css';
import { MdOutlineMail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer_main_div '>
            <div className='news_letter row'>
                <div className='col-lg-6 mail_signup'>
                    <MdOutlineMail className='mail-icon' />
                    <p>Sign Up To Shop Now</p>
                </div>
                <div className='col-lg-6 mail_signup'>
                    <form action="" className='footer-form'>
                        <input type="text" name="" placeholder='Enter your email' id="" />
                        <button name='' type='submit'>Subscribe</button>
                    </form>
                </div>
            </div>

            <div className='row text-white bottom-footer'>
                <div className='col-lg-2'>
                    <h5>Contact Us</h5>
                    <ul >
                        <li>Demo Store</li>
                        <li>No. 1258 Utawala, Nairobi, 01010</li>
                        <li>Kenya</li>
                        <li>+25470101010</li>
                        <li>example@gmail.com</li>
                    </ul>
                </div>
                <div className='col-lg-2'>
                    <h5>Information</h5>
                    <ul>
                        <li><Link to={'#'} className='footer_link'>Privacy Policy</Link></li>
                        <li><Link to={'#'} className='footer_link'>Refund Policy</Link></li>
                        <li><Link to={'#'} className='footer_link'>Shipping Policy</Link></li>
                        <li><Link to={'#'} className='footer_link'>Terms Of Service</Link></li>
                        <li><Link to={'#'} className='footer_link'>Blogs</Link></li>
                    </ul>
                </div>
                <div className='col-lg-2'>
                    <h5>Account</h5>
                    <ul>
                        <li><Link to={'#'} className='footer_link'>Search</Link></li>
                        <li><Link to={'#'} className='footer_link'>About us</Link></li>
                        <li><Link to={'#'} className='footer_link'>Faq</Link></li>
                        <li><Link to={'#'} className='footer_link'>Contact</Link></li>
                        <li><Link to={'#'} className='footer_link'>Help</Link></li>
                    </ul>
                </div>
                <div className='col-lg-2'>
                    <h5>Quick Links</h5>
                    <ul>
                        <li><Link to={'#'} className='footer_link'>Incense Sticks</Link></li>
                        <li><Link to={'#'} className='footer_link'>Shankh</Link></li>
                        <li><Link to={'#'} className='footer_link'>Kalash</Link></li>
                        <li><Link to={'#'} className='footer_link'>Incense Holders</Link></li>
                        <li><Link to={'#'} className='footer_link'>Cone Dhoop</Link></li>
                    </ul>
                </div>
                <div className='col-lg-4'>
                    <h5>Social Media.</h5>
                    <p>Follow us on social media and stay updated.</p>

                    <div className='SocialIcons'>
                        <Link to={'#'} className='footer_link'><FaTwitter className='social-icon' /></Link>
                        <Link to={'#'} className='footer_link'><FaFacebookSquare className='social-icon' /></Link>
                        <Link to={'#'} className='footer_link'><FaInstagram className='social-icon' /></Link>
                        <Link to={'#'} className='footer_link'><FaYoutube className='social-icon' /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;