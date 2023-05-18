import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;