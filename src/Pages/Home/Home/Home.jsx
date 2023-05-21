import React from 'react';
import Banner from '../Banner/Banner';
import Gallary from '../Gallary/Gallary';
import SimpleSection from '../SimpleSection/SimpleSection';
import Reacttabs from '../../Reacttabs/Reacttabs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Reacttabs></Reacttabs>
            <Gallary></Gallary>
            <SimpleSection></SimpleSection>
        </div>
    );
};

export default Home;