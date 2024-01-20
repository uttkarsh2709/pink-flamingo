import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/categorycards.css';

const CategoryCards = () => {
    return (
        <div className='container pt-4'>
            <h3 className='category_head'>Shop From Our Top Categories</h3>
            <div className='row pt-3'>
                <div className='col-md-2'>
                    <Card className='cards'>
                        <Card.Img className='card_img' variant="top" src="././images/cone-dhoop.png" />
                        <Card.Body className='card_body'>
                            <Card.Title className='card_title'>Cone Dhoop</Card.Title>
                            <Button className='shop_btn'>Shop Now</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-md-2'>
                    <Card className='cards'>
                        <Card.Img className='card_img' variant="top" src="././images/incense-holder.png" />
                        <Card.Body className='card_body'>
                            <Card.Title className='card_title'>Incense Holders</Card.Title>
                            <Button className='shop_btn'>Shop Now</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-2'>
                    <Card className='cards'>
                        <Card.Img className='card_img' variant="top" src="././images/incense-sticks.png" />
                        <Card.Body className='card_body'>
                            <Card.Title className='card_title'>Incense Sticks</Card.Title>
                            <Button className='shop_btn'>Shop Now</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-2'>
                    <Card className='cards'>
                        <Card.Img className='card_img' variant="top" src="././images/shankh.png" />
                        <Card.Body className='card_body'>
                            <Card.Title className='card_title' style={{ marginLeft: '20px' }}>Shankh</Card.Title>
                            <Button className='shop_btn'>Shop Now</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-2'>
                    <Card className='cards'>
                        <Card.Img className='card_img' variant="top" src="././images/kalash.png" />
                        <Card.Body className='card_body'>
                            <Card.Title className='card_title' style={{ marginLeft: '20px' }}>Kalash</Card.Title>
                            <Button className='shop_btn'>Shop Now</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-2'>
                    <Card className='cards'>
                        <Card.Img className='card_img' variant="top" src="././images/buddha.png" />
                        <Card.Body className='card_body'>
                            <Card.Title className='card_title'>Buddha Statue</Card.Title>
                            <Button className='shop_btn'>Shop Now</Button>
                        </Card.Body>
                    </Card>
                </div>


            </div>
        </div>
    )
}

export default CategoryCards;