import React from 'react';
import '../styles/products.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import { LiaStarSolid } from "react-icons/lia";
import { RiStarSLine } from "react-icons/ri";

import data from '../data/db.json';
import { Pagination } from 'react-bootstrap';

const Products = () => {
  return (
    <div className='container products_main_div'>
      <Breadcrumb>
        <Link to="/" className='breadcumb_link'>Product </Link>
        <span><IoIosArrowForward className='arrow_breadcumb' /></span>
        <Link to='#' className='breadcumb_link'>Dhoop Cones</Link>
        <span><IoIosArrowForward className='arrow_breadcumb' /></span>
        <Link style={{ cursor: "default" }} className='breadcumb_link'>Jar Cones</Link>
      </Breadcrumb>

      <div className='drop_down_div'>
        <Dropdown>
          <Dropdown.Toggle variant="outlined" id="dropdown-basic" className='drop_down'>
            Price ($)
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown style={{ marginLeft: '10px' }}>
          <Dropdown.Toggle variant="outlined" id="dropdown-basic" className='drop_down'>
            Category
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </div>

      <div className='pt-5 card_container'>
        <div className='row'>
          {
            data.map((item, index) => (
              <div className='col-lg-3 mb-3'>
                <Link to={'/product-details'} className='product_link'>
                  <Card value={index} className='card_style'>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <Card.Title className='product_name'>{item.name}</Card.Title>
                      <Card.Text>
                        {item.description}
                      </Card.Text>
                      <div className='ratings'>
                        <LiaStarSolid />
                        <LiaStarSolid />
                        <LiaStarSolid />
                        <RiStarSLine />
                      </div>
                      <div className='price'>
                        <p><b>${item.price}</b></p>
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))
          }
        </div>
      </div>

      <div className='pages '>
        <Pagination>
          <Pagination.Item className='page_btn' active>{1}</Pagination.Item>

          <Pagination.Item className='page_btn'>{2}</Pagination.Item>
          <Pagination.Item className='page_btn'>{3}</Pagination.Item>
          <Pagination.Item className='page_btn'>{4}</Pagination.Item>
          <Pagination.Item className='page_btn'>{5}</Pagination.Item>
          <Pagination.Item className='page_btn'>{'Next'}</Pagination.Item>
        </Pagination>
      </div>

    </div>
  )
}

export default Products;