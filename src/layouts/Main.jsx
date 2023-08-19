import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/footer/Footer';
import Notice from '../components/Notice/Notice';

function Main() {
    return (
        <>
            <Notice />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Main;
