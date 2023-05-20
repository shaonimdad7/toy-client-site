import React from 'react';
import Banner from '../Banner/Banner';
import Gallary from '../Gallary/Gallary';
import SimpleSection from '../SimpleSection/SimpleSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallary></Gallary>
            <SimpleSection></SimpleSection>
        </div>
    );
};

export default Home;