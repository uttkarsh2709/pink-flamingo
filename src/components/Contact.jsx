import React from 'react';
import '../styles/contact.css';
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
    return (
        <div className='container pt-4'>
            <h1 className='contact_head'>Let’s Connect</h1>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 center'>
                    <form action="" className='contact-form'>
                        <div className="line row">
                            <div className="main-input">
                                <AiOutlineUser className='form-icon' />
                                <input type="text" name="" placeholder='Name' id="" />
                            </div>
                            <div className="main-input">
                                <FiPhone className='form-icon' />
                                <input type="text" name="" placeholder='Phone Number' id="" />
                            </div>
                        </div>
                        <div className="line">
                            <div className="main-input single-line">
                                <MdOutlineMail className='form-icon' />
                                <input type="text" name="" placeholder='Phone Number' id="" />
                            </div>
                        </div>
                        <div className="line">
                            <div className="main-input single-line">
                                <textarea type="text" name="" rows='4' cols='10' placeholder='Enter message'></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='col-lg-6 col-sm-12 center form-img'>
                    <img src="././images/contact.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact;