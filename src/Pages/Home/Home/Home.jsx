import React from 'react';
import Banner from '../Banner/Banner';
import Gallary from '../Gallary/Gallary';
import SimpleSection from '../SimpleSection/SimpleSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SimpleSection></SimpleSection>
            <Gallary></Gallary>
        </div>
    );
};

export default Home;