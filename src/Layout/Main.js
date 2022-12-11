import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';



const Main = (props) => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;