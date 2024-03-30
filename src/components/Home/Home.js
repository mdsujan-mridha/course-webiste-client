import React, { Fragment } from 'react';
import Hero from './Hero';
import BrandIcon from './BrandIcon';
import ToCategory from './ToCategory';
import Join from './Join';
import News from './News';


const Home = () => {
    return (
        <Fragment>
            <Hero />
            <BrandIcon />
            <ToCategory />
            <Join />
            <News />
        </Fragment>
    );
};


export default Home;