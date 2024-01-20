import React from 'react';
import '../styles/header.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <div className='fixed'>
                <div className="top_header">QUICK BUY! Get up to 25% off on All Stones</div>

              
                <div className='navbar_desk p-3'>
                    <div className='container'>
                        <div className='row header_div'>
                            <div className='logo_div'>
                                <Link to={'/'}>
                                    <img src="./images/logo.png" alt="" />
                                </Link>
                            </div>
                            <div className='cart_div_phone'>
                                <div className='login_bar'>
                                    <div className='addtoCart'>
                                        <FaCartShopping className='cart_icon' />
                                    </div>
                                    <div className='profile'>
                                        <AiOutlineUser className='user-circle' />
                                        <span>SIGN IN / SIGN UP</span>
                                    </div>
                                </div>
                            </div>
                            <div className='search_bar_main_div'>
                                <div className='search_bar' >
                                    <div className='row'>
                                        <div className=' location_bar'>
                                            <span className='map_icon'><FaMapMarkerAlt /></span>
                                            <p className='map_text'>Deliver to <b>110094</b></p>
                                        </div>
                                        <div className='search_input_field'>
                                            <input type="text" placeholder='Search for medication & Wellness products..' />
                                        </div>

                                        <div className='search_icon'>
                                            <FaSearch />
                                        </div>
                                    </div>
                                </div>
                                <div className='phone_hamburger'>
                                    <Navbar expand="lg" >
                                        <Container>
                                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                            <Navbar.Collapse id="basic-navbar-nav">
                                                <Nav className="me-auto">
                                                    <Link to={'/'} className='dropdown-item'>Home</Link>
                                                    <NavDropdown title="Products" id="basic-nav-dropdown">
                                                        <NavDropdown title="Dhoop Cones" className='side-dropdown'>
                                                            <Link to="/products" className='dropdown-item'>
                                                                Jar Cones
                                                            </Link>
                                                            <Link to="/products" className='dropdown-item'>
                                                                Chandan Bamboo Dhoop
                                                            </Link>
                                                            <Link to="/products" className='dropdown-item'>
                                                                Backflow Cone Dhoop
                                                            </Link>
                                                            <Link to='/products' className='dropdown-item'>
                                                                Buddha Red Incense Cone
                                                            </Link>
                                                            <Link to="/products" className='dropdown-item'>
                                                                ountain Sandal Dhoop
                                                            </Link>
                                                            <Link to="/products" className='dropdown-item'>
                                                                Cone Sandal Dhoop
                                                            </Link>
                                                        </NavDropdown>
                                                        <Link to="/products" className='dropdown-item'>
                                                            Incense Holders
                                                        </Link>
                                                        <Link to="/products" className='dropdown-item'>
                                                            Yantras
                                                        </Link>
                                                        <Link to="/products" className='dropdown-item'>
                                                            Incense Sticks
                                                        </Link>
                                                        <Link to="/products" className='dropdown-item'>
                                                            Pooja Thali Sets
                                                        </Link>
                                                        <Link to="/products" className='dropdown-item'>
                                                            Shankh
                                                        </Link>
                                                        <Link to="/products" className='dropdown-item'>
                                                            Kalash
                                                        </Link>
                                                        <Link to="/products" className='dropdown-item'>
                                                            Book Rests
                                                        </Link>
                                                    </NavDropdown>
                                                    <NavDropdown title="Services" id="basic-nav-dropdown">
                                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2">
                                                            Another action
                                                        </NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                    </NavDropdown>
                                                    <Nav.Link href="#courses">Courses</Nav.Link>
                                                    <Nav.Link href="#blogs">Blogs</Nav.Link>
                                                    <Nav.Link href="#videos">Videos</Nav.Link>
                                                    <Nav.Link href="#contact">Contact</Nav.Link>
                                                </Nav>
                                            </Navbar.Collapse>
                                        </Container>
                                    </Navbar>
                                </div>
                            </div>
                            <div className='cart_div_desk'>
                                <div className='login_bar'>
                                    <div className='addtoCart'>
                                        <FaCartShopping className='cart_icon' />
                                    </div>
                                    <div className='profile'>
                                        <AiOutlineUser className='user-circle' />
                                        <span>SIGN IN / SIGN UP</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='center_div desk_hamburger'>
                    <Navbar expand="lg" >
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Link to="/" className='dropdown-item'>Home</Link>
                                    <NavDropdown title="Products" id="basic-nav-dropdown">
                                        <NavDropdown title="Dhoop Cones" className='side-dropdown'>
                                            <Link to="/products" className='dropdown-item'>
                                                Jar Cones
                                            </Link>
                                            <Link to="/products" className='dropdown-item'>
                                                Chandan Bamboo Dhoop
                                            </Link>
                                            <Link to="/products" className='dropdown-item'>
                                                Backflow Cone Dhoop
                                            </Link>
                                            <Link to="/products" className='dropdown-item' >
                                                Buddha Red Incense Cone
                                            </Link>
                                            <Link to="/products" className='dropdown-item'>
                                                ountain Sandal Dhoop
                                            </Link>
                                            <Link to="/products" className='dropdown-item'>
                                                Cone Sandal Dhoop
                                            </Link>
                                        </NavDropdown>
                                        <Link to="/products" className='dropdown-item'>
                                            Incense Holders
                                        </Link>
                                        <Link to="/products" className='dropdown-item'>
                                            Yantras
                                        </Link>
                                        <Link to="/products" className='dropdown-item'>
                                            Incense Sticks
                                        </Link>
                                        <Link to='/products' className='dropdown-item'>
                                            Pooja Thali Sets
                                        </Link>
                                        <Link to="/products" className='dropdown-item'>
                                            Shankh
                                        </Link>
                                        <Link to='/products' className='dropdown-item'>
                                            Kalash
                                        </Link>
                                        <Link to='/products' className='dropdown-item'>
                                            Book Rests
                                        </Link>
                                    </NavDropdown>
                                    <NavDropdown title="Services" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#courses">Courses</Nav.Link>
                                    <Nav.Link href="#blogs">Blogs</Nav.Link>
                                    <Nav.Link href="#videos">Videos</Nav.Link>
                                    <Nav.Link href="#contact">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>

        </>
    )
}

export default Header;