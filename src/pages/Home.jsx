import React from 'react';
import Slider from '../components/Slider';
import CategoryCards from '../components/CategoryCards';
import Flamingo from '../components/Flamingo';
import Contact from '../components/Contact';
import Carousel2 from '../components/Carousel2';

const Home = () => {
    return (
        <div>
            <Slider />
            <CategoryCards />
            <Flamingo />
            <Carousel2 />
            <Contact />
        </div>
    )
}

export default Home;