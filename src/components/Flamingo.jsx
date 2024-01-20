import React from 'react';
import '../styles/flamingo.css';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Flamingo = () => {
    return (
        <div className='container flamingo' >
            <h1>Why PINK FLAMINGO ?</h1>
            <div className='row p-5'>
                <div className='col-md-4 col-sm-12 bird_div'>
                    <img src="././images/bird.png" alt="" />
                </div>
                <div className='col-md-7 col-sm-12 cont_main_div'>
                    <div className='content_div'>
                        <div>
                            <span><IoIosCheckmarkCircleOutline className='check' /></span>
                        </div>
                        <div>
                            <p className='check_con'>Spirituality can provide them with a framework for understanding the universe and their role in it</p>
                        </div>
                    </div>
                    <div className='content_div'>
                        <div>
                            <span><IoIosCheckmarkCircleOutline className='check' /></span>
                        </div>
                        <div>
                            <p className='check_con'>Coping with stress and uncertainty</p>
                        </div>
                    </div>
                    <div className='content_div'>
                        <div>
                            <span><IoIosCheckmarkCircleOutline className='check' /></span>
                        </div>
                        <div>
                            <p className='check_con'>Spirituality can be a path to personal growth and self-discovery</p>
                        </div>
                    </div>
                    <div className='content_div'>
                        <div>
                            <span><IoIosCheckmarkCircleOutline className='check' /></span>
                        </div>
                        <div>
                            <p className='check_con'>Spirituality can provide people with a sense of community and connection with others</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flamingo;